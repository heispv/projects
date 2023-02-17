import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkFrom from './components/ImageListForm/ImageLinkFrom';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const faceBoundingBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage")
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: faceBoundingBox.left_col * width,
      topRow: faceBoundingBox.top_row * height,
      rightCol: width - (faceBoundingBox.right_col * width),
      bottomRow: height - (faceBoundingBox.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    const USER_ID = 'heispv';
    const PAT = '4081350e80244ae89d9826f80f117210';
    const APP_ID = 'my-first-application';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';    
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
        "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
        },
        "inputs": [
          {
            "data": {
              "image": {
                "url": IMAGE_URL
              }
            }
          }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => {

          if (response) {
            fetch('http://localhost:3001/image', {
              method: 'put',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(entries => {
              this.setState(Object.assign(this.state.user, { entries: entries }))
            })
          }

          return (response.json())
        })
        .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
        .catch(error => console.log('error', error));
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
    
  render() {
    return (
      <div className="App">
        <div className='particles'>
          <ParticlesBackground />
        </div>
        {this.state.route === "signin"
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : (this.state.route === "register"
              ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <div>
                  <Navigation onRouteChange={this.onRouteChange}/>
                  <Logo />
                  <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                  <ImageLinkFrom onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                  <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
                </div>
            )
        }
      </div>
    );
  }
}

export default App;

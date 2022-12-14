# Convolutional Neural Networks
Here you can check out my Projects which have been written using CNNs

## Table of Contents

* [Steak Pizza](https://github.com/heispv/projects/blob/master/cnn/steak_pizza.ipynb) : In this project which was Udemy's TensorFlow Zero to Mastery course I used different pizza and stake images and then created some models to classify these two foods from each other.

* [MNIST](https://github.com/heispv/projects/blob/master/cnn/mnist.ipynb) : As any other machine learning engineer one of the datasets which I worked with is MNIST dataset to train a model for handwritten digit recognition, so in this project you can check out the code for this problem.

* [CFAR10](https://github.com/heispv/projects/blob/master/cnn/cfar10.ipynb) : CFAR10 is a popular dataset which is being used to train a model which can classify 10 different classes. In this project I created a model to solve this problem. Note that it is a very simple model and so the accuracy is not suitable enough. Transfer Learning can be applied to improve the accuracy.

* [Food101](https://github.com/heispv/projects/blob/master/cnn/food101.ipynb) : In this project Transfer Learning is used to train a model to classify 101 different foods which we have in our dataset. The base model is EfficientNetB0 which can be found from TensorFlowHub. Mixed Precision method is used to reduce the training time. It should be mentioned that only feature extraction layer is trained and we haven't fine tuned the other layers of our network. The final accuracy is 70.6%.
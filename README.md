# Projects
Listed below are a number of projects that I have completed as part of my studies.

## [AI for Medicine: Chest X-Ray Medical Diagnosis](https://github.com/heispv/projects/blob/master/machine-learning/ai_for_medicine/ai_for_medical_diagnosis/first_week_programming_assignment/C1_W1_Assignment.ipynb)

In this segment of the "AI for Medicine" course, I developed a deep learning system for diagnosing chest X-rays. Utilizing a real-world X-ray dataset, the project involved data preprocessing and implementing transfer learning with a DenseNet model for image classification. Key aspects of the project include:

- **Data Preprocessing**: Prepared and processed chest X-ray images for deep learning application.
- **Model Fine-Tuning**: Applied transfer learning techniques to fine-tune a DenseNet model, adapting it to the specific requirements of medical image classification.
- **Performance Evaluation**: Used the AUC metric for ROC curves to assess model accuracy.
- **GradCAM Visualization**: Employed GradCAMs to generate heatmaps, providing visual explanations of the model's decision-making by highlighting critical regions in the images for predicting pathological conditions.

![Chest X-Ray Analysis](https://user-images.githubusercontent.com/102462222/211542892-4c10a122-cb14-4e2c-be53-ff3bd465e9ef.png)

This project showcases the application of advanced deep learning techniques in medical image analysis, offering insights into AI-driven diagnostics in healthcare.

---

## [Brain Tumor Auto-Segmentation for Magnetic Resonance Imaging (MRI)](https://github.com/heispv/projects/blob/master/machine-learning/ai_for_medicine/ai_for_medical_diagnosis/third_week_programming_assignment/C1_W3_Assignment.ipynb)
This project, as part of the "Artificial Intelligence for Medicine" course, involves developing a neural network to segment brain tumors from MRI scans. It encompasses understanding MRI, preprocessing techniques including normalization and patch extraction, and building and evaluating a 3D U-Net model.

![brain3](https://github.com/heispv/projects/assets/102462222/2b531a2f-b0d8-4bc0-a180-d6c4c651b46d)

### Key Learnings
- Explored MRI as a key medical imaging tool.
- Applied MRI data preprocessing, including normalization and patch extraction.
- Implemented and assessed a 3D U-Net model for image segmentation.
- Conducted exercises on sub-volume extraction and standardization, enhancing practical understanding of data handling.
- Utilized metrics like Dice Coefficient and Soft Dice Loss for model evaluation.

### Technologies Used
- Deep learning with Keras.
- MRI data processing with Nibabel, NumPy, and Pandas.

This project provided valuable experience in medical image analysis, from data preparation to deep learning implementation and evaluation in the context of medical imaging.

---

## Convolutional Neural Networks Portfolio

### [Food101 Classification with Transfer Learning](https://github.com/heispv/projects/blob/master/machine-learning/cnn/food101.ipynb)
In this project, I addressed the challenge of classifying 101 different food categories. The approach involved leveraging the EfficientNetB0 model as the foundational architecture. Key steps in this process included:
* Data Preprocessing: Thorough preparation and preprocessing of the dataset were essential to ensure compatibility with the EfficientNetB0 model.
* Feature Extraction Layer Addition: I augmented the model with a new feature extraction layer to specifically adapt to the food classification task.
* Mixed Precision Training: To optimize computational performance, I employed Mixed Precision training. This technique significantly accelerated the training process without compromising the model's effectiveness.

*By fine-tuning the model and using learning rate decay, we can see a much better performance of the model*

### [Steak vs. Pizza Classification](https://github.com/heispv/projects/blob/master/machine-learning/cnn/steak_pizza.ipynb)
Developed a TensorFlow-based image classification model to differentiate between pizza and steak images. This project, a part of the Udemy's Zero to Mastery course, involved experimenting with several model architectures to achieve successful classification.

### [MNIST Handwritten Digit Recognition](https://github.com/heispv/projects/blob/master/machine-learning/cnn/mnist.ipynb)
Trained a model to recognize handwritten digits using the MNIST dataset. This project honed my skills in building and fine-tuning machine learning models for image classification tasks.

### [CFAR10 Image Classification](https://github.com/heispv/projects/blob/master/machine-learning/cnn/cfar10_cnn.ipynb)
Created a model to classify images into 10 different categories using the CFAR10 dataset. Despite its simplicity and moderate accuracy, this project highlighted the potential for enhancement through transfer learning techniques.

Each project offered a unique challenge and learning experience in the realm of image classification, deepening my understanding and proficiency in convolutional neural networks and their applications.

---

## Reinforcement Learning Portfolio

### [LunarLander Environment with PPO](https://github.com/heispv/projects/blob/master/machine-learning/reinforcement_learning/DeepRL_1st_assignment.ipynb)
Implemented the Proximal Policy Optimization (PPO) model to successfully navigate the Lunar Lander environment. This project demonstrates the application of advanced reinforcement learning techniques in a complex simulation.

![lunar](https://github.com/heispv/projects/assets/102462222/8a25c4d7-d204-44de-89ae-110cdddc06a7)

### [Blackjack Strategy with Monte Carlo Control](https://github.com/heispv/projects/blob/master/machine-learning/reinforcement_learning/black_jack.ipynb)
Developed a reinforcement learning solution for the Blackjack environment using Epsilon-greedy Monte Carlo control. This project, part of Udacity's Deep Reinforcement Learning course, focused on formulating and optimizing policies for decision-making in a card game context.

### [Multi-Armed Bandit Solutions](https://github.com/heispv/projects/tree/master/machine-learning/reinforcement_learning/multi_armed_bandit)
Explored various strategies like Epsilon-greedy, Optimistic Initial Value, and UCB1 to solve the multi-armed bandit problem, showcasing different reinforcement learning approaches to balance exploration and exploitation.

### [Frozen Lake Problem - Q Learning](https://github.com/heispv/projects/tree/master/machine_learning/reinforcement-learning/fronezlake_q_learning.py)
Applied the Q-Learning algorithm to tackle the Frozen Lake environment. This project illustrates the use of Q-Learning in navigating through a grid-based puzzle environment, emphasizing the role of reinforcement learning in problem-solving.

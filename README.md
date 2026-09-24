# Student-pass-file-prediction
Browser-based ML app predicting student pass/fail outcomes using TensorFlow.js logistic regression and a from-scratch CART decision tree — no backend required.
Student Pass/Fail Prediction is a fully client-side machine learning app built with React, Vite, and Tailwind CSS. It trains and compares two models — a TensorFlow.js logistic regression and a from-scratch CART decision tree — directly in the browser on a synthetic dataset of 956 students, with no backend or external APIs involved.

The app handles the full pipeline in-browser: CSV loading and cleaning, median imputation of missing values, feature engineering (Academic Average and Study Engagement scores), an 80/20 train/test split, model training, and evaluation (accuracy, precision, recall, F1, ROC-AUC, confusion matrix). Users can input a student's academic profile to get a live pass/fail prediction with an interpretability category, explore dataset-driven insights (e.g. correlation between attendance and outcome), and export a full PDF report of the analysis.

A sibling project to a similarly-architected Titanic Survival Prediction app, reusing the same model pipeline adapted for academic outcome prediction.
# Student Pass/Fail Prediction

## Project Overview

Student Pass/Fail Prediction is a machine learning-based web application that predicts whether a student is likely to pass or fail based on academic and behavioral factors.

The application analyzes student information such as attendance, study hours, internal marks, assignment scores, previous examination scores, midterm scores, participation, and sleep hours.

Two machine learning models are implemented and evaluated:

* Logistic Regression
* Decision Tree

The complete machine learning workflow runs directly in the browser without requiring a backend server or external API.

## Features

* Student pass/fail prediction
* Logistic Regression model
* Decision Tree model
* Model performance comparison
* Student data analysis
* Attendance and study-hour analysis
* Confusion matrix
* Accuracy, Precision, Recall, F1 Score, and ROC-AUC
* Dynamic data-driven insights
* Student profile analysis
* PDF report generation
* CSV dataset processing
* Missing-value handling
* Feature engineering
* Responsive dashboard interface

## Technologies Used

### Frontend

* React
* Vite
* Tailwind CSS
* JavaScript

### Machine Learning

* TensorFlow.js
* Logistic Regression
* Decision Tree
* Gini Impurity
* Feature Engineering
* Data Normalization

### Data Processing

* PapaParse
* JavaScript-based preprocessing
* Median imputation
* Min-Max normalization

### Visualization and Reporting

* Recharts
* jsPDF
* html2canvas

## Dataset

The project includes a student results dataset containing approximately 956 student records.

The dataset contains information such as:

* Student ID
* Age
* Gender
* Attendance
* Study Hours
* Internal Marks
* Assignment Score
* Previous Exam Score
* Midterm Score
* Participation
* Sleep Hours
* Final Result

The final result contains two classes:

* Pass
* Fail

The dataset is intended for educational and demonstration purposes.

## Machine Learning Models

### Logistic Regression

Logistic Regression is used as a binary classification model to estimate the probability that a student will pass.

TensorFlow.js is used to train the model directly in the browser.

The model uses a sigmoid activation function and binary cross-entropy loss.

### Decision Tree

A Decision Tree classifier is implemented from scratch using JavaScript.

The model uses Gini impurity to determine the best splits and can also provide feature importance based on impurity reduction.

## Data Preprocessing

Before training the models, the application performs several preprocessing steps:

1. Loads the CSV dataset.
2. Validates required columns.
3. Removes invalid records.
4. Removes duplicate records.
5. Handles missing values using median imputation.
6. Creates additional engineered features.
7. Splits the dataset into training and testing sets.
8. Normalizes numerical features where required.

The dataset is divided using an 80/20 train-test split.

## Feature Engineering

Two additional features are generated:

### Academic Average

Academic Average represents the mean of:

* Internal Marks
* Assignment Score
* Previous Exam Score
* Midterm Score

### Study Engagement

Study Engagement combines information from:

* Study Hours
* Participation
* Attendance

These engineered features provide additional information for the machine learning models.

Student ID and the final result are not used as prediction features, helping prevent target leakage.

## Model Evaluation

The application evaluates both machine learning models using the same test dataset.

The following metrics are calculated:

* Accuracy
* Pre

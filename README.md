# Student-pass-file-prediction
Browser-based ML app predicting student pass/fail outcomes using TensorFlow.js logistic regression and a from-scratch CART decision tree — no backend required.
Student Pass/Fail Prediction is a fully client-side machine learning app built with React, Vite, and Tailwind CSS. It trains and compares two models — a TensorFlow.js logistic regression and a from-scratch CART decision tree — directly in the browser on a synthetic dataset of 956 students, with no backend or external APIs involved.

The app handles the full pipeline in-browser: CSV loading and cleaning, median imputation of missing values, feature engineering (Academic Average and Study Engagement scores), an 80/20 train/test split, model training, and evaluation (accuracy, precision, recall, F1, ROC-AUC, confusion matrix). Users can input a student's academic profile to get a live pass/fail prediction with an interpretability category, explore dataset-driven insights (e.g. correlation between attendance and outcome), and export a full PDF report of the analysis.

A sibling project to a similarly-architected Titanic Survival Prediction app, reusing the same model pipeline adapted for academic outcome prediction.

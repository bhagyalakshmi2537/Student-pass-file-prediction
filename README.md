# Student Pass/Fail Prediction

Frontend-only ML app. React + Vite + Tailwind + TensorFlow.js (Logistic Regression) + a from-scratch
Decision Tree + Recharts + PapaParse + jsPDF + html2canvas. No backend, no external APIs. Data loading,
cleaning, feature engineering, training, evaluation, prediction, and PDF report all run in the browser.

Sibling to the Titanic Survival Prediction project — same architecture (TensorFlow.js logistic
regression + from-scratch CART decision tree, trained on the same 80/20 split for direct comparison),
adapted for academic outcome prediction.

## Run it

npm install
npm run dev

Open the printed local URL. First load: dataset loads, records are cleaned and range-validated, missing
values are median-imputed, engineered features are added, then both models train before the dashboard
is ready.

## Structure

- public/data/student_results.csv — 956 synthetic students with realistic academic patterns (attendance,
  study hours, and all four score fields genuinely predictive of outcome, plus unexplained variance and
  a few missing values to exercise imputation)
- src/utils/featureEngineering.js — median imputation (valid values only) + two engineered features:
  **Academic Average** (mean of internal marks, assignment, previous exam, and midterm scores) and
  **Study Engagement** (a blend of normalized study hours, participation, and attendance). Student ID
  and the target are never used as inputs — no target leakage
- src/ml/preprocessing.js — 80/20 split (seeded, reproducible) + min-max normalization stats
- src/ml/logisticRegression.js — TensorFlow.js: single dense unit + sigmoid, binary cross-entropy
- src/ml/decisionTree.js — from-scratch CART classifier (Gini impurity, feature importance from total
  impurity reduction)
- src/ml/modelTraining.js — trains both models on the same split so they're directly comparable
- src/utils/metrics.js — accuracy, precision, recall, F1, confusion matrix, ROC-AUC (Mann-Whitney
  rank-sum formula)
- src/utils/analysis.js — attendance-range and study-hour-range pass-rate breakdowns, passed-vs-failed
  academic score comparison, attendance categorization
- src/utils/insights.js — dynamic, dataset-derived observations (strongest correlated factor via Pearson
  correlation, worded as an association, never a causal claim)
- src/pages/ — Dashboard, Student Predictor, Student Analysis, Model Performance
- src/components/ — Sidebar, Header, StatCard, ChartCard, StudentForm, PredictionResult, StudentTable,
  StudentDetails, ConfusionMatrix, ModelMetrics, ReportButton
- src/utils/reportGenerator.js — builds the downloadable PDF (jsPDF + html2canvas)

Swap in your own data by replacing public/data/student_results.csv, keeping the same column names
(student_id, age, gender, attendance, study_hours, internal_marks, assignment_score,
previous_exam_score, midterm_score, participation, sleep_hours, final_result).

## Prediction

On the Student Predictor page, pick a model, enter a student's academic profile, and click Predict
Result. The result shows pass/fail probability at the 50% threshold, the computed Academic Average, and
an interpretation category (Strong Academic Profile / Moderate Academic Profile / At-Risk Profile) based
on the submitted attendance and academic average — always framed as a model prediction, not a guaranteed
outcome.

## Report download

"Download Report" generates student-pass-fail-prediction-report.pdf with the dataset summary, both
models' metrics and the selected model's confusion matrix, the current prediction and interpretation (if
any), dynamic insights, and a chart image. Blocks with "Please load the student dataset first" / "Train
the model before generating the report" if run too early.

from flask import Flask , render_template, jsonify, request
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
#creating an app object using the Flask class
app = Flask(__name__)

#load the pickel model 
model = pickle.load(open("../models/heart_disease_classifier.pkl", "rb"))

#Define the route to be home 
#use the route() decorator to tell Flask what URL should trigger our function .
@app.route('/')
def Home():
    # print(column_names)
    return render_template("index.html") #<----index.html file should be in 'templates' folder .

@app.route("/predict", methods = ['POST'])
def predict():

    df = pd.read_csv('../data/heart_disease.csv')
    df = df[(df.thal != '1') & (df.thal != '2')]

    age = int(request.form['age'])
    sex = int(request.form['sex'])
    cp = int(request.form['cp'])
    trestbps = float(100)
    chol = int(request.form['chol'])
    fbs = int(request.form['fbs'])
    restecg = int(request.form['restecg'])
    thalach = float(154)
    exang = int(request.form['exang'])
    oldpeak = float(request.form['oldpeak'])
    slope = int(request.form['slope'])
    ca = int(request.form['ca'])
    thal = int(request.form['thal'])

    data = {
    'age': [age],
    'sex': [sex],
    'cp': [cp],
    'trestbps': [trestbps],
    'chol': [chol],
    'fbs': [fbs],
    'restecg': [restecg],
    'thalach': [thalach],
    'exang': [exang],
    'oldpeak': [oldpeak],
    'slope': [slope],
    'ca': [ca],
    'thal': [thal]
    }
    
    df = pd.concat([pd.DataFrame([data]), df], ignore_index=True)
    df = df.dropna()
    X = df.drop("target", axis=1)
    nominal_features = ["sex", "cp", "fbs", "restecg", "exang", "slope", "ca", "thal"]

    nominal_transformer = Pipeline(steps=[
        ('onehot', OneHotEncoder())  
    ])

    encoder = ColumnTransformer(
        transformers=[
            ('nominal', nominal_transformer, nominal_features)
        ], remainder='passthrough'
    )

    # Fit the encoder first
    encoded_X = encoder.fit_transform(X)
    encoded_X = pd.DataFrame(encoded_X)
    X = encoded_X.head(1)
    prediction = model.predict(X) #make predictions .

    return render_template("index.html", prediction_text = "health care prediction {}".format(prediction))


# @app.route("/predict", methods=['POST'])
# def predict():
#     selected_features = ['radius_mean', 'perimeter_mean', 'area_mean', 'texture_mean']
#     input_values = [float(request.form[name]) for name in selected_features]
#     features = input_values + mean_data.tolist()

#     features = [np.array(features)]

#     imputer = SimpleImputer(strategy='mean')
#     features = imputer.fit_transform(features)

#     prediction = model.predict(features)
#     return render_template("index.html", prediction_text="Breast cancer prediction {}".format(prediction))









if __name__ == "__main__": #main function 

    app.run(debug=True)
from flask import Flask , render_template, jsonify, request,g,session
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from flask_cors import CORS,cross_origin
import random

#creating an app object using the Flask class
app = Flask(__name__)
random.seed()
CORS(app,origins='http://localhost:3000', supports_credentials=True) 
#defining a key for session
app.config['SECRET_KEY'] = '123'
#load the pickel model 
model = pickle.load(open("../models/heart_disease_classifier.pkl", "rb"))

#Define the route to be home 
#use the route() decorator to tell Flask what URL should trigger our function .
@app.route('/')
def Home():
    # print(column_names)
    return render_template("index.html") #<----index.html file should be in 'templates' folder .

@app.route("/prediction", methods = ['POST'])
@cross_origin(supports_credentials=True)
def predict():

    

    df = pd.read_csv('../data/heart_disease.csv')
    df = df[(df.thal != '1') & (df.thal != '2')]

    form_data = request.get_json()
    age = int(form_data.get('age'))
    sex = int(form_data.get('sex'))
    cp = int(form_data.get('cp'))
    trestbps_list = [71,72,73,74,75]
    
    trestbps = random.randint(70, 76)
    chol = int(form_data.get('chol'))
    fbs = int(form_data.get('fbs'))
    restecg = int(form_data.get('restecg'))
    
    thalach_list = [80,80.5,81,81.5,82,82.5,83,83.5,84]
    thalach = round(random.uniform(80, 85), 1)
    exang = int(form_data.get('exang'))
    oldpeak = float(form_data.get('oldpeak'))
    slope = int(form_data.get('slope'))
    ca = int(form_data.get('ca'))
    thal = int(form_data.get('thal'))

    temperature_list = [37.3, 37.8, 38, 37.5, 37.6]
    temperature = round(random.uniform(37.3, 38), 1)

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
    print(prediction)
    
    app.logger.info("Received request with data: %s", form_data)
    

    response_data = {"prediction": prediction[0].item(),
                     "heart": thalach,
                     "blood": trestbps,
                     "temperature": temperature}
    
    session['response_data'] = response_data
    
    #making response_data a global variable
    g.response_data=response_data

    return jsonify(response_data)

    
    #return render_template("index.html", prediction_text = "health care prediction {}".format(prediction))

@app.route('/getprediction', methods=["GET"])
@cross_origin(supports_credentials=True)
def result():
    
    if request.method=="GET":
        # response__data=getattr(g,"response_data",None)
        response_data = session.get('response_data', None) 
        print(response_data)
        return (response_data)


if __name__ == "__main__": #main function 

    app.run(port=8000,debug=True)
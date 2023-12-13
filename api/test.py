from flask import Flask, redirect, url_for, render_template, request, jsonify
from flask_cors import CORS,cross_origin
app=Flask(__name__);

CORS(app,origins='http://localhost:3000',support_credentials=True)  # Enables CORS for all routes


####testing get (works)
@app.route("/members")
def home():
    return {"members":["member1","member2", "member3"]}

###testing redirection with parameter
@app.route("/admin")
def admin():
    return redirect(url_for("user",usr="aya"))

######testing POST and get from a form from an html temlate then redirecting idem last example
@app.route("/login",methods=["POST","GET"])
def login():
    # if request.method == "POST":
    #     user= request.form["name"]
    #     return redirect(url_for("user", usr=user))
    # else:    
    return render_template("login.html")

###testing passing a route as an argument
@app.route("/<usr>")
def user(usr):
    return f"<h1>Hello {usr}</h1>"


# *******************************************

@app.route('/prediction', methods=["POST","GET"])
#@cross_origin(supports_credentials=True)
def submit_form():
    data = request.json
    print(data) 
    response_data = {"prediction": "1",
                     "heart": "thalach",
                     "blood": "trestbps",
                     "temperature": "40"}
    return jsonify(response_data)
    #Assuming data is sent in JSON format
    #Process the form data as needed
    
    
#, form_data=data)



# *******************************************





if __name__ == "__main__":
    app.run(port=8000,debug=True)
 
#debug=True
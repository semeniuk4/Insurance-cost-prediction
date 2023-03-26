from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/predict_insurance_charges', methods=['POST'])
def predict_insurance_charges():
    age = int(request.form['age'])
    sex = int(request.form['sex'])
    height = int(request.form['height'])
    weight = float(request.form['weight'])
    children = int(request.form['children'])
    smoker = int(request.form['smoker'])
    response = jsonify({
        'estimated_charge' : util.get_estimate_charge(age, sex, height, weight, children, smoker)
    })
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:55124')

    return response

if __name__ == "__main__":
    print("Starting Flask server")
    util.load_saved_artifacts()
    app.run()
import json
import pickle
import numpy as np

__data_columns = None
__model = None

def get_colunmns():
    return __data_columns;

def get_estimate_charge(age, sex, height, weight, children, smoker):
    height_m = height/100
    bmi = weight/(height_m**2)
    x = np.zeros(len(__data_columns))
    x[0] = age
    x[1] = sex
    x[2] = bmi
    x[3] = children
    x[4] = smoker

    return round(__model.predict([x])[0], 3)

def load_saved_artifacts():
    print("Loading saved artifacts...")
    global __data_columns
    global __model

    with open("artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)["data_columns"]

    with open("artifacts/insurance_cost.pickle", "rb") as f:
        __model = pickle.load(f)
    print("loading saved artifacts...done")

if __name__ == '__main__':

    load_saved_artifacts()
    print(get_estimate_charge(23,1,180, 70,0,1))
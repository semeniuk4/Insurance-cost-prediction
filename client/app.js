function getSmoker() {
  var smoker = document.getElementsByName("smoker");
  for(var i in smoker) {
    if(smoker[i].checked) {
        return parseInt(i);
    }
  }
  return -1; // Invalid Value
}

function getChildren() {
  var children = document.getElementsByName("Children");
  for(var i in children) {
    if(children[i].checked) {
        return parseInt(i);
    }
  }
  return -1;
}


function getSex() {
  var sex = document.getElementsByName("sex");
  for(var i in sex) {
    if(sex[i].checked) {
        return parseInt(i);
    }
  }
  return -1;
}

function onClickedEstimateCharge() {
  console.log("Estimate price button clicked");
  var weight = document.getElementById("uiWeight");
  var height = document.getElementById("uiHeight");
  var age = document.getElementById("Age");
  var children = getChildren();
  var smoker = getSmoker();
  var sex = getSex();
  var estCharge = document.getElementById("EstimateCharge");
  var url = "http://127.0.0.1:5000/predict_insurance_charges"; //Use this if you are NOT using nginx which is first 7 tutorials
  // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    console.log(weight.value);
    console.log(age.value);
    console.log(sex)
    console.log(children)
    console.log(smoker)
    console.log(height.value);

  $.post(url, {
      age: parseInt(age.value),
      sex: sex,
      height: parseInt(height.value),
      weight: parseInt(weight.value),
      children: children,
      smoker: smoker
  },function(data, status) {
    console.log(height.value);

      console.log(data.estimated_charge);
      estCharge.innerHTML = "<h2>" + data.estimated_charge.toString() + " $</h2>";
      console.log(status);
  });
}

// function onPageLoad() {
//   console.log( "document loaded" );
//   var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
//   // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//
// }
//
// window.onload = onPageLoad;
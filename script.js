async function submitForm(e){
  e.preventDefault();
  var form = e.currentTarget;
  var url = form.action;

  try{
    var formData = new FormData(form);
    var responseData = await postFormDataAsJson({ url, formData });
  }
  catch(e){
    console.error(e);
  }
}

async function postFormDataAsJson({ url, formData }){
  var plainFormData = Object.fromEntries(formData.entries());
  var formDataJsonString = JSON.stringify(plainFormData);
  var fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: formDataJsonString
  };

  var response = await fetch(url, fetchOptions);
  return response.json();
}

var addCarForm = document.getElementById("add-car");

if(addCarForm != null){
  addCarForm.addEventListener("submit", submitForm);
}

var registrationForm = document.getElementById("registration");

if(registrationForm != null){
  registrationForm.addEventListener("submit", submitForm);
}

var panels = document.querySelectorAll(".three");

panels.forEach((panel) =>{
  panel.addEventListener("click",()=>{
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive(){
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// this is for the main page
var buttons = document.querySelectorAll(".price_button");

buttons.forEach((button) =>{
  button.addEventListener("click",()=>{
    locationest(button);
  });
});

// this if for the other html page
function locationest(button){
  sessionStorage.setItem("buttonValue", button.value); // store the button value in session storage
  location.href = "form.html"; // navigate to the other HTML page
}
// this is for the form.html page
window.addEventListener("load", () => {
var buttonValue = sessionStorage.getItem("buttonValue"); // get the button value from session storage
document.querySelector('#hi').innerHTML =  buttonValue; // modify the innerHTML of the #hi element
});

// this for loop will check if the radio personal is check or company is check
var rb = document.querySelectorAll(".radio-button");
var place = document.querySelector(".placeholder1");

for (var i=0; i<rb.length ;i++){
  if (rb[0].checked = true){
    document.querySelector("#radioTwo").addEventListener("click",()=>{
      document.querySelector(".i").innerHTML = '<i class="fas fa-user"></i>';
      document.querySelector(".top-image").src = "css/images/user.png";
      place.placeholder = "Name";
    });
  }
  if (rb[1].checked = true){
    document.querySelector("#radioOne").addEventListener("click",()=>{
      document.querySelector(".i").innerHTML = '<i class="fas fa-building"></i>';
      document.querySelector(".top-image").src = "css/images/building.PNG";
      place.placeholder = "Company";
  })};
};

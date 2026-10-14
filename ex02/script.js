


const DivBox = document.querySelector('.Activation-Box');

const headerElement = document.getElementById('firstH1');
const paragrafElement = document.getElementById('firstP');
const buttonElement = document.getElementById('firstbutton');


headerElement.textContent = "Status : Active";
paragrafElement.textContent = "This account is Active now!";
buttonElement.textContent = "Inactive";

DivBox.style.borderColor = "#3b82f6";

DivBox.classList.add("active");


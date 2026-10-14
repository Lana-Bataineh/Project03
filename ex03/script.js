
const Display = document.getElementById("DisplayCounter");

const incrementButton = document.getElementById("Increment");
const decrementButton = document.getElementById("Decrement");
const resetButton = document.getElementById("Reset");


let count = 0;

incrementButton.addEventListener("click" , function(){

	count++;
	Display.textContent = count;

	if(count === 0)
		Display.style.color = "black";
	else
		Display.style.color = "green";
});


decrementButton.addEventListener("click" , function(){

        count--;
        Display.textContent = count;
        
	if(count === 0)
                Display.style.color = "black";
        else
                Display.style.color = "red";

});


resetButton.addEventListener("click" , function(){

        count = 0;
        Display.textContent = count;
        Display.style.color = "Black";
});

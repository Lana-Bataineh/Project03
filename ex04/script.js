// get the HTML elemets by id
const TaskList = document.getElementById("taskList");

const taskDescription = document.getElementById("note");
const addButton = document.getElementById("Add");

const count = document.getElementById("TasksNum");

//define variables to use
let totalTasks = 0;

//Create function to update the count of tasks in html page
function updateHTMLCounter()
{
        count.textContent = totalTasks;
}


//Add the event when click the  ADD button
addButton.addEventListener("click" , function(){

	//read the value of the task description from the input box
	let description = taskDescription.value;

	if (description.trim() === "")
	{
	    taskDescription.value = "";
		taskDescription.focus();   
		return ;
	}
	else
	{
		//create list elements
		const listItem = document.createElement('li');
		const delButton = document.createElement('button');
		const spanText = document.createElement('span');

		//change the text for the new elemnts
		delButton.textContent = "Delete";
		spanText.textContent = description.trim();


		//append the list items to the li element then append li to ul list
		listItem.appendChild(spanText);
		listItem.appendChild(delButton);

		//add CSS to the button del
		delButton.classList.add("Button-style", "Del");
		listItem.classList.add("task-list-item");

		TaskList.append(listItem);
		
		//update the number of tasks
		totalTasks++;
		updateHTMLCounter();

		//empty the input box and return the pointer to the box.
		taskDescription.value = "";
		taskDescription.focus();

		//Add the event when click the Delete button
		delButton.addEventListener("click" , function(){
        		listItem.remove();
        		totalTasks--;
        		updateHTMLCounter();

		});
		
		//Add the event to the li element text,to add a line indicate completed task or remove it
		spanText.addEventListener("click" ,function(){

        		spanText.classList.toggle("completed");
		});


	}

});


//Add the event when click press instead of Add button
taskDescription.addEventListener("keydown" , function(event){
	
	if(event.key === "Enter")
		addButton.click();
});

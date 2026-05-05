let userInput = document.getElementById("text-input");
let addButton = document.getElementById("add-button");
let taskText = document.getElementById("task-text");    
let taskList = document.getElementById("task-list")


// Add event listener to add button
// Create a new task item and append it to the task list with the user input as the task text
// Clear the input field after adding the task


addButton.addEventListener("click", function() {

    if (userInput.value.trim().length === 0) {
        alert("Please input a task in the text box.")
    } else {
        const newItem = document.createElement('li')
        const doneBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")

        newItem.textContent = userInput.value
        doneBtn.classList.add("done-btn")
        doneBtn.textContent = "Done"
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "Delete"
        
        taskList.appendChild(newItem)
        newItem.appendChild(doneBtn)
        newItem.appendChild(deleteBtn)

        userInput.value = ""

        // Add event listener to done button
        // Toggle the "done" class on the task item to mark it as completed
        doneBtn.addEventListener("click", function() {
            newItem.classList.add("done")
        });

        // Add event listener to delete button
        // Remove the task item from the task list
        deleteBtn.addEventListener("click", function(){
            newItem.remove()
        });
    }
});
//For frontend Js Logic
document.addEventListener("DOMContentLoaded", () => {
    const newTodoInput = document.getElementById("newTodo");
    const addTodoButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    addTodoButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        const todoText = newTodoInput.value;
        if (todoText) {
            const todoItem = document.createElement("li");
            todoItem.textContent = todoText;
            todoList.appendChild(todoItem);
            newTodoInput.value = "";
        }
    });
    todoList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    });
    
    
    
    // Dark mode toggle logic
    const darkModeToggle = document.getElementById("darkModeToggle");
    const themeStylesheet = document.getElementById("theme-stylesheet");
    const body = document.body;

    darkModeToggle.addEventListener("change", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeStylesheet.href = "dark-theme.css";
        } else {
            themeStylesheet.href = "styles.css";
        }
    });
    
});



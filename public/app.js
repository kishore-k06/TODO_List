async function fetchTodos() {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo) => {
      const li = document.createElement('li');
      li.textContent = todo.text;
      todoList.appendChild(li);
    });
  }
  
  async function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const text = todoInput.value;
    if (text) {
      try {
        await fetch('/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        });
        todoInput.value = '';
        fetchTodos();  // Refresh the to-do list
      } catch (error) {
        console.error('Error adding to-do:', error);
      }
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', fetchTodos);
  
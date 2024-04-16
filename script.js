document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});

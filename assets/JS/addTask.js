export function TaskArea(){
    const taskInput = document.querySelector('.input-newTask');
    const button = document.querySelector('.btnAddNewTask');
    const taskList = document.querySelector('#taskList');

    button.addEventListener('click', ()=>{
        writeTask();
    });
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter'){
            writeTask();
        }
    });

    function writeTask(){
        const taskText = taskInput.value.trim();

        if (taskText !== ''){
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="checkList"><span class="task_item">${taskText}</span>
                <button class="taskRemove">remover</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            //inserir novo item no topo
            taskList.insertBefore(li, taskList.firstChild);
            taskInput.value = '';

            //função para remover
            const removeTask = document.querySelector('.taskRemove');
            removeTask.addEventListener('click', () => {
                taskList.removeChild(li);
            });      
            
            // checked
            function addCompletedTask(checkbox) {
                const span = checkbox.closest('li').querySelector('.task_item');
                if (checkbox.checked) {
                    span.style.textDecorationLine = 'line-through';
                } else {
                    span.style.textDecorationLine = 'none';
                }
            }
            
            document.querySelectorAll('li .checkList').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    addCompletedTask(checkbox);
                });
            });
            
        }
    }
}
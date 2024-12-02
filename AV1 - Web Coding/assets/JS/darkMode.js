export function DarkMode(){
    const chk = document.querySelector('#chk');
    chk.addEventListener('change', () => {
        addDarkMode();
    }); 
    
    const ListElement = {
        h2: document.querySelector('h2'),
        taskList: document.querySelector('.taskList-container'),
        inputWrapper: document.querySelector('.input-wrapper'),
    
        addDark(){
            document.body.classList.toggle('dark');
            ListElement.h2.classList.toggle('dark');
            ListElement.taskList.classList.toggle('dark');
            ListElement.inputWrapper.classList.toggle('dark');
        }
    }
    function addDarkMode() {    
        ListElement.addDark();
    }
}
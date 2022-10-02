const projectBtn = document.getElementById('new-project');
const displayProject = document.getElementById('display-project');
const saveProjectBtn = document.getElementById('save-project');
const setDefaultBtn = document.getElementById('set-default');



// Add new Project div to DOM while hiding the previous Project div
projectBtn.addEventListener('click', addProject);

let count = 0;
function addProject() {
    count++;
    const Array = [];
    Array.push(count);
    for (let i = 0; i < Array.length; i++) {
        
        //Call function to Populate project div with task button and table with a header
        projectDetails(Array[count], count);

    }
    if (count > 1) {
        //Hide Previous Project div
        projectHide(Array[count - 1]);
    }

}

function projectDetails(newdiv, num) {

    newdiv = document.createElement('div');
    const taskDiv = document.createElement('div');
    const taskBtn = document.createElement('button');
    taskDiv.classList.add('task-div');
    taskBtn.classList.add('task-btn');
    taskBtn.textContent = "Add New Task";
    taskDiv.appendChild(taskBtn);
    newdiv.appendChild(taskDiv);
    document.body.appendChild(newdiv);
    newdiv.classList.add('project');
    newdiv.classList.add(`project-${num}`);

    //function to save current div into an array
    saveProject(newdiv);

    //function to create a table with a header and header titles
    createToDoHead(newdiv);


    taskBtn.addEventListener('click', addNewTask);
}

function addNewTask() {
    const tblBody = document.body.children[3].children[1].children[0];
    const taskRow = document.createElement('tr');
    for (let i = 0; i < 8; i++) {
        const cell = document.createElement('td');
        cell.classList.add('cell');
        cell.textContent = `data ${i}`;
        taskRow.appendChild(cell);
    }
    tblBody.appendChild(taskRow);
}

const projectArray = [];
function saveProject(currentdiv) {
    projectArray.push(currentdiv);
    console.log(projectArray);
}

saveProjectBtn.addEventListener('click', addOptionsToDisplayProject);

function addOptionsToDisplayProject() {
    const option = document.createElement('option');
    option.text = projectArray[projectArray.length - 1].classList[1];
    option.value = projectArray[projectArray.length - 1].classList[1];
    console.log(projectArray[projectArray.length - 1].classList[1]);
    displayProject.add(option);
    console.log(displayProject.options)

}

setDefaultBtn.addEventListener('click', setDefaultProject);

function setDefaultProject() {
    const DEFAULT = document.body.children[3];
    console.log(DEFAULT)
}


function projectHide() {
    const previousDiv = document.body.children[3];
    document.body.removeChild(previousDiv);
}


const createToDoHead = ((div) => {
    const headers = ['title', 'currentDate', 'dueDate', 'type', 'priority', 'daysRemaining', 'notes', 'check'];
    const table = document.createElement('table');
    table.classList.add('table');
    const tblBody = document.createElement('tbody');
    const headRow = document.createElement('tr');
    for (let i = 0; i < 8; i++) {
        const cell = document.createElement('td');
        cell.classList.add('cell');
        const header = headers[i].toUpperCase();
        cell.textContent = `${header}`;
        headRow.appendChild(cell);
    }
    tblBody.appendChild(headRow);

    table.appendChild(tblBody);
    div.appendChild(table);

})


const taskFactory = (title, currentDate, dueDate, type, priority, daysRemaining, notes, check) => {
    this.title = title;
    this.currentDate = currentDate;
    this.dueDate = dueDate;
    this.type = type;
    this.priority = priority;
    this.daysRemaining = daysRemaining;
    this.notes = notes;
    this.check = check;
} 
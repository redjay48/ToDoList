const newProjectBtn = document.getElementById('new-project');
const displayProjectSelection = document.getElementById('display-project');
const saveProjectBtn = document.getElementById('save-project');
const setDefaultBtn = document.getElementById('set-default');
const deleteProjectBtn = document.getElementById('delete-project');





const project = (() => {
    const projectArray = [];

    const createProjectDiv = () => {
        newdiv = document.createElement('div');
        const taskDiv = document.createElement('div');
        const taskBtn = document.createElement('button');
        const projectName = document.createElement('p');
        taskDiv.classList.add('task-div');
        projectName.classList.add('project-name');
        taskBtn.classList.add('task-btn');
        taskBtn.textContent = "Add New Task";
        taskDiv.appendChild(projectName);
        taskDiv.appendChild(taskBtn);
        newdiv.appendChild(taskDiv);
        document.body.appendChild(newdiv);
        newdiv.classList.add('project');
        table.createToDoHead(newdiv);
        hidePreviousProjectDiv();

        taskBtn.addEventListener('click', table.addNewTaskToTable);

    }

    const pushProjectDivToArray = (name) => {
        const current = document.body.children[3]
        projectArray.push(current);
        current.classList.add(`${name}`);
        console.log(projectArray);
    }


    const hidePreviousProjectDiv = () => {
        if (document.body.children.length > 4) {
            const previousDiv = document.body.children[3];
            document.body.removeChild(previousDiv);
        }
    }


    const saveProjectToSelection = () => {
        const currentDiv = document.body.children[3];
        if (currentDiv.classList.length === 2) {
            alert('Project Already Saved!!');
            return;
        }
        const option = document.createElement('option');
        const projectName = prompt("Please Enter Project Name");
        option.text = projectName;
        option.value = projectName.toLowerCase().split(/[ ,]+/).join('-');
        className = option.value;
        displayProjectSelection.add(option);
        // Project Name <p>
        currentDiv.children[0].children[0].textContent = option.text.toUpperCase();;
        pushProjectDivToArray(className);
    }


    const setDefaultProject = () => {
        const currentDiv = document.body.children[3];
        if (currentDiv.classList.length !== 2) {
            alert('Please Save Project First!!!');
        } else {
            const DEFAULT = currentDiv;
            console.log(DEFAULT);
            console.log(DEFAULT.classList);
        }

    }


    const deleteProject = () => {
        const currentDiv = document.body.children[3];
        if (currentDiv.classList.length === 2) {
            if (confirm("Are You Sure You Want To Delete This Saved Project?")) {
                document.body.removeChild(currentDiv);
            }
        } else if (currentDiv.children[1].children[0].children.length > 1) {
            if (confirm("There is unsaved Data in this project. Do you still want to delete this Project?")) {
                document.body.removeChild(currentDiv);
            }
        } else {
            document.body.removeChild(currentDiv);
        }
    }


    const displayProject = (e) => {
        const currentDiv = document.body.children[3];
        for (let i = 0; i < projectArray.length; i++) {
            const classListArray = Array.from(projectArray[i].classList);
            if (classListArray.includes(e.target.value)) {
                document.body.removeChild(currentDiv);
                document.body.appendChild(projectArray[i]);
            }
        }

        console.log(e.target.value);
    }
    return {
        projectArray,
        createProjectDiv,
        pushProjectDivToArray,
        saveProjectToSelection,
        setDefaultProject,
        deleteProject,
        displayProject
    }
})();






// Button to call function to save project div as option into the display project select input
saveProjectBtn.addEventListener('click', addOptionsToDisplayProject);

function addOptionsToDisplayProject() {
    const option = document.createElement('option');
    option.text = projectArray[projectArray.length - 1].classList[1];
    option.value = projectArray[projectArray.length - 1].classList[1];
    console.log(projectArray[projectArray.length - 1].classList[1]);
    displayProject.add(option);
    console.log(displayProject.options)

}

// Button to set current project div as a default project to display when DOM is reloaded *incomplete*
setDefaultBtn.addEventListener('click', setDefaultProject);

function setDefaultProject() {
    const DEFAULT = document.body.children[3];
    console.log(DEFAULT)
}

// Hide Previous project div
function projectHide() {
    const previousDiv = document.body.children[3];
    document.body.removeChild(previousDiv);
}

// Create table with a header and title into the current div
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

// Factory function for TODO list contents
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
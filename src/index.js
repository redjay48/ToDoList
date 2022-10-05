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


const table = (() => {

    const taskRowArray = [];

    const createToDoHead = (div) => {
        const headers = ['', 'title', 'Current Date', 'Due Date', 'Type', 'Priority', 'Time Remaining', 'Notes', 'done'];
        const table = document.createElement('table');
        table.classList.add('table');
        const tblBody = document.createElement('tbody');
        const headRow = document.createElement('tr');
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            const header = headers[i].toUpperCase();
            cell.textContent = `${header}`;
            headRow.appendChild(cell);
        }
        tblBody.appendChild(headRow);

        table.appendChild(tblBody);
        div.appendChild(table);
    }


    const addNewTaskToTable = () => {
        const headers = ['sl-no', 'title', 'Current Date', 'Due Date', 'Type', 'Priority', 'Time Remaining', 'Notes', 'done'];
        const tblBody = document.body.children[3].children[1].children[0];
        const taskRow = document.createElement('tr');
        taskRowArray.push(taskRow);
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('td');
            const className = headers[i].toLowerCase().split(/[ ,]+/).join('-');
            cell.classList.add('cell');
            cell.setAttribute('id', className);
            // cell.textContent = `data ${i}`;
            taskRow.appendChild(cell);
        }
        taskRow.children[0].textContent = taskRowArray.length;


        task.title(taskRow);
        task.type(taskRow);
        task.taskBtns(taskRow);
        task.priorityBtns(taskRow);
        task.completion(taskRow);
        task.notes(taskRow);

        tblBody.appendChild(taskRow);

        // console.log(taskRowArray.length);
        // console.log(taskRowArray);
        // console.log(Array.from(taskRow.children));
        // console.log(taskRow.children);
    }


    return {
        createToDoHead,
        addNewTaskToTable
    }
})();

const task = (() => {
    const title = (row) => {
        row.children[1].title = "Click To Edit";
        row.children[1].contentEditable = true;
    }

    const type = (row) => {
        const typeSelection = document.createElement('select');
        typeSelection.classList.add('task-type');
        const optionArray = ['Development', 'Marketing', 'Management', 'Personal'];
        const emptyOption = document.createElement('option');
        emptyOption.text = "--Choose Task Type--";
        emptyOption.value = '';
        typeSelection.add(emptyOption);
        for (let i = 0; i < 4; i++) {
            const option = document.createElement('option');
            option.text = optionArray[i];
            option.value = optionArray[i].toLowerCase();
            typeSelection.add(option);
        }
        row.children[4].appendChild(typeSelection);
    }

    const taskBtns = (row) => {
        const taskNameArray = ['Save', 'Edit', 'Delete'];
        const taskBtnDiv = document.createElement('div');
        taskBtnDiv.classList.add('task-btn-div');
        for (let i = 0; i < 3; i++) {
            const btn = document.createElement('button');
            btn.classList.add('task-btns');
            btn.setAttribute('id', taskNameArray[i].toLowerCase());
            btn.textContent = taskNameArray[i];

            taskBtnDiv.appendChild(btn);
        }
        row.appendChild(taskBtnDiv);

        const taskBtnsArray = Array.from(taskBtnDiv.children);
        taskBtnsArray.forEach(button => {
            button.addEventListener('click', (e) => {
                saveEditDelete.taskFns(e, row);
            });
        })
    }

    const priorityBtns = (row) => {
        priorityNameArray = ['high', 'medium', 'low', 'none'];
        const priorityBtnDiv = document.createElement('div');
        priorityBtnDiv.classList.add('priority-btn-div');
        for (let i = 0; i < 4; i++) {
            const btn = document.createElement('button');
            btn.classList.add('priority-btn', priorityNameArray[i]);
            btn.title = priorityNameArray[i].toUpperCase();
            priorityBtnDiv.appendChild(btn);
        }
        row.children[5].appendChild(priorityBtnDiv);

        const priorityBtnsArray = Array.from(priorityBtnDiv.children);
        priorityBtnsArray.forEach(button => {
            button.addEventListener('click', disableRest)
        })
    }

    const completion = (row) => {
        const checkDiv = document.createElement('div');
        checkDiv.classList.add('checkbox-div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('completion');
        checkDiv.appendChild(checkbox);
        row.children[8].appendChild(checkDiv);


        checkbox.addEventListener('change', _check);
    }

    const notes = (row) => {
        if (row.children[7].textContent === '') {
            row.children[7].title = `Click to Edit`;
        }
        row.children[7].addEventListener('mousedown', (e) => {
            row.children[7].textContent = '';
            row.children[7].textContent = prompt('Enter Note:');
            const note = row.children[7].textContent;
            row.children[7].title = `${note} || Click to Edit`;
        })

    }

    const _check = (e) => {
        const title = e.target.parentNode.parentNode.parentNode.children[1];
        if (e.target.checked) {
            title.classList.add('line-through');
        } else {
            title.classList.remove('line-through');
        }

    }

    const disableRest = (e) => {
        btnsArray = Array.from(e.target.parentNode.children);
        btnsArray.forEach(button => {
            button.disabled = true;
        })
        e.target.disabled = false;
    }


    return {
        title,
        type,
        taskBtns,
        priorityBtns,
        completion,
        notes,
    }
})();



const saveEditDelete = (() => {
    const taskFns = (e,task) => {
        const buttonId = e.target.getAttribute('id');
        if(buttonId === 'save') {
            saveFn(task);
            
        } else if (buttonId === 'delete') {
            deleteFn(task);
        } else if (buttonId === 'edit') {
            editFn(task);
        }
    }

    const saveFn = (task) => {
        const now = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
        task.children[2].textContent = now;
    }

    const deleteFn = (task) => {
        console.log('deleted');
        task.parentNode.removeChild(task);
    }

    const editFn = (task) => {
        console.log('edited');
    }


    return {
        taskFns,

    }
})();

newProjectBtn.addEventListener('click', project.createProjectDiv);


saveProjectBtn.addEventListener('click', project.saveProjectToSelection);


setDefaultBtn.addEventListener('click', project.setDefaultProject);


deleteProjectBtn.addEventListener('click', project.deleteProject);


displayProjectSelection.addEventListener('change', project.displayProject);




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
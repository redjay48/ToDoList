console.log('ello');
// const body = document.getElementsByTagName('body')[0];

// const table = document.createElement('table')
// const tbody = document.createElement('tbody')
// const trow = docment.createElement('tr')
// const thead = document.createElement('th')
// const theadData = document.createElement('td');
// const tdata = document.createElement('td')
// const h1 = document.createElement('h1');

// h1.textContent = " i am h1"

// body.appendChild(h1)
// console.log(body)
// body.appendChild(table)
// table.appendChild(tbody)
// // tbody.textContent = "table body"
// thead.textContent = "table head"
// tbody.appendChild(thead)

// tbody.appendChild(trow)
// tdata.textContent = "table data"

// trow.appendChild(tdata)
const button = document.createElement('button');
document.body.appendChild(button);
button.textContent = "Add Row"

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 1; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 5; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        // const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        // cell.appendChild(cellText);
        cell.textContent = "hello"
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }

button.addEventListener('click', generateTable)

// Edit Cell by clicking
const tableRow = document.getElementById('table-row')
const children = Array.from(tableRow.children);
console.log(children)

children.forEach(child => {
    child.addEventListener('click', edit)
})

function edit(e) {
    e.target.contentEditable = true;
}


//select button to disable the rest of the buttons
const priorBtns = document.getElementsByClassName('button-prior');
const btnsArray = Array.from(priorBtns)

btnsArray.forEach(button => {
    button.addEventListener('click', disableRest)

})

function disableRest(e) {
    btnsArray.forEach(button => {
        button.disabled = true;
    })
    e.target.disabled = false;
}


// console log select option 
const newProject = document.getElementById('new-project');
const project1 = document.getElementById("project1")

const projects = document.getElementById('projects');

projects.addEventListener('change', display)


function display(e) {
    if(e.target.value === 'project1')
    document.body.appendChild(project1);
    console.log(e.target.value)
}

// create and display new project as new div
newProject.addEventListener('click', createProjectDiv)

function createProjectDiv() {
    let i = 2;
const newDiv = document.createElement('div');
newDiv.setAttribute('id', `project${i}`);
document.body.removeChild(project1);
document.body.appendChild(newDiv);
}
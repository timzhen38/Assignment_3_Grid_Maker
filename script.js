let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");

// Add a row
function addR() {
    if(numRows===0)
        numCols=0;
   let row = grid.insertRow(numRows);
   let col = row.insertCell(row.length-1);
   col.setAttribute("onclick", "fillC(this)");
   for(let i=0;i<numCols;i++)
   {
     let col = row.insertCell(row.length-1);
     col.setAttribute("onclick", "fillC(this)");
     
   }
   numRows++;
}

// Add a column
function addC() {
    if(numRows===0)
    {
         numCols=0;
         addR();
    }
    else
    {
         let allRows = document.querySelectorAll("tr");
         for(let i=0;i<allRows.length;i++)
         {
             let col = document.createElement("td")
             col.setAttribute("onclick", "fillC(this)");
             allRows[i].appendChild(col);
 
         }
         numCols++;
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Sets global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++)
    {
        if(cells[i].style.backgroundColor == "white")
        {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
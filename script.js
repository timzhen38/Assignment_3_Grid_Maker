let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");
let cells = document.getElementsByTagName("td");

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
    
    let rows = document.getElementsByTagName("tr");
    if(numRows >= 0)
    {
        numRows--;  // subtract one from the row counter if there are still existing columns
    }

    console.log("numRows = " + numRows);
    
    grid.deleteRow(numRows);

    
}

// Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    if(numCols >= 0)
    {
        numCols--;  //subtract one from the column counter if there are still existing columns
    }
    for(let i = rows.length-1; i >= 0; i--)
    {
        if(numCols >= 0)
        {
            let cell = rows[i].deleteCell(-1);  //remove cell in the last position(-1)
        }
        else
        {
            document.getElementById("grid").deleteRow(i);   //delete entire row if there are no rows left
            if(i == 0)
            {
                numRows = 0;
            }
        }
    }
}

// Sets global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    if(colorSelected == "SELECT" || !colorSelected)
    {
        alert("Please select a color");
    }
    else
    {
        for (let i = 0; i < cells.length; i++)
        {
            if(cells[i].style.backgroundColor == "")    //if the cell has no color then we set the color to the color selected
            {
                cells[i].style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    for (let i = 0; i < cells.length; i++)
        cells[i].style.backgroundColor = colorSelected; // fills the cell with the color selected
}

// Clear all cells
function clearAll(){
    for (let i = 0; i < cells.length; i++)
        cells[i].style.backgroundColor = ""; // clears the color from all the cells 
}

// Onclick function for grid
// Fills the cell with color selected
function fillC(cell){
    cell.style.backgroundColor = colorSelected; //fills the cell that was clicked with the color selected
}
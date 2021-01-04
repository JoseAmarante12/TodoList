function Clears()
{
    document.getElementById("input").value = '';
}


let x = 0;

function Adds()
{
     

       if(document.getElementById("input").value == '') 
       {
        alert("Must contain a value");
       }
       else 
       {
       let table = document.getElementById("table");
       
       let row = table.insertRow(-1);
       let cell = row.insertCell(0);
    
       x++;
       cell.innerHTML = "<div class='done' >" + x + ") " +input.value + " "+createButton()+"</div>";
       }
} 
function createButton(){
    let z = document.createElement("button");
    return z.innerHTML ="<input type = 'image' src='trash.png' width='15'height='15' button onclick='completed()' id='done' ></button>";
    
}

function completed(){

    table = document.getElementById("table");
    table.deleteRow(1);
    x--;

}
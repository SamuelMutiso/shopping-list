// DOM ELEMENTS
// EMPTY SHOPPING LIST
// FUNCTIONS TO DISPLAY SHOPPING LIST
// BUTTONS
// SAVE LOCAL STORAGE

//IM NOW SELECTING DOM ELEMENTS
const addBtn = document.getElementById ("addBtn");
const clearbtn = document.getElementById ("clearbtn");
const itemInput = document.getElementById ("itemInput ");
const itemprice = document.getElementById ("itemPrice");
const list = document.getElementById ("shoppingList");
const totaldisplay = document.getElementById ("total");

//shopping list array
// starting with an empty array []
let shoppinglist = JSON.parse(localStorage.getItem("shoppingList")) || [];
// i the -1 i will use it to track when im editing a new item or editing and old item
let editIndex = -1;

//3. The display function
function displayList() {
    listContainer.innerHTML = ""; // CLEARING THE SCREEN BEFORE RE-DRAWING
    shoppinglist.forEach((item, index) => {
        // here im creating the card container
        const box = document.createElement("div");
        box.className = "item-box";

        // im now creating the item name and price text
        const nameDiv = document.createElement("div")
        nameDiv.className = item.purchased ? "item-name purchased" : "item-name";
        nameDiv.textContent = item.name;

        const priceDiv = document.createElement("div");
        priceDiv.textContent = `${item.price}`;

        // now creating the check box
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.purchased;
        checkbox.addEventListener("change", () =>{
            shoppingList[index].purchsed = checkbox.checked;
            updateDATA(); // for saving changes
        })

        //now creating the edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            itemInput.value = item.name; //putting name back in input
            itemprice.value = item.price; //putting priice name back in input
            editIndex = index;            // remember which item ive edited
            addBtn.textContent = "Update Item"; // change button text
        });

        // we now put everything inside the card
        box.appendChild(nameDiv);
        box.appendChild(priceDiv);
        box.appendChild(checkbox);
        box.append(" Got it?");
        box.appendChild(editBtn);

        listContainer.appendChild(box);  // adding card to the screen
    } );
    
    // we now calculating the total cost using reduce()

        
     
    

}
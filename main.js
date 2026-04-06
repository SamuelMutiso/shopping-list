// DOM ELEMENTS
// EMPTY SHOPPING LIST
// FUNCTIONS TO DISPLAY SHOPPING LIST
// BUTTONS
// SAVE LOCAL STORAGE

//IM NOW SELECTING DOM ELEMENTS
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const itemInput = document.getElementById("itemInput");
const itemPrice = document.getElementById("itemPrice");
const  listContainer= document.getElementById("shoppingList");
const totaldisplay = document.getElementById("total");

//shopping list array
// starting with an empty array []
let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
// i the -1 i will use it to track when im editing a new item or editing and old item
let editIndex = -1;

//3. The display function
function displayList() {
    listContainer.innerHTML = ""; // CLEARING THE SCREEN BEFORE RE-DRAWING
    shoppingList.forEach((item, index) => {
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
            shoppingList[index].purchased = checkbox.checked;
            updateData(); // for saving changes
        })

        //now creating the edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            itemInput.value = item.name; //putting name back in input
            itemPrice.value = item.price; //putting priice name back in input
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
    const total = shoppingList.reduce((acc, item)=> acc + item.price, 0);
    totaldisplay. textContent = `KSH ${total}`;
}

// SAVING DATA INPUTTED BY USER
function updateData(){
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    displayList();
}

// THE ADD BUTTON LOGIC
addBtn.addEventListener("click", ()=> {
    const name = itemInput.value.trim();
    const price = parseFloat(itemPrice.value);

    // stopping if the input is empty or price is not a number
    if (name === "" || isNaN(price) || price <= 0)  {
        alert("Enter a valid name and price!");
        return;
    }
    if (editIndex > -1) {
        // if we were editing it should update that specific item
        shoppingList[editIndex] = {name,price,purchased: false};
        editIndex = -1;
        addBtn.textContent = "Add to List";
    } else {
        // if otherwise it adds a new item to the array
        shoppingList.push({name,price,purchased: false})
    }
    
    // clear inputs and refresh screen
    itemInput.value = "";
    itemPrice.value = "";
    updateData();
});

// start the app!
displayList();
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
    listContainer.innerHTML = "";

}
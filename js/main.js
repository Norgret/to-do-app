
/*
 *	Page functionality
 */

function deleteElement(arr, el) {
	for (let i in arr) {
		if (arr[i] === el) {
			arr.splice(i, 1);
			return arr;
		}
	}
}
//
//	variable declarations
//

let listsDisplay = document.getElementById('lists-display');
let listContentsDisplay = document.getElementById('list-items-display');
let lists = [];


//
//	render functions
//

// clear list displays
function clearListItemDisplay() {
	listContentsDisplay.innerHTML = "";
}
function clearListsDisplay() {
	listsDisplay.innerHTML = "";
}

// render list contents
function renderListItem(listItem) {				// appends a ListItem to display
	listContentsDisplay.innerHTML += getListItemHTML(listItem);
}
function renderList(list) {
	listContentsDisplay.innerHTML = "";			// clears listContentsDisplay
	for (let listItem of list.contents) {		// writes contents in display
		renderListItem(listItem);
	}
}

// render list menu
function renderListTitle(list) {
	listsDisplay.innerHTML += getListHTML(list);
}
function renderListsDisplay(listsArray = lists) {	// appends a List to display
	clearListsDisplay();
	for (let list of listsArray) {
		renderListTitle(list);
	}
}

// redraw all lists and active list contents
function render() {
	clearListItemDisplay();
	clearListsDisplay();
	renderList(List.active);
	renderListsDisplay();
}


//
//	misc. list functions
//

function checkList(list) {}
function deleteList(list) {
	if (list.isActive) clearListItemDisplay();	// clear list items display
	deleteElement(lists, list);					// remove selected list from lists array
	renderListsDisplay();
}

function clearChecked() {

}


//
//	test cases
//

lists.push(new List("list1"));
lists.push(new List("list2"));
lists[0].activate();
renderListsDisplay();

List.active.addListItem("text");
List.active.addListItem("text");
List.active.addListItem("text");

setTimeout(() => {deleteList(List.active);}, 1000);



//
// List class definition
//

// Child of List
class ListItem {
	constructor(id, content = "") {
		this.id = id;
		this.content = content;
		this.isChecked = false;
	}

	delete() {

	}
}

// List contains ListItems
class List {
	constructor(name = "New List", id = List.generateID()) {
		this.name = name;			// name is mutable
		this.id = id;				// ID must be unique
		this.contents = [];			// stores ListItems
		this.isActive = false;
		this.currentChildID = 0;
	}
	addListItem(content) {
		let listItem = new ListItem(this.generateChildID(), content);
		this.contents.push(listItem);
		renderListItem(listItem);
	}
	render() {						// Clears list item display and draws contents

	}
	activate() {
		this.isActive = true;
		List.active = this;
	}
	delete() {						// allows List instance to delete itself
		deleteList(this);
	}
	generateChildID() {
		return `${this.id}-${++this.currentChildID}`;
	}

	static currentID = 0;
	static generateID() {
		return `list-${List.currentID++}`;
	}
	static active;					// stores active List

}


//
//	List functionality
//

let listsDisplay = document.getElementById('lists-display');
let listContentsDisplay = document.getElementById('list-items-display');
let lists = [];


function getListItemHTML(listItem) {
	let element = `
		<div class='list-item row-center' id=${listItem.id}>
			<div class='left row-center'>
				<button class='btn checkbox' onclick='checkSelf(${listItem.id});'>
					<i class='fas fa-check'></i>
				</button>
				<div class='text'>${listItem.content}</div>
			</div>
			<div class='right row-center'>
				<div class='tools-container row-center'>
					<button class='btn trash' onclick='deleteSelf(${listItem.id});'>
						<i class='fas fa-times'></i>
					</button>
				</div>
			</div>
		</div>`;
	return element;
}
function renderListItem(listItem) {				// appends a ListItem to display
	listContentsDisplay.innerHTML += getListItemHTML(listItem);
}


function getListHTML(list = null) {

}
function renderListsMenu(listsArray = lists) {	// appends a List to display
	for (let list of lists) {
		console.log(list);
	}
}


function renderList(list) {
	listContentsDisplay.innerHTML = "";			// clears listContentsDisplay
	for (let listItem in list.contents) {		// writes contents in display
		renderListItem(listItem);
	}
}

function deleteList(list) {
	document.getElementById(list.id).style = 'display: none';
	listContentsDisplay.innerHTML = "";
}

function clearChecked(list) {

}

let list1 = new List("list1");
list1.activate();

List.active.addListItem("text");
List.active.addListItem("text");
List.active.addListItem("text");

List.active.render();


/*
 *	List class definition
 */


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
		renderList(this);
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

	static currentID = 0;			// stores ID of next list to generate
	static generateID() {
		return `list-${List.currentID++}`;
	}
	static active;					// stores active List

}



/*
 *	List functionality
 */

function getListById(id) {
	for (let list of lists) {
		if (list.id === id) {
			return list;
		}
	}
	return null;
}

function newList(name = "New List") {
	lists.push(new List(name));

}

//
//	render helper functions
//	get HTML for Lists & ListItems
//

function getListItemHTML(listItem) {
	let element = `
		<div class='list-item row-center ${listItem.id}'>
			<div class='left row-center'>
				<button class='btn checkbox' onclick='checkList(${listItem.id});'>
					<i class='fas fa-check'></i>
				</button>
				<div class='text'>${listItem.content}</div>
			</div>
			<div class='right row-center'>
				<div class='tools-container row-center'>
					<button class='btn edit' onclick='checkList(${listItem.id});'>
						<i class='fas fa-pen icon'></i>
					</button>
					<button class='btn trash' onclick='deleteList(${listItem.id});'>
						<i class='fas fa-times'></i>
					</button>
				</div>
			</div>
		</div>`;
	return element;
}

function getListHTML(list) {
	let element = `
		<div class='list ${list.isActive ? "active" : ""}' id='${list.id}' onclick=''>
			<p class='title text'>${list.name}</p>
			<button class='btn edit' onclick='list.editName();'>
				<i class='fas fa-pen icon'></i>
			</button>
		</div>`;
	return element;
}
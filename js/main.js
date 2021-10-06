let listsDisplay = document.getElementById('lists-display');
let listContentsDisplay = document.getElementById('lists-items-display');


class ListItem {
	constructor(content = "") {
		this.content = content;
		this.isChecked = false;
	}

	delete() {

	}
}


/*
	note: functions that edit DOM should be outside of objects
*/

function renderList() {

}

class List {
	constructor(id, name = "New List") {
		this.name = name;			// name is mutable
		this.id = id;				// ID must be unique
		this.contents = [];			// stores ListItems
		this.isActive = false;
	}
	addListItem(text) {
		this.contents.push(new ListItem(text));
		this.render();
	}
	render() {						// draws all ListItems in listContentsDisplay element
		// for (let listItem of this.contents) {
		// 	console.log(listItem);
		// }
	}
	activate() {
		this.isActive = true;
		List.active = this;
	}
	delete() {						// allows List instance to delete itself

	}


	static renderLists() {			// draws all Lists in listsDisplay element
		// for (let list of List.lists) {
		// 	console.log(list);
		// }
	}

	static currentID = 0;
	static generateID() {
		return `list-${++List.currentID}`;
	}
	static newList() {
		List.lists.push(new List("id"));
	}
	static activate(id) {
		// List.lists
	}
	static active;					// stores active List
	static lists = [];				// stores all List instances

}


let list1 = new List("list-1", "list1");
list1.activate();


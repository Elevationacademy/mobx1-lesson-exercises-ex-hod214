import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = []
    @observable length
    list = [];
    length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        let newItem = new Item(name)
        this.list.push(newItem)
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find(x => x.name === itemName)
        item.location = newLocation
    }

    @action deleteItem = (itemName) => {
        console.log(itemName)
        for (let i = 0; i < this.list.length; i++) {
            console.log(i)
            if (this.list[i].name === itemName) {
               return this.list.splice(i, 1)
            }
        }
    }

}

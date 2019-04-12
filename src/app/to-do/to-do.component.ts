import { Component } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
	selector: 'app-to-do',
  	templateUrl: './to-do.component.html',
  	styleUrls: ['./to-do.component.css'],
})

export class ToDoComponent {
    title = 'example-app';
    saveInLoacalStorageFlag = true;
  	tasksToDoCounter = 0;
	tasksCompleted = 0;
	newTask: string;
  	tasksToDoList: Array<object> = [];
    tasksCompletedList: Array<object> = [];
      
    ngOnInit() {
        if (this.saveInLoacalStorageFlag) {
            if (this.checkDataExistsInLocalstorage) {
                this.initializeDataFromLocalStorage()
            }
        }    
    }

    initializeDataFromLocalStorage() {
        if (localStorage.getItem('tasksToDoList'))
            this.tasksToDoList = JSON.parse(localStorage.getItem('tasksToDoList'))
        
        if (localStorage.getItem('tasksCompletedList'))
            this.tasksCompletedList = JSON.parse(localStorage.getItem('tasksCompletedList'))
    }

    checkDataExistsInLocalstorage() {
        let dataExists = true

        if (localStorage.getItem('tasksToDoList') === null) dataExists = false
        if (localStorage.getItem('taskCompletedList') === null) dataExists = false

        return dataExists
    }
	
	addNewTask() {
        if (this.checkInputIsEmpty(this.newTask)) {
            this.tasksToDoList.push({'description': this.newTask, 'dateTime': this.getCurrentTime()});
            this.newTask = '';
            
            if (this.saveInLoacalStorageFlag) {
                localStorage.setItem('tasksToDoList', JSON.stringify(this.tasksToDoList));
            }
        } else {
            alert('Input is empty');
        }
    }
    
    checkInputIsEmpty(inputText) {
        return inputText && inputText.length > 0 ? true : false;
    }

	addCompleteTask(index) {
		this.tasksCompletedList.push({
			'description': this.tasksToDoList[index]['description'],
			'dateTime': this.tasksToDoList[index]['dateTime']
        });

        this.removeTask(index)
        
        if (this.saveInLoacalStorageFlag) {
            localStorage.setItem('tasksCompletedList', JSON.stringify(this.tasksCompletedList));
            localStorage.setItem('tasksToDoList', JSON.stringify(this.tasksToDoList));
        }
	}

	removeTask(index) {
        this.tasksToDoList.splice(index, 1);

        if (this.saveInLoacalStorageFlag) {
            localStorage.setItem('tasksToDoList', JSON.stringify(this.tasksToDoList));
        }
	}

	getCurrentTime() {
		return formatDate(new Date(), 'HH:mm:ss yyyy/MM/dd', 'en');
    }
}

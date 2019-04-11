import { Component } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
})

export class AppComponent {
	title = 'example-app';
  	tasksToDoCounter = 0;
	tasksCompleted = 0;
	newTask: string;
  	tasksToDoList: Array<object> = [];
  	tasksCompletedList: Array<object> = [];
	
	addNewTask() {
		this.tasksToDoList.push({'description': this.newTask, 'dateTime': this.getCurrentTime()});
		this.newTask = '';
		console.log(this.tasksToDoList)

		localStorage.setItem('dataSource', 'tesxty');

		console.log(localStorage.getItem('dataSource'));
	}

	addCompleteTask(index) {
		this.tasksCompletedList.push({
			'description': this.tasksToDoList[index]['description'],
			'dateTime': this.tasksToDoList[index]['dateTime']
		});

		this.removeTask(index)

		console.log(index)
	}

	removeTask(index) {
		this.tasksToDoList.splice(index, 1);
		console.log(index)
	}

	getCurrentTime() {
		return formatDate(new Date(), 'HH:mm:ss yyyy/MM/dd', 'en');
	}

}

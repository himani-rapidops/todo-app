import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  selectedTodo: Todo;
  todos: Todo[] = [];
  constructor(private todoService: TodoService, private router: Router) {
    this.selectedTodo = this.todos[1];
  }
  goToEditPage(selectedTodo) {
    console.log(selectedTodo);
    this.router.navigate(['./todo-detail/' + selectedTodo.id]);
  }
  deleteTodo(id) {
    this.todoService.deleteTodo(id).subscribe(() => {
      console.log('deleted');
      // this.router.navigate(['todos']);
    });
  }
  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.todos = todos;
      }
        , err => { console.log(err); });
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: Todo = new Todo();

  constructor(private todoService: TodoService, private router: Router) { }
  saveTodo(form) {
    if (form.invalid) {
      alert('form is invalid');
    } else {
      this.todoService.addTodo(this.todo).subscribe(() => {
        this.router.navigate(['todos']);
      });
    }
  }
  ngOnInit() {
  }

}

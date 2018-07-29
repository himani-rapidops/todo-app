import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {   }
  changeTodo(form) {
    if (form.invalid) {
      alert('form is invalid');
    } else {
      this.todoService.updateTodo(this.route.snapshot.params.id, this.todo).subscribe(() => {
        console.log('updated');
        console.log(this.todo);
        this.router.navigate(['todos']);
      });
    }
  }
  ngOnInit() {
    this.todoService.getTodo(this.route.snapshot.params.id).subscribe((data) => {
      this.todo = data;
    });
  }

}

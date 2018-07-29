import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string;

  constructor(private http: HttpClient) {
    this.todosUrl = 'http://localhost:3000/todos';
   }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log(todo);
    return this.http.post<Todo>(this.todosUrl, todo);
  }
  getTodo(id): Observable<Todo> {
    return this.http.get<Todo>(this.todosUrl + '/' + id);
  }
  updateTodo(id, todo: Todo): Observable<Todo> {
    console.log(todo);
    return this.http.put<Todo>(this.todosUrl + '/' + id, todo);
  }
  deleteTodo(id): Observable<Todo> {
    return this.http.delete<Todo>(this.todosUrl + '/' + id);
  }
}

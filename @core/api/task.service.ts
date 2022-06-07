import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ITaskService, TaskModel} from "../model/task.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TaskService extends ITaskService{

  baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {
    super();
  }

  listTask(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${this.baseUrl}/phonebook`);
  }

  createTask(contact: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(`${this.baseUrl}/phonebook`, contact);
  }

  findTask(id: string): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.baseUrl}/phonebook/${id}`);
  }

  updateTask(contact: TaskModel): Observable<TaskModel> {
    return this.http.put<TaskModel>(`${this.baseUrl}/phonebook/${contact.id}`, contact);
  }

  deleteTask(id: string): Observable<TaskModel> {
    return this.http.delete<TaskModel>(`${this.baseUrl}/phonebook/${id}`);
  }

}

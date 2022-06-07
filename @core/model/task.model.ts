import {Observable} from "rxjs";

export class TaskModel {
  id: string;
  title: string;
  description: string;
  endDate: string;
  importanceLevel: string;
}

export abstract class ITaskService {
 abstract listTask(): Observable<TaskModel[]>;
 abstract createContact(contact: TaskModel): Observable<TaskModel>;
 abstract findContact(id: string): Observable<TaskModel>;
 abstract updateContact(contact: TaskModel): Observable<TaskModel>;
 abstract deleteContact(id: string): Observable<TaskModel>;
}

import { Observable } from 'rxjs';
import { DefaultModel } from './default.model';

export class TaskModel extends DefaultModel {
  title: string;
  description: string;
  deadLine: string;
  isFinished: boolean;
  criticality: DefaultCriticality;
}

export class DefaultCriticality {
  id: string;
  criticality: string;
}

export abstract class ITaskService {

  abstract createTask(task: TaskModel): Observable<TaskModel>;

  abstract listTask(): Observable<TaskModel[]>;

  abstract updatedTask(task: TaskModel): Observable<TaskModel>;

  abstract deleteTask(id: string): Observable<TaskModel>;

  abstract findTask(id: string): Observable<TaskModel>;

}

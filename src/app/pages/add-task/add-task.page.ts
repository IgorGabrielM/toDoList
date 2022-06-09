import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../@core/api/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../../@core/model/task.model';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.page.html',
  styleUrls: ['add-task.page.scss'],
  providers: [TaskService, HttpClient],
})
export class AddTaskPage implements OnInit {

  task: TaskModel;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.task = new TaskModel();

    this.activatedRoute.params.subscribe((param) => {
      if (!param.id) {
        return;
      }
      this.loadAllTask();
    });
  }

  loadAllTask(): void {
    this.taskService.listTask().subscribe();
  }

  createTask(): void {
    this.taskService.createTask({ ...this.task, id: uuidv4() })
      .subscribe(() => {
        this.router.navigate(['../']);
      });
  }

  updateTask(): void {
    this.taskService.updatedTask(this.task)
      .subscribe(() => {
        this.router.navigate(['../']);
      });
  }

  onSubmit(): void {
    if (this.task.id) {
      this.updateTask();
    } else {
      this.createTask();
    }
  }
}

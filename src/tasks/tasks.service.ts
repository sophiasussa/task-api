
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  create(createTaskDto: CreateTaskDto): Task {
    const task = new Task(this.nextId++, createTaskDto.title);
    this.tasks.push(task);

    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }
}

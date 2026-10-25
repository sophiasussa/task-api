
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Task {
    return this.tasksService.findOne(id);
  }
}

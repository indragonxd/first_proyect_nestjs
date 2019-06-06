import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task';

@Controller('tasks')
export class TasksController {
    constructor(private taskService : TasksService){}

    @Get()
    getTasks():Promise<Task[]>{
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id : number):Promise<Task>{
        return this.taskService.getTask(id);
    }

    @Post()
    //@Body() decorador que le dice que recogera un json enviado por el cliente
    createTask(@Body() task:CreateTaskDto ):Promise<Task>{
        console.log(task);
        return this.taskService.createTask(task);
    }

    @Put(':id')
    updateTask(@Param('id')id:string , @Body() task:CreateTaskDto):string{
        console.log(id);
        console.log(task);
        return 'actualice tu tasks'
    }

    @Delete(':id')
    //parametro enviado por el cliente ejemplo : local../tasks/1001
    deleteTask(@Param('id') id:string ):string{
        console.log(id);
        return 'elimine un task'
    }
}

import {Request, Response} from 'express';
import Todo from '../model/todoModel';

export const createTodo = async(req: Request, res: Response)=>{
    try{
        const Tasks = await Todo.create(req.body)
        res.status(200).json({
            message: "Tasks created successfully",
            data: {Tasks}
        })
    } catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/create",
          });
    }
}

export const getAllTasks = async(req:Request, res: Response)=>{
    try{
        const Tasks = await Todo.find();
        res.status(200).json({
            message: "Task retrieved",
            data: {Tasks}
        })
    } catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/getAllTasks",
          });
    }
}

export const getSingleTask = async(req:Request, res:Response)=>{
    try{
        const { id: taskID } = req.params
        const Task = await Todo.findOne({_id: taskID})

        if(!Task){
            return res.status(404).json({
                message: `No task with id:${taskID} found`
            })
        }
    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/getSingleTask",
          });
    }

    res.json({id: req.params.id})
}

export const updateTask = async(req:Request, res:Response)=>{
    try{
        const { id: taskID } = req.params;
        const Tasks = await Todo.findOneAndUpdate({_id: taskID}, req.body, {})
    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/updateTask",
          });
    }
}

export const deleteTask = async(req:Request, res:Response)=>{
    try{

    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/deleteTask",
          });
    }
}
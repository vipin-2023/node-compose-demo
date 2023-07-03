import { Request, Response } from 'express';


import TodoModel from '../models/TodoModel';



export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();;
  res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todos' })
  }
  
};

export const createTodo = async (req: Request, res: Response) => {
 try {
  const todo = new TodoModel(req.body);
  await todo.save();
   
  res.status(201).json({ message: 'Todo created successfully' });

 } catch (error) {
  res.status(500).json({error:'Failed to create todos'})
 }

};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await TodoModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {

    res.status(500).json({ error: 'Failed to delete todo' });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await TodoModel.updateOne({ _id: id }, req.body);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json({ message: 'Todo updated successfully' });
  } catch (error) {
    console.error('Error updating todo', error);
    res.status(500).json({ error: 'Failed to update todo' });
  }
 
};

import { RequestHandler } from "express";
import { Todo } from "../model/todo";
oconst TODOS: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: "TOdo created!", createdTodo: newTodo });
};

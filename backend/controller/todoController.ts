import { Request, Response } from "express";
import todoModel from "../model/todoModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { taskName, description } = req.body;

    const create = await todoModel.create({ taskName, description });

    return res.status(201).json({
      message: "todo created successfully",
      data: create,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error creating todo",
    });
  }
};

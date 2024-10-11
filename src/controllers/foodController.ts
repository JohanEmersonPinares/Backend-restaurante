import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addFood = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const imageUrl = req.file?.path;

    const newFood = await prisma.food.create({
      data: {
        name,
        imageUrl: imageUrl || "",
      }
    });

    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar la comida" });
  }
};

export const listFood = async (req: Request, res: Response): Promise<void> => {
  try {
    const foods = await prisma.food.findMany();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: "Error al listar la comida" });
  }
};

export const removeFood = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;

    await prisma.food.delete({
      where: { id },
    });

    res.status(200).json({ message: "Comida eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la comida" });
  }
};

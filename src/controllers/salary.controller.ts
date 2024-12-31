import { Request, Response } from 'express';
import Salary from '../models/salary.model';

// Obtener todos los salarios
export const getSalaries = async (req: Request, res: Response) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener salarios', error });
  }
};

// Obtener un salario por ID
export const getSalaryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const salary = await Salary.findById(id);
    if (!salary) {
      res.status(404).json({ message: 'Salario no encontrado' });
      return
    }
    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el salario', error });
  }
};

// Crear un nuevo salario
export const createSalary = async (req: Request, res: Response) => {
  try {
    const { employeeId, amount, date } = req.body;
    const newSalary = new Salary({ employeeId, amount, date });
    await newSalary.save();
    res.status(201).json(newSalary);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear salario', error });
  }
};

// Actualizar un salario existente
export const updateSalary = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedSalary = await Salary.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSalary) {
     res.status(404).json({ message: 'Salario no encontrado' });
     return;
    }
    res.status(200).json(updatedSalary);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar salario', error });
  }
};

// Eliminar un salario
export const deleteSalary = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedSalary = await Salary.findByIdAndDelete(id);
    if (!deletedSalary) {
    res.status(404).json({ message: 'Salario no encontrado' });
    return;
    }
    res.status(200).json({ message: 'Salario eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar salario', error });
  }
};

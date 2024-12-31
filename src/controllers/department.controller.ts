import { Request, Response } from 'express';
import Department from '../models/department.model';

// Obtener todos los departamentos
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener departamentos', error });
  }
};

// Obtener un departamento por ID
export const getDepartmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    if (!department) {
     res.status(404).json({ message: 'Departamento no encontrado' });
     return;
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el departamento', error });
  }
};

// Crear un nuevo departamento
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newDepartment = new Department({ name, description });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el departamento', error });
  }
};

// Actualizar un departamento existente
export const updateDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDepartment) {
      res.status(404).json({ message: 'Departamento no encontrado' });
      return;
    }
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el departamento', error });
  }
};

// Eliminar un departamento
export const deleteDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedDepartment = await Department.findByIdAndDelete(id);
    if (!deletedDepartment) {
     res.status(404).json({ message: 'Departamento no encontrado' });
     return
    }
    res.status(200).json({ message: 'Departamento eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el departamento', error });
  }
};

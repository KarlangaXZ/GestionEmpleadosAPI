import { Request, Response } from 'express';
import Employee from '../models/employee.model';

// Obtener todos los empleados
export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados', error });
  }
};

// Obtener un empleado por ID
export const getEmployeeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      res.status(404).json({ message: 'Empleado no encontrado' });
      return;
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error });
  }
};

// Crear un nuevo empleado
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, position, department, salary } = req.body;
    const newEmployee = new Employee({ name, position, department, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear empleado', error });
  }
};

// Actualizar un empleado existente
export const updateEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEmployee) {
      res.status(404).json({ message: 'Empleado no encontrado' });
      return;
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar empleado', error });
  }
};

// Eliminar un empleado
export const deleteEmployee = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      res.status(404).json({ message: 'Empleado no encontrado' });
      return;
    }
    res.status(200).json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar empleado', error });
  }
};
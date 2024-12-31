import { Request, Response } from 'express';
import Role from '../models/role.model';

// Obtener todos los roles
export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener roles', error });
  }
};

// Obtener un rol por ID
export const getRoleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);
    if (!role) {
      res.status(404).json({ message: 'Rol no encontrado' });
      return;
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el rol', error });
  }
};

// Crear un nuevo rol
export const createRole = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newRole = new Role({ name, description });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el rol', error });
  }
};

// Actualizar un rol existente
export const updateRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedRole = await Role.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedRole) {
     res.status(404).json({ message: 'Rol no encontrado' });
     return;
    }
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el rol', error });
  }
};

// Eliminar un rol
export const deleteRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedRole = await Role.findByIdAndDelete(id);
    if (!deletedRole) {
       res.status(404).json({ message: 'Rol no encontrado' });
       return;
    }
    res.status(200).json({ message: 'Rol eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el rol', error });
  }
};

import { Router } from 'express';
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employee.controller';

const router = Router();

// Definición de rutas
router.get('/', getEmployees); 
router.get('/:id', getEmployeeById); 
router.post('/', createEmployee);
router.put('/:id', updateEmployee); 
router.delete('/:id', deleteEmployee); 

export default router;

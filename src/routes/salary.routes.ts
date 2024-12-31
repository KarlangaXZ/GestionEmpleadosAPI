import { Router } from 'express';
import {
  getSalaries,
  getSalaryById,
  createSalary,
  updateSalary,
  deleteSalary,
} from '../controllers/salary.controller';

const router = Router();

router.get('/', getSalaries);
router.get('/:id', getSalaryById);
router.post('/', createSalary);
router.put('/:id', updateSalary);
router.delete('/:id', deleteSalary);

export default router;

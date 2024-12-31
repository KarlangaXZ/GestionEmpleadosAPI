"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const router = (0, express_1.Router)();
// Definición de rutas
router.get('/', employee_controller_1.getEmployees);
router.get('/:id', employee_controller_1.getEmployeeById);
router.post('/', employee_controller_1.createEmployee);
router.put('/:id', employee_controller_1.updateEmployee);
router.delete('/:id', employee_controller_1.deleteEmployee);
exports.default = router;

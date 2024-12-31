"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeeById = exports.getEmployees = void 0;
const employee_model_1 = __importDefault(require("../models/employee.model"));
// Obtener todos los empleados
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employee_model_1.default.find();
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener empleados', error });
    }
});
exports.getEmployees = getEmployees;
// Obtener un empleado por ID
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const employee = yield employee_model_1.default.findById(id);
        if (!employee) {
            res.status(404).json({ message: 'Empleado no encontrado' });
            return;
        }
        res.json(employee);
    }
    catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
});
exports.getEmployeeById = getEmployeeById;
// Crear un nuevo empleado
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, position, department, salary } = req.body;
        const newEmployee = new employee_model_1.default({ name, position, department, salary });
        yield newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear empleado', error });
    }
});
exports.createEmployee = createEmployee;
// Actualizar un empleado existente
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedEmployee = yield employee_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedEmployee) {
            res.status(404).json({ message: 'Empleado no encontrado' });
            return;
        }
        res.status(200).json(updatedEmployee);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar empleado', error });
    }
});
exports.updateEmployee = updateEmployee;
// Eliminar un empleado
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedEmployee = yield employee_model_1.default.findByIdAndDelete(id);
        if (!deletedEmployee) {
            res.status(404).json({ message: 'Empleado no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Empleado eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar empleado', error });
    }
});
exports.deleteEmployee = deleteEmployee;

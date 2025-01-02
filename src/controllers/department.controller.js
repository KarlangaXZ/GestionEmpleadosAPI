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
exports.deleteDepartment = exports.updateDepartment = exports.createDepartment = exports.getDepartmentById = exports.getDepartments = void 0;
const department_model_1 = __importDefault(require("../models/department.model"));
// Obtener todos los departamentos
const getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield department_model_1.default.find();
        res.json(departments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener departamentos', error });
    }
});
exports.getDepartments = getDepartments;
// Obtener un departamento por ID
const getDepartmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const department = yield department_model_1.default.findById(id);
        if (!department) {
            res.status(404).json({ message: 'Departamento no encontrado' });
            return;
        }
        res.status(200).json(department);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el departamento', error });
    }
});
exports.getDepartmentById = getDepartmentById;
// Crear un nuevo departamento
const createDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const newDepartment = new department_model_1.default({ name, description });
        yield newDepartment.save();
        res.status(201).json(newDepartment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el departamento', error });
    }
});
exports.createDepartment = createDepartment;
// Actualizar un departamento existente
const updateDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedDepartment = yield department_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedDepartment) {
            res.status(404).json({ message: 'Departamento no encontrado' });
            return;
        }
        res.status(200).json(updatedDepartment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el departamento', error });
    }
});
exports.updateDepartment = updateDepartment;
// Eliminar un departamento
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedDepartment = yield department_model_1.default.findByIdAndDelete(id);
        if (!deletedDepartment) {
            res.status(404).json({ message: 'Departamento no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Departamento eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el departamento', error });
    }
});
exports.deleteDepartment = deleteDepartment;

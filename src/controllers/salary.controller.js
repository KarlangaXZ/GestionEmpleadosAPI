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
exports.deleteSalary = exports.updateSalary = exports.createSalary = exports.getSalaryById = exports.getSalaries = void 0;
const salary_model_1 = __importDefault(require("../models/salary.model"));
// Obtener todos los salarios
const getSalaries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salaries = yield salary_model_1.default.find();
        res.status(200).json(salaries);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener salarios', error });
    }
});
exports.getSalaries = getSalaries;
// Obtener un salario por ID
const getSalaryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const salary = yield salary_model_1.default.findById(id);
        if (!salary) {
            res.status(404).json({ message: 'Salario no encontrado' });
            return;
        }
        res.status(200).json(salary);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el salario', error });
    }
});
exports.getSalaryById = getSalaryById;
// Crear un nuevo salario
const createSalary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { employeeId, amount, date } = req.body;
        const newSalary = new salary_model_1.default({ employeeId, amount, date });
        yield newSalary.save();
        res.status(201).json(newSalary);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear salario', error });
    }
});
exports.createSalary = createSalary;
// Actualizar un salario existente
const updateSalary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedSalary = yield salary_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedSalary) {
            res.status(404).json({ message: 'Salario no encontrado' });
            return;
        }
        res.status(200).json(updatedSalary);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar salario', error });
    }
});
exports.updateSalary = updateSalary;
// Eliminar un salario
const deleteSalary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedSalary = yield salary_model_1.default.findByIdAndDelete(id);
        if (!deletedSalary) {
            res.status(404).json({ message: 'Salario no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Salario eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar salario', error });
    }
});
exports.deleteSalary = deleteSalary;

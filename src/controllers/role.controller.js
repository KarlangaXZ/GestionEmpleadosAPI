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
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRoleById = exports.getRoles = void 0;
const role_model_1 = __importDefault(require("../models/role.model"));
// Obtener todos los roles
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield role_model_1.default.find();
        res.json(roles);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener roles', error });
    }
});
exports.getRoles = getRoles;
// Obtener un rol por ID
const getRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield role_model_1.default.findById(id);
        if (!role) {
            res.status(404).json({ message: 'Rol no encontrado' });
            return;
        }
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el rol', error });
    }
});
exports.getRoleById = getRoleById;
// Crear un nuevo rol
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const newRole = new role_model_1.default({ name, description });
        yield newRole.save();
        res.status(201).json(newRole);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el rol', error });
    }
});
exports.createRole = createRole;
// Actualizar un rol existente
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedRole = yield role_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedRole) {
            res.status(404).json({ message: 'Rol no encontrado' });
            return;
        }
        res.status(200).json(updatedRole);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el rol', error });
    }
});
exports.updateRole = updateRole;
// Eliminar un rol
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedRole = yield role_model_1.default.findByIdAndDelete(id);
        if (!deletedRole) {
            res.status(404).json({ message: 'Rol no encontrado' });
            return;
        }
        res.status(200).json({ message: 'Rol eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el rol', error });
    }
});
exports.deleteRole = deleteRole;

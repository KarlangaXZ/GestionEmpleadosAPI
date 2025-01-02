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
document.addEventListener('DOMContentLoaded', () => {
    const departmentSelect = document.getElementById('department');
    const roleSelect = document.getElementById('role');
    // Función para cargar departamentos
    function loadDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:3000/api/departments');
                const departments = yield response.json();
                departments.forEach((department) => {
                    const option = document.createElement('option');
                    option.value = department._id;
                    option.textContent = department.name;
                    departmentSelect.appendChild(option);
                });
            }
            catch (error) {
                console.error('Error al cargar departamentos:', error);
            }
        });
    }
    // Función para cargar roles
    function loadRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:3000/api/roles');
                const roles = yield response.json();
                roles.forEach((role) => {
                    const option = document.createElement('option');
                    option.value = role._id;
                    option.textContent = role.name;
                    roleSelect.appendChild(option);
                });
            }
            catch (error) {
                console.error('Error al cargar roles:', error);
            }
        });
    }
    // Llamar a las funciones para cargar datos
    loadDepartments();
    loadRoles();
});

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
const mongoose_1 = __importDefault(require("mongoose"));
const department_model_1 = __importDefault(require("./src/models/department.model"));
const role_model_1 = __importDefault(require("./src/models/role.model"));
function initializeData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://localhost:27017/gestion_empleados');
        // Datos iniciales
        const departments = [
            { name: 'Recursos Humanos' },
            { name: 'IT' },
            { name: 'Contabilidad' },
            { name: 'Marketing' },
            { name: 'Ventas' },
            { name: 'Operaciones' },
            { name: 'Producción' },
            { name: 'Compras' },
            { name: 'Logística' },
            { name: 'Legal' },
        ];
        const roles = [
            { name: 'Gerente' },
            { name: 'Supervisor' },
            { name: 'Analista' },
            { name: 'Técnico' },
            { name: 'Asistente' },
        ];
        try {
            // Insertar datos si no existen
            yield department_model_1.default.insertMany(departments);
            yield role_model_1.default.insertMany(roles);
            console.log('Datos iniciales insertados con éxito');
        }
        catch (error) {
            console.error('Error al insertar datos:', error);
        }
        finally {
            mongoose_1.default.connection.close();
        }
    });
}
initializeData();

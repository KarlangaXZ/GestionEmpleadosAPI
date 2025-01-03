"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const department_routes_1 = __importDefault(require("./routes/department.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes")); // Asegúrate de importar las rutas de roles
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Habilitar CORS
app.use((0, cors_1.default)());
// Middlewares
app.use(express_1.default.json());
// Conexión a la base de datos
mongoose_1.default
    .connect('mongodb://localhost:27017/gestion_empleados')
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch((error) => console.error('Error al conectar a la base de datos', error));
// Rutas
app.use('/api/employees', employee_routes_1.default);
app.use('/api/departments', department_routes_1.default);
app.use('/api/roles', role_routes_1.default); // Asegúrate de usar las rutas de roles
// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

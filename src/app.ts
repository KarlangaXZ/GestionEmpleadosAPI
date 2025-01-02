import express from 'express';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employee.routes';
import departmentRoutes from './routes/department.routes';
import roleRoutes from './routes/role.routes'; // Asegúrate de importar las rutas de roles
import cors from 'cors';

const app = express();

// Habilitar CORS
app.use(cors());

// Middlewares
app.use(express.json());

// Conexión a la base de datos
mongoose
  .connect('mongodb://localhost:27017/gestion_empleados')
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch((error) => console.error('Error al conectar a la base de datos', error));

// Rutas
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/roles', roleRoutes); // Asegúrate de usar las rutas de roles

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
import mongoose from 'mongoose';
import Department from './src/models/department.model'; 
import Role from './src/models/role.model';

async function initializeData() {
  await mongoose.connect('mongodb://localhost:27017/gestion_empleados');

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
    await Department.insertMany(departments);
    await Role.insertMany(roles);
    console.log('Datos iniciales insertados con éxito');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    mongoose.connection.close();
  }
}

initializeData();

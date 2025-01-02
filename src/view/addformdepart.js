
const API_URL = 'http://localhost:3000/api/departments'; // Ajusta según tu configuración

document.getElementById('add-department-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const departmentName = document.getElementById('department-name').value;

  if (!departmentName.trim()) {
    alert('El nombre del departamento es obligatorio');
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: departmentName }),
    });

    if (response.ok) {
      alert('Departamento agregado con éxito');
      document.getElementById('department-name').value = '';
      fetchDepartments();
    } else {
      console.error('Error al agregar el departamento');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

async function fetchDepartments() {
  try {
    const response = await fetch(API_URL);
    const departments = await response.json();

    const departmentsList = document.getElementById('departments-list');
    departmentsList.innerHTML = '';
    departments.forEach((dept) => {
      const row = `
        <tr>
          <td class="border px-4 py-2">${dept.id}</td>
          <td class="border px-4 py-2">${dept.name}</td>
        </tr>`;
      departmentsList.innerHTML += row;
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Cargar departamentos al iniciar
fetchDepartments();

document.addEventListener('DOMContentLoaded', () => {
    const departmentSelect = document.getElementById('department') as HTMLSelectElement;
    const roleSelect = document.getElementById('role') as HTMLSelectElement;

    // Función para cargar departamentos
    async function loadDepartments(): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/api/departments');
            const departments = await response.json();
            departments.forEach((department: { _id: string, name: string }) => {
                const option = document.createElement('option');
                option.value = department._id;
                option.textContent = department.name;
                departmentSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar departamentos:', error);
        }
    }

    // Función para cargar roles
    async function loadRoles(): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/api/roles');
            const roles = await response.json();
            roles.forEach((role: { _id: string, name: string }) => {
                const option = document.createElement('option');
                option.value = role._id;
                option.textContent = role.name;
                roleSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar roles:', error);
        }
    }

    // Llamar a las funciones para cargar datos
    loadDepartments();
    loadRoles();
});
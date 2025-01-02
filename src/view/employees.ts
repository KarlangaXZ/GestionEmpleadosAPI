document.addEventListener('DOMContentLoaded', () => {
    const addEmployeeForm = document.getElementById('add-employee-form') as HTMLFormElement | null;
    const employeeList = document.querySelector('#employees tbody') as HTMLTableSectionElement | null;

    // Handle form submission
    addEmployeeForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement)?.value;
        const department = (document.getElementById('department') as HTMLInputElement)?.value;
        const role = (document.getElementById('role') as HTMLInputElement)?.value;
        const salary = (document.getElementById('salary') as HTMLInputElement)?.value;

        // Validate input
        if (!name || !department || !role || !salary) {
            alert('Please fill in all fields');
            return;
        }

        // Create employee object
        const newEmployee = { name, department, role, salary };

        try {
            // Send data to the backend
            const response = await fetch('http://localhost:3000/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEmployee),
            });

            if (response.ok) {
                const savedEmployee = await response.json();
                // Add the new employee to the table
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border border-gray-300 px-4 py-2">${savedEmployee.id}</td>
                    <td class="border border-gray-300 px-4 py-2">${savedEmployee.name}</td>
                    <td class="border border-gray-300 px-4 py-2">${savedEmployee.department}</td>
                    <td class="border border-gray-300 px-4 py-2">${savedEmployee.role}</td>
                    <td class="border border-gray-300 px-4 py-2">${savedEmployee.salary}</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <button class="text-blue-600 hover:underline">Edit</button>
                        <button class="text-red-600 hover:underline ml-2">Delete</button>
                    </td>
                `;
                employeeList?.appendChild(row);

                // Reset the form
                addEmployeeForm?.reset();
            } else {
                alert('Failed to save employee. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving the employee.');
        }
    });
});

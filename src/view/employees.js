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
    const addEmployeeForm = document.getElementById('add-employee-form');
    const employeeList = document.querySelector('#employees tbody');
    // Handle form submission
    addEmployeeForm === null || addEmployeeForm === void 0 ? void 0 : addEmployeeForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        e.preventDefault();
        // Get form data
        const name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
        const department = (_b = document.getElementById('department')) === null || _b === void 0 ? void 0 : _b.value;
        const role = (_c = document.getElementById('role')) === null || _c === void 0 ? void 0 : _c.value;
        const salary = (_d = document.getElementById('salary')) === null || _d === void 0 ? void 0 : _d.value;
        // Validate input
        if (!name || !department || !role || !salary) {
            alert('Please fill in all fields');
            return;
        }
        // Create employee object
        const newEmployee = { name, department, role, salary };
        try {
            // Send data to the backend
            const response = yield fetch('http://localhost:3000/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEmployee),
            });
            if (response.ok) {
                const savedEmployee = yield response.json();
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
                employeeList === null || employeeList === void 0 ? void 0 : employeeList.appendChild(row);
                // Reset the form
                addEmployeeForm === null || addEmployeeForm === void 0 ? void 0 : addEmployeeForm.reset();
            }
            else {
                alert('Failed to save employee. Please try again.');
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving the employee.');
        }
    }));
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const router = (0, express_1.Router)();
router.get('/', role_controller_1.getRoles);
router.get('/:id', role_controller_1.getRoleById);
router.post('/', role_controller_1.createRole);
router.put('/:id', role_controller_1.updateRole);
router.delete('/:id', role_controller_1.deleteRole);
exports.default = router;

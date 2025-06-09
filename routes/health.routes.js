import express from "express";

import healthController from "../controllers/health.controller.js";

const router = express.Router();

router.get("/", healthController.getHealthStatus);

export default router;

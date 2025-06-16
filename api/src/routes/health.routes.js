import express from "express";
import rateLimiters from "../middleware/rate-limit.middleware.js";

import healthController from "../controllers/health.controller.js";

const router = express.Router();

router.get("/", rateLimiters.default, healthController.getHealthStatus);

export default router;

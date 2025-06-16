import express from "express";

import healthRoutes from "./health.routes.js";
import swaggerRoutes from "./swagger.routes.js";

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/swagger", swaggerRoutes);

export default router;

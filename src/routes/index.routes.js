import express from "express";
import swaggerRoutes from "./swagger.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    result: {
      message: "Welcome to the API!",
    },
  });
});

router.use("/swagger", swaggerRoutes);

export default router;

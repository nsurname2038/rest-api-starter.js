import healthService from "../services/health.service.js";

/**
 * HealthController class.
 * @ignore
 */
class HealthController {
  /**
   * Handles the request for the health route.
   */
  async getHealthStatus(req, res) {
    try {
      const result = await healthService.getHealthStatus();

      res.json({
        result: result,
      });
    } catch (error) {
      res.status(500).json("An error occurred while fetching the health check response.");
    }
  }
}

export default new HealthController();

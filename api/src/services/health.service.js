/**
 * HealthService class.
 */
class HealthService {
  /**
   * Returns a health check response.
   * @async
   * @returns {Promise<Object>} A promise that resolves to an object containing health check details.
   * @throws {Error} If an error occurs while fetching the health check response.
   */
  async getHealthStatus() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      pid: process.pid,
      version: process.version,
      platform: process.platform,
      memoryUsage: process.memoryUsage().rss,
    };
  }
}

export default new HealthService();

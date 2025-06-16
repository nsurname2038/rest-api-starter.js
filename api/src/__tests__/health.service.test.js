import { describe, it, expect } from "@jest/globals";
import healthService from "../services/health.service.js";

describe("Health Service", () => {
  it("should return health status", async () => {
    const status = await healthService.getHealthStatus();

    expect(status).toHaveProperty("status");
    expect(status.status).toBe("ok");
    expect(status).toHaveProperty("timestamp");
    expect(status).toHaveProperty("uptime");
    expect(status).toHaveProperty("pid");
  });
});

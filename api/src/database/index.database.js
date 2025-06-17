import { PrismaClient } from "@prisma/client";

import logger from "../helpers/logger.helper.js";

/**
 * Datasbase class.
 * @ignore
 */
class Database {
  /**
   * Creates an instance of Database.
   */
  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Connects to the database.
   */
  async connect() {
    try {
      await this.prisma.$connect();
      logger.info("Database connection successful.");
    } catch (err) {
      logger.error("Database connection error:", err);
      throw new Error("Could not connect to the database.");
    }
  }

  /**
   * Disconnects from the database.
   */
  async disconnect() {
    try {
      await this.prisma.$disconnect();
      logger.info("Database disconnection successful.");
    } catch (err) {
      logger.error("Database disconnection error:", err);
      throw new Error("Could not disconnect from the database.");
    }
  }
}

export default new Database();

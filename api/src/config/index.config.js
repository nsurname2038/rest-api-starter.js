import envSchema from "env-schema";

const env = envSchema({
  dotenv: true,
  schema: {
    type: "object",
    required: ["HOST", "PORT", "ORIGIN", "NODE_ENV", "REDIS_HOST", "REDIS_PORT"],
    properties: {
      HOST: {
        type: "string",
        default: "localhost",
      },
      PORT: {
        type: "number",
      },
      ORIGIN: {
        type: "string",
      },
      NODE_ENV: {
        type: "string",
      },
      REDIS_HOST: {
        type: "string",
      },
      REDIS_PORT: {
        type: "number",
      },
    },
  },
});

/**
 * @global
 * @typedef {Object} Config
 *
 * @property {Object} server - Server configuration settings.
 * @property {string} server.host - The hostname for the server.
 * @property {number|string} server.port - The port number for the server to listen on.
 * @property {string} server.origin - The origin URL of the server.
 * @property {string} server.node_env - The environment the server is running in (e.g., development, production).
 *
 * @property {Object} cache - Cache configuration settings.
 * @property {Object} cache.redis - Redis configuration settings.
 * @property {string} cache.redis.host - The host address of the Redis server.
 * @property {number|string} cache.redis.port - The port number of the Redis server.
 *
 * @property {Object} logger - Logger configuration settings.
 * @property {Object} logger.file - File logging configuration settings.
 * @property {string} logger.file.level - Logging level for file logs (e.g., error, debug).
 * @property {string} logger.file.filename - File path for storing logs.
 * @property {Object} logger.console - Console logging configuration settings.
 * @property {string} logger.console.level - Logging level for console logs (e.g., warn, debug).
 */
const config = {
  server: {
    host: env.HOST,
    port: env.PORT,
    origin: env.ORIGIN,
    node_env: env.NODE_ENV,
  },
  cache: {
    redis: {
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
    },
  },
  logger: {
    file: {
      level: env.NODE_ENV === "production" ? "error" : "debug",
      filename: "./logs/logs.log",
    },
    console: {
      level: env.NODE_ENV === "production" ? "warn" : "debug",
    },
  },
};

export default config;

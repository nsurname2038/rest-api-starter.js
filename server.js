import app from "./app.js";

import config from "./config/index.config.js";
import logger from "./helpers/logger.helper.js";

import postgres from "./database/postgres.database.js";
import redis from "./cache/redis.cache.js";

async function start() {
  try {
    const host = config.server.host;
    const port = config.server.port;

    await redis.connect();
    await postgres.connect();

    app.listen(port, () => {
      logger.info(`Server is running at http://${host}:${port}.`);
    });
  } catch (err) {
    logger.error(err);
  }
}

start();

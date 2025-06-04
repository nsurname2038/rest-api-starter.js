import app from "./app.js";

import config from "./config/index.config.js";
import logger from "./helpers/logger.helper.js";

async function start() {
  try {
    const port = config.server.port;

    app.listen(port, () => {
      logger.info(`Server is running at ${port}.`);
    });
  } catch (err) {
    logger.error(err);
  }
}

start();

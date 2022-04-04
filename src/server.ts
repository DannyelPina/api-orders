import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerUifile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerUifile));

app.use(router);

app.listen(3030, () => console.log("Server started on port 3030"));

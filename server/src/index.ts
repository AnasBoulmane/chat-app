import express from "express";
import api from "routes/App";

const app = express();

const hostname = "127.0.0.1";
const port = process.env.NODE_ENV === "test" ? 5000 : 8000;

// Routing
app.use("/api/v1/", api);
app.use(express.static("public"));

export const server = app.listen(port, () => {
  console.log(`server listening at http://${hostname}:${port}`);
});

export default app;

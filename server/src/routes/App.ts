import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello World");
});

export default router;

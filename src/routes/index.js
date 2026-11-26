import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "messaging-app under development" });
});

export default router;

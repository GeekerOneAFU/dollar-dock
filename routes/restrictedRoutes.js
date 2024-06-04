import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory path of the current module file
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const router = express.Router();

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/uploads", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/downloads", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/routes", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/config", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/controllers", (req, res) => {
  res.sendFile(path.join(__dirname, "../static", "unauthorized.html"));
});

router.get("/models", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "unauthorized.html"));
});

export default router;

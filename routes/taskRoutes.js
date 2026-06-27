const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTasksByProject,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");

router.post("/create", createTask);

router.get("/", getTasks);

router.get("/project/:projectId", getTasksByProject);

router.put("/:id", updateTaskStatus);

router.delete("/:id", deleteTask);

module.exports = router;
import { Router } from "express";
import { NewsController } from "../controllers/news.controller";
import { body, param, validationResult } from "express-validator";

const router = Router();
const controller = new NewsController();

router.get("/", controller.getAll.bind(controller));

router.get("/:id", param("id").isInt(), controller.getOne.bind(controller));

router.post("/", controller.create.bind(controller));

router.patch("/:id", param("id").isInt(), controller.update.bind(controller));

router.delete("/:id", param("id").isInt(), controller.delete.bind(controller));

export default router;

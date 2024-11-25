import Router from "express";
import FilmeController from "../Controllers/FilmeController.js";

const router = Router();

router.get("/filme/:id", FilmeController.findById);
router.post("/filme", FilmeController.salvarFilme);
router.delete("/filme/:id", FilmeController.deletarFilme);
router.patch("/filme/:id", FilmeController.editFilme);
router.get("/filme", FilmeController.getAll);

export default router;
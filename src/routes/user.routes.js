import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/user.controller";
import { verifyToken } from '../middlewares';

router.get("/me", verifyToken, authCtrl.detailUser);
router.patch("/me", verifyToken, authCtrl.editUser);
router.delete("/me", verifyToken, authCtrl.deleteUser);

export default router;
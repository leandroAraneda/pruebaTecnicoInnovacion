import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { validateDuplicateUserByEmail } from '../middlewares';

router.post("/login", authCtrl.signIn);
router.post("/new", validateDuplicateUserByEmail, authCtrl.signUp);

export default router;
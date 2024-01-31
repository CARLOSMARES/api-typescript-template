import Express from "express";
import controller from '../controllers/test.controller';

const router = Express.Router();

router.get("/testRoute", controller.testFunction);

export default router;
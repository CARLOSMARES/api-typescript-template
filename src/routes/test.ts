import Express from "express";
import testFunction from '../controllers/test.controller';

const router = Express.Router();

router.get("/testRoute", testFunction);

export default router;
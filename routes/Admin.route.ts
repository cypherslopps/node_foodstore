import express, { Request, Response, NextFunction } from "express";
import { CreateVendor } from "../controllers/Admin.controller";

const router = express.Router();


router.post("/vendor", CreateVendor);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(req, res);
    res.json({
        message: "Welcome to admin route"
    })
});

export { router as AdminRoute };
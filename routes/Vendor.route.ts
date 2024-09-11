import express, { Request, Response, NextFunction } from "express";

const router = express.Router();


router.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(req, res);
    res.json({
        message: "Welcome to vendor route"
    });
});

export { router as VendorRoute };
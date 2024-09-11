import { Request, Response, NextFunction } from "express";

const CreateVendor = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: "Successfully created a new vendor"
    });
}

export {
    CreateVendor
};
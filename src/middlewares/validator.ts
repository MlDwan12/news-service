import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";
import { Request, Response, NextFunction } from "express";

const validationsMap: {
  [key: string]: ValidationChain[];
} = {
  "POST /news": [
    body("title").isString().notEmpty(),
    body("content").isString().notEmpty(),
    body("author").isString().notEmpty(),
    body("isPublished").optional().isBoolean(),
  ],
  "PATCH /news/:id": [
    param("id").isInt(),
    body("title").optional().isString().notEmpty(),
    body("content").optional().isString().notEmpty(),
    body("author").optional().isString().notEmpty(),
    body("isPublished").optional().isBoolean(),
  ],
  "GET /news/:id": [param("id").isInt()],
  "DELETE /news/:id": [param("id").isInt()],
};

export async function globalValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const method = req.method.toUpperCase();
  let path = req.route?.path || req.path;

  path = path.split("?")[0];

  const key = `${method} ${path}`;

  const validations = validationsMap[key];

  if (!validations) {
    return next();
  }

  for (const validation of validations) {
    await validation.run(req);
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

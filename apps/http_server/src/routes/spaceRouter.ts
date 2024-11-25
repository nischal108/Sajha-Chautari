import express from "express";
import {
  createSpaceRouter,
  deleteSpace,
  getAllMaps,
  getPublicSpaces,
  getUserSpaces,
  joinSpaceController,
  getAllELements
} from "../controllers/space.controller";
import authmiddleware from "../middlewares/authmiddleware";

const spaceRouter = express.Router();

spaceRouter.use(authmiddleware());

spaceRouter.post("/", createSpaceRouter);
spaceRouter.delete("/", deleteSpace);
spaceRouter.get('/elements',getAllELements);
spaceRouter.get("/", getUserSpaces);
spaceRouter.post("/join-space", joinSpaceController);
spaceRouter.get('/maps',getAllMaps);

spaceRouter.get("/public",getPublicSpaces);

export default spaceRouter;

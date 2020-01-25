const constructionService = require("../services/construction.service");
const express = require("express");
const constructionRouter = express.Router();

constructionRouter.get("/construction", constructionService.findAllConstructions);

constructionRouter.get("/construction/:id",  constructionService.findConstructionById);

constructionRouter.post("/construction",  constructionService.createConstruction);

constructionRouter.put("/construction/:id",  constructionService.updateConstruction);

constructionRouter.delete("/construction/:id",  constructionService.deleteConstruction);

module.exports = constructionRouter;

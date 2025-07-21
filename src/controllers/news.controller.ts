import { Request, Response } from "express";
import { NewsService } from "../services/news.service";

const newsService = new NewsService();

export class NewsController {
  async getAll(req: Request, res: Response) {
    const news = await newsService.findAll();
    res.json(news);
  }

  async getOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const news = await newsService.findOne(id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  }

  async create(req: Request, res: Response) {
    const news = await newsService.create(req.body);
    res.status(201).json(news);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updatedNews = await newsService.update(id, req.body);
    if (!updatedNews)
      return res.status(404).json({ message: "News not found" });
    res.json(updatedNews);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = await newsService.delete(id);
    if (!deleted) return res.status(404).json({ message: "News not found" });
    res.status(204).send();
  }
}

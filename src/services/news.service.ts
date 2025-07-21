import { AppDataSource } from "../config/database.config";
import { News } from "../models/news.model";

export class NewsService {
  private newsRepository = AppDataSource.getRepository(News);

  async findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async findOne(id: number): Promise<News | null> {
    return this.newsRepository.findOneBy({ id });
  }

  async create(newsData: Partial<News>): Promise<News> {
    const news = this.newsRepository.create(newsData);
    return this.newsRepository.save(news);
  }

  async update(id: number, newsData: Partial<News>): Promise<News | null> {
    const news = await this.findOne(id);
    if (!news) {
      return null;
    }
    Object.assign(news, newsData);
    return this.newsRepository.save(news);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.newsRepository.delete(id);
    return result.affected !== 0;
  }
}

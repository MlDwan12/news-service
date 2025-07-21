import "reflect-metadata";
import { DataSource } from "typeorm";
import { News } from "../models/news.model";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "news-db",
  synchronize: true,
  logging: false,
  entities: [News],
});

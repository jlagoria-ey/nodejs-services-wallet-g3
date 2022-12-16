import express  from 'express';
import cors from 'cors';
import { Database } from '../../db/database';

export class Server {
  private readonly app;
  private readonly port;
  private readonly userNameDb;
  private readonly passwordDb;
  private readonly nameDb;
  private readonly configDb;

  constructor() {
    this.app = express();

    this.port = process.env.PORT ?? 3001;

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.userNameDb = process.env.USERNAME_DB!;
    this.passwordDb = process.env.PASSWORD_DB!;
    this.nameDb = process.env.NAME_DB!;

    this.configDb = {
      host: process.env.DB_HOSTNAME!,
      dialect: process.env.DIALECT!
    };
  }

  async execute(): Promise<void> {
    this.listen();
    this.connectDatabase();
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`running in the port ${this.port}`);
    });
  }

  private async connectDatabase(): Promise<void> {
    const sequelize = Database.create({
      nameDb: this.nameDb,
      userNameDb: this.userNameDb,
      passwordDb: this.passwordDb,
      configDb: this.configDb
    });

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

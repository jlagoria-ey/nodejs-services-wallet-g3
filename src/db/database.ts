import { Sequelize } from 'Sequelize';

interface IProps {
  nameDb: string;
  userNameDb: string;
  passwordDb: string;
  configDb: Record<string, string>;
}

class Database {
  static create({ nameDb, userNameDb, passwordDb, configDb }: IProps): Sequelize {
    const instance = new Sequelize(nameDb, userNameDb, passwordDb, configDb);
    return instance;
  }
}

export { Database };

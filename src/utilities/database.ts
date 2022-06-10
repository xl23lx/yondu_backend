import {
    DataSource
} from 'typeorm';
import "reflect-metadata";
import {User} from '../entity/User'
import config from '../config'

export const AppDataSource=new DataSource({
    type: 'mysql',
    host: config.DB_HOST,
    database: config.DB_NAME,
    username: config.DB_USER_NAME,
    password: config.DB_PASS,
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
    extra: {
        socketPath: config.DB_SOCKET
    },
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
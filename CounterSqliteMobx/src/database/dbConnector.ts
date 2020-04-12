import * as FileSystem from "expo-file-system";
import {Asset} from "expo-asset";
import {ConnectionOptions} from "typeorm";
import {Counter} from "./entity/counter";

export const downloadDatabase = async () => {
    const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;
    const {exists, isDirectory} = await FileSystem.getInfoAsync(sqliteDirectory);
    if (!exists) {
        await FileSystem.makeDirectoryAsync(sqliteDirectory);
    } else if (!isDirectory) {
        throw new Error('SQLite dir is not a directory');
    }
    const pathToDownloadTo = `${sqliteDirectory}/database.db`;
    const fileInfo = await FileSystem.getInfoAsync(pathToDownloadTo);
    if (!fileInfo.exists) {
        const uriToDownload = Asset.fromModule(require('../../assets/db/database.db')).uri;
        await FileSystem.downloadAsync(uriToDownload, pathToDownloadTo);
    }
};

export const connectionOptions: ConnectionOptions = {
    driver: require('expo-sqlite'),
    type: 'expo',
    database: 'database.db',
    synchronize: true,
    logging: true,
    name: 'default',
    entities: [
        Counter
    ]
};
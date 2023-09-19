import { envs } from "./config/env.plugins";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => { main() })(); //self-invoked anonymous function

async function main() {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });
    Server.start();
}


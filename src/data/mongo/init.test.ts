import mongoose from "mongoose";
import { MongoDatabase } from "./init"

describe('Mongo database', () => {

    afterAll(() => {
        mongoose.connection.close();
    });

    test('should conect to mongoDB', async () => {

        const conected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        });

        expect(conected).toBe(true);

    });

    test('should throw an error', async () => {

        try {

            await MongoDatabase.connect({
                dbName: process.env.MONGO_DB_NAME!,
                mongoUrl: 'mongodb://test:123456@test:27017',
            });

            expect(true).toBe(false);

        } catch (error) { }

    });

});
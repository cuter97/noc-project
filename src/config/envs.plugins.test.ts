import { envs } from "./env.plugins"

describe('envs.plugins.ts', () => {

    test('should return env options', () => {

        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'ragnar001agus@gmail.com',
            MAILER_SECRET_KEY: 'jmuollwbboltkeei',
            PROD: false,
            MONGO_URL: 'mongodb://test:123456789@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'test',
            MONGO_PASS: '123456789',
            POSTGRES_URL: 'postgresql://postgres:123456789@localhost:5432/NOC',
            POSTGRES_USER: 'postgres',
            POSTGRES_DB: 'NOC-TEST',
            POSTGRES_PASSWORD: '123456789'
        });

    });

    test('should return error if not found env', async () => {

        jest.resetModules();
        process.env.PORT = 'ABC';

        try {
            await import('./env.plugins');
            expect(true).toBe(false);
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }

    });

});
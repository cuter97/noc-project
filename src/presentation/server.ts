import { CheckService } from "../domain/use-cases/checks/check-service";
// import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
// import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
    // new FileSystemDatasource()
    new MongoLogDatasource()
);

// const emailService = new EmailService();

export class Server {

    public static start() {

        console.log('Server started...');

        CronService.createJob(
            '*/10 * * * * *',
            () => {
                const url = 'https://google.com';

                new CheckService(
                    logRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error),
                ).execute(url);

            }
        );

        // new SendEmailLogs(emailService, logRepository).execute(['aguscastets@gmail.com'])
        // const emailService = new EmailService(logRepository);
        // emailService.sendEmailWithFileSystemLogs(['aguscastets@gmail.com']);

    }
}
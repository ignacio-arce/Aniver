import { AppRepository } from './app.repository';
import { MessageDto } from './dto/message.dto';
import * as mailgun from 'mailgun-js';
export declare class AppService {
    private appRepository;
    constructor(appRepository: AppRepository);
    isDataToSend(body: MessageDto | mailgun.messages.SendData): body is mailgun.messages.SendData;
    sendMail(body: mailgun.messages.SendData): Promise<mailgun.messages.SendResponse>;
}

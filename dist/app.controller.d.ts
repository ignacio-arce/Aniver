import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';
import * as mailgun from 'mailgun-js';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendMail(body: MessageDto): Promise<mailgun.messages.SendResponse>;
}

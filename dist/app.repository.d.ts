import * as mailgun from 'mailgun-js';
export declare class AppRepository {
    sendMail(body: mailgun.messages.SendData): Promise<mailgun.messages.SendResponse>;
}

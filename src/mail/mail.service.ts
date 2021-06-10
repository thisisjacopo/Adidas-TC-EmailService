import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(user: User, token: string) {
    const url = `exampleadidas.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
        to: user.email,
      // from: '"Welsome Team" <welcome@exampleadidas.com>', // override default from noreply@adidasjacopo.com
        subject: 'Welcome to Nice App! Confirm your Email',
        template: 'confirmation',
        context: {
            name: user.name,
            url,
            },
        });
    }
}

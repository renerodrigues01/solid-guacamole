import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class ApplicationEmail extends BaseMailer {
  constructor(
    private readonly data: any,
  ) {
    super()
  }

  /**
   * The prepare method is invoked automatically when you run
   * "NewApplication.send".
   *
   * Use this method to prepare the email message. The method can
   * also be async.
   */
  public prepare(message: MessageContract) {
    message
      .subject("New subsciption to the Newsletter")
      .from(Env.get('SMTP_FROM_MAIL'), Env.get('SMTP_FROM_NAME'))
      .to(Env.get('SMTP_FROM_MAIL'))
      .html(this.data);
  }
}

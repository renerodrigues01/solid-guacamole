import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApplicationEmail from 'App/Mailers/ApplicationEmail';

export default class HomeController {


    public static async sendyy({ request, response }: HttpContextContract) {

        const data = request.body;

        await new ApplicationEmail(data).sendLater()

        console.log(data)

        return response.redirect("/", true, 200)
    }
}
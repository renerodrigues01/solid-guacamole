import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApplicationEmail from 'App/Mailers/ApplicationEmail';

export default class HomeController {


    public static async sendyy({ request, response }: HttpContextContract) {

        console.log(JSON.stringify(request.ctx?.request.body))

        await new ApplicationEmail(JSON.stringify(request.ctx?.request.body)).sendLater()

        return response.redirect("/", true, 200)
    }
}
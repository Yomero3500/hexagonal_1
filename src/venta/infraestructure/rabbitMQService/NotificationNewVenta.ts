import { Venta } from "../../domain/entidad/Venta";
import INotificationNewVenta from "../../domain/servicios/INotificationAddVenta";
import amqplib from "amqplib";

export class NotificationNewVenta implements INotificationNewVenta{
    private url: any;
    private exch: any;
    
    constructor() {
        // this.options = {
        //     username: process.env.AMQP_USERNAME,
        //     password: process.env.AMQP_PASS,
        //     port: process.env.AMQP_PORT
        // };
        this.url = process.env.AMQP_URL_EC2;
        this.exch = process.env.EXCHANGE_EC2;
    }

    async sendNotification(venta: Venta): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const channel = await conn.createChannel();
        const status = await channel.publish(this.exch,'',Buffer.from(JSON.stringify(venta.id_venta)))
        console.log(status);
        return status
    }
}
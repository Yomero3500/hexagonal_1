import { Venta } from "../../domain/entidad/Venta";
import INotificationNewVenta from "../../domain/servicios/INotificationAddVenta";
import amqplib from "amqplib";

export class NotificationNewVenta implements INotificationNewVenta{
    private url: any;
    private exch: any;
    
    constructor() {
        this.url = process.env.AMQP_URL_EC2;
        this.exch = process.env.EXCHANGE_EC2;
    }

    async sendNotification(venta: Venta): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const channel = await conn.createChannel();
        console.log(venta.id_venta);
        console.log(JSON.stringify(venta.id_venta));
        
        const status = await channel.publish(this.exch,'12345', Buffer.from(JSON.stringify(venta.id_venta)))
        console.log(venta.id_venta);
        return status
    }
}
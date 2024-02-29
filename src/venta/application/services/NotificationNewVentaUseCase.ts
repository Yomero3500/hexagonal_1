import { Venta } from "../../domain/entidad/Venta";
import { NotificationNewVenta } from "../../infraestructure/rabbitMQService/NotificationNewVenta";

export class NotificationNewVentaUseCase{
    constructor(readonly notificationNewVenta: NotificationNewVenta){}
    async run(venta: Venta){
        await this.notificationNewVenta.sendNotification(venta)
    }
}
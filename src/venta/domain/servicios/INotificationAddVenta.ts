import { Venta } from "../entidad/Venta";

export default interface INotificationNewVenta{
    sendNotification(venta: Venta):Promise<boolean>;
}
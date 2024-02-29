import { AddVentaController } from "../controllers/addVentaController";
import { AddVentaUseCase } from "../../application/useCase/addVentaUseCase";
import { MysqlVentaRepository } from "../repository/Mysqlventarepository";
import { NotificationNewVenta } from "../rabbitMQService/NotificationNewVenta";
import { NotificationNewVentaUseCase } from "../../application/services/NotificationNewVentaUseCase";

export const mysqlVentaRepository = new MysqlVentaRepository();
export const notificationNewVenta = new NotificationNewVenta();
export const servicesNotification = new NotificationNewVenta();
export const  servicesNotificationUseCase = new NotificationNewVentaUseCase(servicesNotification);

export const addVentaUseCase = new AddVentaUseCase(mysqlVentaRepository, servicesNotificationUseCase);
export const addVentaController = new AddVentaController(addVentaUseCase)
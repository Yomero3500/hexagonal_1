import { Venta } from "../entidad/Venta";

export interface VentaRepository{
    createVenta(
        id_venta:number,
        contenido:string,
        precio: number
    ): Promise<Venta | null>;
}
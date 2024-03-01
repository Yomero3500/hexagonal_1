import { Venta } from "../../domain/entidad/Venta";
import { VentaRepository } from "../../domain/interfaz/ventaRepository";
import { query } from "../../../db/db";

export class MysqlVentaRepository implements VentaRepository{
    async createVenta(id_venta: number, contenido: string, precio: number): Promise<Venta | null> {
    const sql =  "INSERT INTO ventas (id_venta, contenido, precio) VALUES (?,?,?)";
    const parametros: any[] = [id_venta, contenido, precio];
    try {
        const [result]: any = await query(sql, parametros);        
        return new Venta(id_venta, contenido, precio)    
    } catch (error) {
        console.log("Error: " + error);
        return null;
    }
    }
}
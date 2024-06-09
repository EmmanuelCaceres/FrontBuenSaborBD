import Articulo from "./Articulo";

export default class ArticuloManufacturado{
    id: number = 0;
    tiempoEstimadoEnMinutos : number = 0;
    preparacion : number = 0;
    articulo? : Articulo;
}
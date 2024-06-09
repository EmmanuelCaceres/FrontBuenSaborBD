import ArticuloInsumo from "./ArticuloInsumo";

export default class HistoricoPedidoArticuloInsumo{
    id: number = 0;
    fecha: Date = new Date();
    precioCosto: number = 0;
    articuloInsumo? : ArticuloInsumo;
}
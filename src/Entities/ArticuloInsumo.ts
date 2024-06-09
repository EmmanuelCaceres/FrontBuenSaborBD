import Articulo from "./Articulo";

export default class ArticuloInsumo{
    id: number = 0;
    stockMaximo : number = 0;
    stockMinimo : number = 0;
    esParaElaborar : boolean = true;
    articulo?: Articulo
    
}
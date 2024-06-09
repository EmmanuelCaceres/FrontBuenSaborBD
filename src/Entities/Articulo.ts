import Categoria from "./Categoria";
import UnidadMedida from "./UnidadMedida";

export default class Articulo{
    id: number = 0;
    denominacion: string = "";
    categoria?: Categoria;
    unidadMedida?: UnidadMedida;
}
import "./boton-favorito.css";
import { Personaje } from "../../types/personaje.types";
import { useAppDispatch } from "../../redux/hooks";
import { favoritos } from "../../redux/personajesSlice";

/**
 * @param {Object} props
 * @param {boolean} props.esFavorito
 * @param {function} props.onClick
 * @returns
 */

interface Props {
  esFavorito: boolean;
  onClick: Personaje;
}

const BotonFavorito = ({ esFavorito, onClick }: Props) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  const dispatch = useAppDispatch();

  const pasarFavoritos = (personaje: Personaje) => {
    dispatch(favoritos(personaje));
  };

  return (
    <div className="boton-favorito" onClick={() => pasarFavoritos(onClick)}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;

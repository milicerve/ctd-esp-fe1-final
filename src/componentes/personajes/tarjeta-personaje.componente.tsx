import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useNavigate } from "react-router-dom";
import { Personaje } from "../../types/personaje.types";
import { useAppSelector } from "../../redux/hooks";
/**
 * @returns {JSX.Element}
 */

interface Props {
  personaje: Personaje;
}

const TarjetaPersonaje = ({ personaje }: Props) => {
  const navigate = useNavigate();

  const favoritos = useAppSelector((state) => state.personaje.favoritos);

  const favoritosSeleccionados = favoritos.find(
    (item) => item.id === personaje.id
  );

  const next = (personaje: Personaje) => {
    navigate(`/detalle/${personaje.id}`);
  };

  return (
    <div className="tarjeta-personaje">
      <img
        src={personaje.image}
        alt={personaje.name}
        onClick={() => next(personaje)}
      />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito
          esFavorito={favoritosSeleccionados ? true : false}
          onClick={personaje}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;

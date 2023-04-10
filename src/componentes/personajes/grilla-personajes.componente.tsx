import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { Personaje } from "../../types/personaje.types";

/**
 *@param {Object} props
 *@param {Array<Object>} props.personajes
 *@returns {JSX.Element}
 */

interface Props {
  personajes: Personaje[];
}

const GrillaPersonajes = ({ personajes }: Props) => {
  return (
    <div className="grilla-personajes">
      {personajes &&
        personajes.map((personaje) => (
          <TarjetaPersonaje personaje={personaje} key={personaje.id} />
        ))}
    </div>
  );
};

export default GrillaPersonajes;

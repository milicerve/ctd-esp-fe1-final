import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { limpiarFavoritos } from "../redux/personajesSlice";

/**
 * @returns la pagina de favoritos
 */

const PaginaFavoritos = () => {
  const dispatch = useAppDispatch();
  const personajesFavoritos = useAppSelector(
    (state) => state.personaje.favoritos
  );

  const cleanFavoritos = () => {
    dispatch(limpiarFavoritos());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={() => cleanFavoritos()}>
          Eliminar Todos
        </button>
      </div>
      <GrillaPersonajes personajes={personajesFavoritos} />
    </div>
  );
};

export default PaginaFavoritos;

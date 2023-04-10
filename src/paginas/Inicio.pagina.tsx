import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { buscar, getPersonajes, limpiar } from "../redux/personajesSlice";

const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const personajes = useAppSelector((state) => state.personaje.personajes);
  const error = useAppSelector((state) => state.personaje.error);
  const loading = useAppSelector((state) => state.personaje.loading);

  useEffect(() => {
    dispatch(getPersonajes(""));
  }, [dispatch]);

  const resetSearch = () => {
    dispatch(buscar(""));
    dispatch(limpiar());
    dispatch(getPersonajes(""));
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={() => resetSearch()}>
          Reset
        </button>
      </div>
      <Filtros />
      <Paginacion />
      {loading === true && "Cargando ..."}
      {error === true && "Error en la pagina, vuelva a intentarlo"}
      {!error && !loading && (
        <>
          <GrillaPersonajes personajes={personajes} />
          <Paginacion />
        </>
      )}
    </div>
  );
};

export default PaginaInicio;

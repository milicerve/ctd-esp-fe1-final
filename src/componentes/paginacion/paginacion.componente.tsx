import "./paginacion.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPages } from "../../redux/personajesSlice";

/**
 * @returns {JSX.Element}
 */

const Paginacion = () => {
  const dispatch = useAppDispatch();
  const storePages = useAppSelector((state) => state.personaje.paginacion);

  const prevPage = () => {
    dispatch(getPages(storePages.prev));
  };
  const nextPage = () => {
    dispatch(getPages(storePages.next));
  };

  return (
    <div className="paginacion">
      <button
        disabled={!storePages.prev}
        className={"primary"}
        onClick={() => prevPage()}
      >
        Anterior
      </button>
      <button
        disabled={!storePages.next}
        className={"primary"}
        onClick={() => nextPage()}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;

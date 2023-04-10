import "./filtros.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { buscar, getPersonajes } from "../../redux/personajesSlice";

const Filtros = () => {
  const dispatch = useAppDispatch();
  const valueSearch = useAppSelector((state) => state.personaje.value);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(buscar(e.target.value));
    dispatch(getPersonajes(e.target.value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={valueSearch}
        onChange={(e) => search(e)}
      />
    </div>
  );
};

export default Filtros;

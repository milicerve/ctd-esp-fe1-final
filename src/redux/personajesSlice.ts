import { Personaje } from "../types/personaje.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = "https://rickandmortyapi.com/api/";

export const getPersonajes = createAsyncThunk(
  "getPersonajes",
  async (name: string) => {
    const response = await fetch(`${apiUrl}character/?name=${name}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Error, vuelva a intentarlo");
    }
  }
);

export const getPersonajesFilter = createAsyncThunk(
  "getPersonajesFilter",
  async (id: string) => {
    const response = await fetch(`${apiUrl}character/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      throw new Error("Error, no se encontro al personaje deseado");
    }
  }
);

export const getPages = createAsyncThunk(
  "getPages", 
  async (url: string) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
});

interface initialType {
  value: string,
  paginacion: {
    next: string;
    prev: string;
  },
  personajes: Personaje[],
  favoritos: Personaje[],
  selected: Personaje,
  loading: boolean,
  error: boolean,
}

const initialState: initialType = {
  value: "",
  paginacion: {
    next: "",
    prev: "",
  },
  personajes: [],
  favoritos: [],
  selected: {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: '',
    created: ''
  },
  loading: false,
  error: false,
};

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    buscar: (state, action) => {
      state.value = action.payload;
    },
    favoritos: (state, action) => {
      if(!state.favoritos.find(item => item.id === action.payload.id)){
        state.favoritos.push(action.payload)
      }else{
        state.favoritos = state.favoritos.filter(item => item.id !== action.payload.id)
      }
    },
    limpiar: (state) => {
      state.value = "";
    },
    limpiarFavoritos: (state) => {
      state.favoritos = [];
    },
    seleccionado: (state, action) => {
      state.selected = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPersonajes.fulfilled, (state, action) => {
      state.personajes = action.payload.results;
      state.paginacion.next = action.payload.info.next;
      state.paginacion.prev = action.payload.info.prev;
      state.error = initialState.error;
    });
    builder.addCase(getPersonajes.rejected, (state) => {
      state.loading = false;
      state.error = true;;
    });
    builder
      .addCase(getPages.fulfilled, (state, action) => {
        state.personajes = action.payload.results;
        state.paginacion.next = action.payload.info.next;
        state.paginacion.prev = action.payload.info.prev;
      })
      .addCase(getPersonajesFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.selected = action.payload;
      })
      .addCase(getPersonajesFilter.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { buscar, favoritos, limpiar, limpiarFavoritos, seleccionado } =
  personajesSlice.actions;

export default personajesSlice.reducer;

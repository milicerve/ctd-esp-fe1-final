export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
      name: string;
      url: string;
  };
  location: {
      name: string;
      url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Epis {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
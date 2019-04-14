import { combineReducers } from 'redux';
import reducerRegistry from '../utils/reducerRegistry';
import appReducer from "./appDuck";
import searchConstants from "../../search/constants/searchConstants";
import commonApi from "../utils/commonApi";

const createActionName = name => `common/duck/pokemon/${name}`;

const types = {
  STORE_POKEMON: createActionName('STORE_POKEMON'),
  STORE_POKEMON_SPECIES: createActionName('STORE_POKEMON_SPECIES'),
  FETCH_POKEMON_FAIL: createActionName('FETCH_POKEMON_FAIL'),
};

const actions = {
  fetchPokemonFail: () => (
    { type: types.FETCH_POKEMON_FAIL }
  ),
  storePokemon: (pokemon) => (
    { type: types.STORE_POKEMON, pokemon }
  ),
  storePokemonSpecies: (species, id) => (
    { type: types.STORE_POKEMON_SPECIES, species, id }
  ),
};

const operations = {
  ...actions,
  fetchPokemon: (id) => (dispatch) => {
    // dispatch(appLoadingStart());
    return commonApi.getPokemon(id)
      .then((response) => {
        dispatch(actions.storePokemon(response.data));
        // dispatch(appLoadingEnd());
      })
      .catch(() => {
        dispatch(actions.fetchPokemonFail());
        // dispatch(appLoadingEnd());
      })
  },
  fetchPokemonSpecies: (id) => (dispatch) => {
    // dispatch(appLoadingStart());
    return commonApi.getPokemonSpecies(id)
      .then((response) => {
        dispatch(actions.storePokemonSpecies(response.data, id));
        // dispatch(appLoadingEnd());
      })
      .catch(() => {
        dispatch(actions.fetchPokemonFail());
        // dispatch(appLoadingEnd());
      })
  },
};

const pokemonByIdsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.STORE_POKEMON:
      return {
        ...state,
        [action.pokemon.id]: action.pokemon
      };
    case types.STORE_POKEMON_SPECIES:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          flavorText: action.species.flavor_text_entries
            .find((item)=>(item.language.name === 'en'))
            .flavor_text,
          habitat: action.species.habitat ? action.species.habitat.name : "",
          shape: action.species.shape ? action.species.shape.name : "",
        }
      };
    default:
      return state;
  }
};

const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case types.STORE_POKEMON:
      return [...state, action.pokemon.id];
    default:
      return state;
  }
};

const reducer = combineReducers({
  byIds: pokemonByIdsReducer,
  list: pokemonListReducer,
});

reducerRegistry.save('pokemon', reducer);
reducerRegistry.register();

const selectors = {};

export {
  selectors,
  operations,
  actions,
  types,
};

export default reducer;

import { combineReducers } from 'redux';
import reducerRegistry from '../utils/reducerRegistry';
import appReducer from "./appDuck";
import searchConstants from "../../search/constants/searchConstants";
import commonApi from "../utils/commonApi";

const createActionName = name => `common/duck/pokemon/${name}`;

const types = {
  STORE_POKEMON: createActionName('STORE_POKEMON'),
  FETCH_POKEMON: createActionName('FETCH_POKEMON'),
};

const actions = {
  storePokemon: (pokemon) => (
    { type: types.STORE_POKEMON, pokemon }
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
        dispatch(actions.searchFail());
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

import reducerRegistry from '../../common/utils/reducerRegistry';
import SearchApi from "../utils/searchApi";
import { actions as pokemonActions } from '../../common/ducks/pokemonDuck'
const createActionName = name => `search/duck/${name}`;

const types = {
  SEARCH_BY_POKEMON_SUCCESS: createActionName('SEARCH_BY_POKEMON_SUCCESS'),
  SEARCH_BY_TYPE_SUCCESS: createActionName('SEARCH_BY_TYPE_SUCCESS'),
  SEARCH_FAIL: createActionName('SEARCH_FAIL'),
  CHANGE_SEARCH_TYPE: createActionName('CHANGE_SEARCH_TYPE'),
};

const actions = {
  searchByPokemonSuccess: (pokemon) => (
    { type: types.SEARCH_BY_POKEMON_SUCCESS, pokemon }
  ),
  searchByTypeSuccess: (results) => (
    { type: types.SEARCH_BY_TYPE_SUCCESS, results }
  ),
  searchFail: show => (
    { type: types.SEARCH_FAIL }
  ),
  changeSearchType: (searchType) => (
    { type: types.CHANGE_SEARCH_TYPE, searchType }
  ),
};

const operations = {
  ...actions,
  searchByPokemonRequest: (term, type) => (dispatch) => {
    // dispatch(appLoadingStart());
    return SearchApi.get(term, type)
      .then((response) => {
        dispatch(actions.searchByPokemonSuccess(response.data));
        dispatch(pokemonActions.storePokemon(response.data));
        // dispatch(appLoadingEnd());
      })
      .catch(() => {
        dispatch(actions.searchFail());
        // dispatch(appLoadingEnd());
      })
  },
};

const initialState = {
  results: [],
  pagination: 20,
};

const selectors = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_BY_POKEMON_SUCCESS:
      return {
        ...state,
        results: [action.pokemon.id]
      };
    case types.SEARCH_BY_TYPE_SUCCESS:
      return {
        ...state,
        results: [action.results]
      };
    case types.SEARCH_FAIL:
      return {
        ...state,
        results: []
      };
    case types.CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.type,
      };
    default:
      return state;
  }
};

reducerRegistry.save('search', reducer);
reducerRegistry.register();

export {
  selectors,
  operations,
  actions,
  types,
};

export default reducer;

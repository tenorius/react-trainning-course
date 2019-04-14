import reducerRegistry from '../utils/reducerRegistry';

const createActionName = name => `common/duck/app/${name}`;

const types = {
  START_LOADING: createActionName('START_LOADING'),
  END_LOADING: createActionName('END_LOADING'),
  TOGGLE_DRAWER: createActionName('TOGGLE_DRAWER'),
};

const actions = {
  startLoading: () => (
    { type: types.START_LOADING }
  ),
  endLoading: () => (
    { type: types.END_LOADING }
  ),
  toggleDrawer: () => (
    { type: types.TOGGLE_DRAWER }
  ),
};

const operations = {};

const initialState = {
  loading: false,
  showDrawer: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return { ...state, loading: true };
    case types.END_LOADING:
      return { ...state, loading: false };
    case types.TOGGLE_DRAWER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

reducerRegistry.save('app', reducer);
reducerRegistry.register();

const selectors = {};

export {
  selectors,
  operations,
  actions,
  types,
};

export default reducer;

import reducerRegistry from '../utils/reducerRegistry';

const createActionName = name => `common/duck/${name}`;

const types = {
  LOGIN_REQUEST: createActionName('LOGIN_REQUEST'),
  LOGIN_SUCCESS: createActionName('LOGIN_SUCCESS'),
  LOGIN_FAIL: createActionName('LOGIN_FAIL'),
};

const actions = {
  loginSuccess: () => (
    { type: types.LOGIN_SUCCESS }
  ),
  loginFail: () => (
    { type: types.LOGIN_FAIL }
  ),
};

const operations = {
  loginRequest: () => (
    { type: types.LOGIN_REQUEST }
  ),
};

const initialState = {
  loading: false,
  showDrawer: false,
};

const selectors = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return { ...state, loading: true };
    case types.END_LOADING:
      return { ...state, loading: false };
    case types.TOGGLE_DRAWER:
      return { ...state, loading: false };
    case types.END_ROUTE_CHANGE:
      return { ...state, showDrawer: !state.showDrawer };
    default:
      return state;
  }
};

// const reducer = combineReducers({
//   appReducer,
// });

reducerRegistry.save('app', reducer);
reducerRegistry.register();

export {
  selectors,
  operations,
  actions,
  types,
};

export default reducer;

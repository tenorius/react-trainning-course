class RouteRegistry {
  map = {};
  
  register(routes) {
    let mappedRoutes = routes.reduce((acc, route)=>{
      acc[route.path] = route.name;
      return acc;
    }, {});
    this.map = {...this.map, ...mappedRoutes};
  };
  
  getStateName(path) {
    return this.map[path];
  }
};

export default new RouteRegistry();
import Api from './api/rootApi';

class CommonApi {
  api = new Api();
  async getPokemon(id) {
    return this.api.get(`/Pokemon/${id}`);
  };
}

export default new CommonApi();
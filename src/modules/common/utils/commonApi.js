import Api from './api/rootApi';

class CommonApi {
  api = new Api();
  async getPokemon(id) {
    return this.api.get(`/pokemon/${id}`);
  };
  async getPokemonSpecies(id) {
    return this.api.get(`/pokemon-species/${id}`);
  };
}

export default new CommonApi();
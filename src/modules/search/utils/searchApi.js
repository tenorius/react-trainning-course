import Api from '../../common/utils/api/rootApi';

class SearchApi {
  api = new Api();
  async get(term, type) {
    return this.api.get(`/${type}/${term}`);
  };
}

export default new SearchApi();
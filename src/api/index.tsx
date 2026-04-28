export const jsonHeaders = { 'Content-Type': 'application/json' };

class API {
  backendUrl = 'https://pokeapi.co/api/v2';
  limit = 8;

  async fetch(url: string, params = {}) {
    const response = await fetch(`${url}`, { ...params });

    if (!response.ok) {
      const error = new Error('Fetch error');
      throw error;
    }

    return response.json();
  }

  async get(offset: number) {
    const url = `${this.backendUrl}/pokemon?offset=${offset * this.limit}&limit=${this.limit}`;
    const list = await this.fetch(url, { method: 'GET' });
    const pagesCount = Math.floor(list.count / 8);

    const responses = await Promise.all(
      list.results.map((item: { url: string }) => {
        return this.fetch(item.url, { method: 'GET' });
      })
    );

    return { responses, pagesCount };
  }

  async getSpecies(url: string) {
    const response = await this.fetch(url, { method: 'GET' });
    const color = await this.fetch(response.color.url, { method: 'GET' });

    return { response, color: color.name };
  }
}

export default new API();

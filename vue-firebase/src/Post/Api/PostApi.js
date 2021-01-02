import client from "@/Http/Client";

class PostApi {
  async get(id) {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });

    const { data } = await client.get(`/posts/${id}`);

    return data;
  }

  async list() {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });

    const { data } = await client.get(`/posts`);

    return data;
  }

  async create(post) {
    const { data } = await client.post(`/posts`, post);

    return data;
  }

  async update(id, post) {
    const { data } = await client.put(`/posts/${id}`, post);

    return data;
  }

  async remove(id) {
    const { data } = await client.delete(`/posts/${id}`);

    return data;
  }
}

export default new PostApi();

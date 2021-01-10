import client from "@/Http/Client";
import { projectFirestore } from "@/Firebase/Config";

class PostApi {
  async get(id) {
    const docRef = await projectFirestore
      .collection("posts")
      .doc(id)
      .get();

    if (!docRef.exists) {
      throw Error("The post doest not exist");
    }

    return {
      ...docRef.data(),
      id: docRef.id,
    };
  }

  async list() {
    const docRef = await projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .get();

    return docRef.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
  }

  async create(post) {
    const docRef = await projectFirestore.collection("posts").add(post);

    return docRef.id;
  }

  async update(id, post) {
    const { data } = await client.put(`/posts/${id}`, post);

    return data;
  }

  async remove(id) {
    await projectFirestore
      .collection("posts")
      .doc(id)
      .delete();
  }
}

export default new PostApi();

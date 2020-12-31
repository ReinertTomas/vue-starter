import { ref } from "vue";

const removePost = (id, emit) => {
  const error = ref(null);

  const remove = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw Error("Error post remove");
      }
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }

    emit("post-remove", id);
  };

  return {
    error,
    remove,
  };
};

export default removePost;

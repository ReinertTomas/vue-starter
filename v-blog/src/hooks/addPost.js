// import { useRouter } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";

const addPost = () => {
  const router = useRouter();
  const error = ref(null);

  const add = async post => {
    try {
      let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw Error("Error post add.");
      }

      const data = await response.json();

      router.push({ name: "Detail", params: { id: data.id } });
    } catch (err) {
      error.value = err.message;
      console.error(err.value);
    }
  };

  return {
    error,
    add,
  };
};

export default addPost;

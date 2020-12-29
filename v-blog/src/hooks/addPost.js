// import { useRouter } from "vue-router";
import { ref } from "vue";

const addPost = post => {
  const error = ref(null);

  const add = async () => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });

      let res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (!res.ok) {
        throw Error("Post not saved.");
      }

      console.log(res);
      // await router.push({ name: ''});
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

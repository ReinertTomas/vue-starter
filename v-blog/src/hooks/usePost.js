import { ref } from "vue";

const uri = "http://localhost:3000/posts";

const usePost = () => {
  const posts = ref([]);
  const post = ref(null);
  const error = ref(null);

  const getPosts = async () => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 500);
      });

      let response = await fetch(uri);
      if (!response.ok) {
        throw Error("no data available");
      }
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  const getPost = async id => {
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 500);
      });

      let response = await fetch(uri + "/" + id);
      if (!response.ok) {
        throw Error("Not found post id: " + id);
      }

      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  const addPost = async data => {
    try {
      let response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw Error("Error post add.");
      }

      post.value = await response.json();
      posts.value.push(post.value);
    } catch (err) {
      error.value = err.message;
      console.error(err.value);
    }
  };

  const removePost = async post => {
    try {
      let response = await fetch(uri + "/" + post.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw Error("Error post remove");
      }

      posts.value = posts.value.filter(item => {
        return post.id !== item.id;
      });
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return {
    posts,
    post,
    error,
    getPosts,
    getPost,
    addPost,
    removePost,
  };
};

export default usePost;

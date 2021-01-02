import { ref } from "vue";
import PostApi from "@/Post/Api/PostApi";

const usePostList = error => {
  const posts = ref([]);

  const getPosts = async () => {
    try {
      posts.value = await PostApi.list();
    } catch (err) {
      error.value = err.message;
      console.error(err.message);
    }
  };

  return {
    posts,
    getPosts,
  };
};

export default usePostList;

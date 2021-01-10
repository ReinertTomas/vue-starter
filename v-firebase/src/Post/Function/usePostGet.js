import { ref } from "vue";
import PostApi from "@/Post/Api/PostApi";

const usePostGet = error => {
  const post = ref(null);

  const getPost = async id => {
    try {
      post.value = await PostApi.get(id);
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return {
    post,
    getPost,
  };
};

export default usePostGet;

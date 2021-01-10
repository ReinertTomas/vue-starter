import PostApi from "@/Post/Api/PostApi";

const usePostRemove = (error, posts) => {
  const handleRemovePost = async post => {
    try {
      await PostApi.remove(post.id);
    } catch (err) {
      error.value = err.message;
      console.error(err.message);
    }

    posts.value = posts.value.filter(item => {
      return post.id !== item.id;
    });
  };

  return {
    handleRemovePost,
  };
};

export default usePostRemove;

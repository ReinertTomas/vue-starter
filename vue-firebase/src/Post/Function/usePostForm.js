import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import useDate from "@/Core/Function/useDate";
import PostApi from "@/Post/Api/PostApi";

const usePostForm = error => {
  const router = useRouter();
  const post = reactive({
    title: "",
    body: "",
    author: "",
    createdAt: null,
    tags: [],
  });
  const tag = ref("");

  const handleTagAdd = () => {
    if (!post.tags.includes(tag.value)) {
      tag.value = tag.value.replace(/\s/, "");
      post.tags.push(tag.value);
    }
    tag.value = "";
  };

  const handleFormSubmit = async () => {
    const { nowFormatApi } = useDate();
    post.createdAt = nowFormatApi();

    try {
      let newPost = await PostApi.create(post);
      router.push({ name: "post-detail", params: { id: newPost.id } });
    } catch (err) {
      error.value = err.message;
      console.error(err.message);
    }
  };

  return {
    post,
    tag,
    handleTagAdd,
    handleFormSubmit,
  };
};

export default usePostForm;

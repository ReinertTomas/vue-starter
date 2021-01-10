import { ref } from "vue";

const useAlert = () => {
  const error = ref(null);

  return {
    error,
  };
};

export default useAlert;

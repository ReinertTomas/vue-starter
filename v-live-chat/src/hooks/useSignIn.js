import { reactive } from "vue";
import { auth } from "@/firebase/config";

const state = reactive({
  error: null,
});

const signIn = async (email, password) => {
  state.error = null;

  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("Could not complete the sign in.");
    }

    state.error = null;

    console.log(response);

    return response;
  } catch (err) {
    state.error = err.message;
    console.error(err.message);
  }
};

const useSignIn = () => {
  return { state, signIn };
};

export default useSignIn;

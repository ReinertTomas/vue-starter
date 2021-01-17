import { reactive } from "vue";
import { auth } from "@/firebase/config";

const state = reactive({
  error: null,
});

const signUp = async (email, password, displayName) => {
  state.error = null;

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("Could not complete the sign up.");
    }

    await response.user.updateProfile({
      displayName: displayName,
    });
    state.error = null;

    return response;
  } catch (err) {
    state.error = err.message;
    console.error(err.message);
  }
};

const useSignUp = () => {
  return { state, signUp };
};

export default useSignUp;

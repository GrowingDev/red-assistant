import { createStore } from "vuex";
import router from "../router/index";
import * as fb from "../firebase";
export default createStore({
  state: {
    userProfile: null,

  },
  getters: {
    getUser: state => state.userProfile,
  },
  actions: {
    signUp({ dispatch }, form) {
      fb.auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(() => {
          const user = fb.auth.currentUser;
          const actionCodeSettings = {
            url: `https://red-assistant-2933f.web.app/sign-in/?email=${user.email}`,
          };
          user.sendEmailVerification(actionCodeSettings)
          .then(function() {
            // Verification email sent.
            dispatch("fetchUserProfile", user);
          })
          .catch(function(error) {
            // Error occurred. Inspect error.code.
            console.log(error)
          });
      
        })
        .catch(error => {
          // catch any errors, set a data property called error
          this.error = error.message;
        });
    },
    async signIn({ dispatch }, form) {
      // sign user in

      const { user } = await fb.auth
        .signInWithEmailAndPassword(form.email, form.password)
        .catch((error) => {
          console.log(error);
        });
      // fetch user profile and set in state
      
      dispatch("fetchUserProfile", user);
    },

    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      commit("setUserProfile", userProfile.data());
      router.push('/dashboard')
    },
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
      console.log(val);
    },
  },
  modules: {},
});

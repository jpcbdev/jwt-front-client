import Vue from 'vue'
import Vuex from 'vuex'
import authentication from "./services/authentication";
import router from './router';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {}
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem('jwt', token);
    },
    setUserData(state, data) {
      state.userData = data;
    },
    signOut(state) {
      localStorage.removeItem('jwt');
      state.userData = {};
      router.push('/');
    }
  },
  actions: {
    postSignUp: async (context, model) => {
      await authentication.postSignUp(model).
        then(res => {
          console.log(res);
          if (res.error) {
            console.log("Error al registrar");
          } else {
            console.log("Registro exitoso");
            router.push('/signin');
          }
        })
    },
    postSignIn: async (context, model: any) => {
      await authentication.postSignIn(model)
        .then(res => {
          if (res.error) {
            console.log("Error al logearse");
          } else {
            context.commit("setToken", res.token);
            router.push('/profile');
          }
        })
        .catch(err => console.log(err));
    },
    getProfile: async (context, token: any) => {
      await authentication.getProfile(token)
        .then(res => {
          context.commit("setUserData", res);
        })
        .catch(err => console.log(err));
    }

  },
  getters: {
    getToken(state) {
      return localStorage.getItem('jwt');
    },
    getUserData(state) {
      return state.userData;
    }
  }
})

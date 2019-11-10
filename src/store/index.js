import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import {getInitialState} from './helpers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: null,
    user: {},
    challenge: '',
    oldRewardPoints: null,
    errors: {}
  },
  getters: {
    loggedIn(state) {
      return state.accessToken !== null;
    },
    user(state) {
      return state.user;
    },
    challenge(state) {
      return state.challenge;
    },
    oldRewardPoints(state) {
      return state.oldRewardPoints;
    }
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setChallenge(state, challenge) {
      state.challenge = challenge;
    },
    setOldRewardPoints(state, oldRewardPoints) {
      state.oldRewardPoints = oldRewardPoints;
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
    resetState(state) {
      Object.assign(state, getInitialState());
    },
  },
  actions: {
    async signUp(context, user) {
      const res = await axios.post('/users/signup', user);

      if(res.status === 200) {
        const token = res.data.access_token;
        const newUser = {
          name: res.data.user.name,
          email: res.data.user.email,
          rewardPoints: res.data.user.rewardPoints, 
          isSubscribed: res.data.user.isSubscribed
        }

        this.commit('setAccessToken', token);
        this.commit('setUser', newUser);

        const oneYear = 60*60*24*365;
        document.cookie = `access-token=${token}; max-age=${oneYear}`;

        router.push('challenge');
      }
    },
    async signIn(context, credentials) {
      const res = await axios.post('/users/signin', credentials);

      if(res.status === 200) {
        const token = res.data.access_token;
        const user = {
          name: res.data.user.name,
          email: res.data.user.email,
          rewardPoints: res.data.user.rewardPoints, 
          isSubscribed: res.data.user.isSubscribed
        }

        this.commit('setAccessToken', token);
        this.commit('setUser', user);

        const oneYear = 60*60*24*365;
        document.cookie = `access-token=${token}; max-age=${oneYear}`;

        router.push('challenge');
      }
    },
    async logout(context) {
      if(context.getters.loggedIn) {
        const res = await axios.get('/users/logout');

        if(res.status === 200) {
          document.cookie = 'access-token=; expires=expires=Thu, 01 Jan 1970 00:00:01 GMT';
          this.commit('resetState');
          router.push('/');
        }
      }
    },
    async getChallenge(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const res = await axios.get('/users/challenge');

      if(res.status === 200) {
        const challenge = res.data.task;
        this.commit('setChallenge', challenge);
      }
    },
    async accomplishChallenge(context) {
      // Save old rewardpoints to state
      this.commit('setOldRewardPoints', this.getters.user.rewardPoints);

      // Send completion request to server
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const res = await axios.get('/users/complete');

      if(res.status === 200) {
        // const {data} = await axios.get('/users/profile');
        // const updatedRewardPoints = data.rewardPoints;

        // this.commit('setUser', {
        //   ...this.state.user, rewardPoints: updatedRewardPoints
        // });

        // Update rewardpoints in store
        this.dispatch('getProfile');

        // Update challenge in store
        this.dispatch('getChallenge');

        // Pass old rewardpoints to accomplished view

        router.push('/challenge/accomplished');
      }
    },
    async getEasierChallenge(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const res = await axios.get('/users/level?rank=down');

      if(res.status === 200) {
        this.dispatch('getChallenge');
      }
    },
    async getHarderChallenge(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const res = await axios.get('/users/level?rank=up');

      if(res.status === 200) {
        this.dispatch('getChallenge');
      }
    },
    async getProfile(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const res = await axios.get('/users/profile');

      if(res.status === 200) {
        const user = {
          name: res.data.user.name,
          email: res.data.user.email,
          rewardPoints: res.data.user.rewardPoints, 
          isSubscribed: res.data.user.isSubscribed
        }

        this.commit('setUser', user);
      }
    },
    async editProfile(context, data) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const res = await axios.patch('/users/profile', data);

      if(res.status === 200) {
        router.push('/profile');
      }
    },
    async deleteAccount(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.accessToken;
      const {status} = await axios.delete('/users/profile');

      if(status === 200) {
        router.push('logout')
      }
    }
  },
  modules: {
  }
})

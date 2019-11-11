import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        base: '#311B92',
        primary: '#00B398',
        secondary: '#FF8A80',
        error: '#FF5252'
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  },
});

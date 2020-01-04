import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTitle from 'vue-page-title'

Vue.config.productionTip = false;

Vue.use(VuePageTitle, {suffix: ' - Demo'});

// Original title mixin does not allow for reactivity nor switching routes with same component.
/* const pageTitleUpdateMixin = {
    updated() {
        const {title} = this.$options;
        if (title !== undefined) {
            this.$title = typeof (title) === 'function' ? title.call(this, this) : title;
        }
    }
};
Vue.mixin(pageTitleUpdateMixin); */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

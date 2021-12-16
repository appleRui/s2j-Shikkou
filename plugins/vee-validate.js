import Vue from 'vue';
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize
} from 'vee-validate';
import {required, email, min} from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

let rule;
extend('required', required);
extend('email', email);
extend('min', min);


localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

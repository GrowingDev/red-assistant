import { createStore } from "vuex";
import {dashboard} from './modules/dashboard'
import {auth} from './modules/auth'
import {lines} from './modules/lines'
export default createStore({
 modules: {
  auth,
  dashboard,
  lines
 }
});

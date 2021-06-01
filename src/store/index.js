import { createStore } from "vuex";
import { dashboard } from "./modules/dashboard";
import { auth } from "./modules/auth";
import { vaccinationLines } from "./modules/vaccination-lines";
export default createStore({
  modules: {
    auth,
    dashboard,
    vaccinationLines,
  },
});


import DefaultLayout from "~/layouts/Default.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Buefy from "buefy";
import AOS from "aos";
import VueGithubActivity from 'vue-github-activity'
import SocialSharing from "vue-social-sharing";

import "aos/dist/aos.css";
import "bulma-helpers/css/bulma-helpers.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "~/assets/style/main.scss";


export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });


  Vue.prototype.$aos = AOS;

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.use(Buefy, {
    defaultIconPack: "fas"
  });

  Vue.use(SocialSharing);

  Vue.use(VueGithubActivity)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })
}

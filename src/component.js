import header from './components/header.vue';
import footer from './components/footer.vue';
import budget from './components/budget.vue';
import login from './components/login.vue';

export default function (Vue) {
    Vue.component(header.name, header);
    Vue.component(footer.name, footer);
    Vue.component(budget.name, budget);
    Vue.component(login.name, login);
}

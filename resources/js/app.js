import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, h} from 'vue';
import './bootstrap';
import '../css/app.css';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        return page;
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
        .use(plugin)
        .mount(el)
    },
});
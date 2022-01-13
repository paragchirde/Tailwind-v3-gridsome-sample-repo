import Vue from 'vue'
require('~/tailwind.css')
import VueScrollTo from 'vue-scrollto'
export default function(Vue, { router, head, isClient, appOptions }) {

    head.script.push( )
    head.link.push()

    Vue.use(VueScrollTo, {
        container: "body",
        duration: 800,
        easing: "ease",
        offset: -10,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })
}
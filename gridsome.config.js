const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [
    tailwind(),
]

module.exports = {
    siteName: '',
    siteDescription: "",
    siteUrl: '',
    titleTemplate: '%s',
    icon: 'src/favicon.png',
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    
}
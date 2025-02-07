import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Laravel Jetstream',
    description: 'Beautifully designed application scaffolding for Laravel',
    base: '/',
    cleanUrls: false,
    srcDir: 'src',

    head: [
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: '/favicon-16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: '/favicon-32x32.png',
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#18b69b',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/mstile-144x144.png',
        }],
        ['meta', {
            property: 'og:image',
            content: '/social-share.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary_large_image',
        }],
        ['meta', {
            property: 'twitter:image',
            content: '/social-share.png',
        }],
    ],

    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo-dark.svg',
        },
        nav: [
            {
                text: 'GitHub',
                link: 'https://github.com/laravel/jetstream',
            },
        ],
        versions: [
            {
                text: 'v3.x',
                link: 'https://jetstream.laravel.com',
                current: true,
            },
            { text: 'v2.x', link: 'https://github.com/laravel/jetstream-docs/tree/2.x' },
            { text: 'v1.x', link: 'https://github.com/laravel/jetstream-docs/tree/1.x' },
        ],
        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Installation', link: '/installation' },
                    { text: 'Concept Overview', link: '/concept-overview' },
                    { text: 'Building Your App', link: '/building-your-app' },
                ],
            }, {
                text: 'Features',
                items: [
                    { text: 'API', link: '/features/api' },
                    { text: 'Authentication', link: '/features/authentication' },
                    { text: 'Registration', link: '/features/registration' },
                    { text: 'Profile Management', link: '/features/profile-management' },
                    { text: 'Password Update', link: '/features/password-update' },
                    { text: 'Password Confirmation', link: '/features/password-confirmation' },
                    { text: 'Two Factor Authentication', link: '/features/two-factor-authentication' },
                    { text: 'Browser Sessions', link: '/features/browser-sessions' },
                    { text: 'Teams', link: '/features/teams' },
                ],
            }, {
                text: 'Stack Features',
                items: [
                    { text: 'Livewire', link: '/stacks/livewire' },
                    { text: 'Inertia', link: '/stacks/inertia' },
                ],
            }
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search Jetstream Docs...',
                miniSearch: {
                }
            },
        }
    },
    vite: {
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
    }
})

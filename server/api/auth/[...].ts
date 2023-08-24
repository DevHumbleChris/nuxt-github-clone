import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
    secret: runtimeConfig.public.NUXT_AUTH_SECRET,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
           clientSecret: runtimeConfig.public.GITHUB_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    }
})

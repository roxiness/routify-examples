import { writable } from 'svelte/store'
import { api } from './utils'




export const user = (() => {
    const { set, subscribe } = writable({ isUnauthenticated: true })

    async function authenticate() {
        const response = await api('whoami')
        const data = await response.json()
        if (response.ok)
            set(data || {})
    }

    async function signin({ username, password }) {
        const response = await api('signin', { username, password })
        const data = await response.json()
        if (response.ok) { set(data.user) }
        return response.ok
    }

    async function signout() {
        const response = await api('signout')
        if (response.ok) { set({}) }
        return response.ok
    }

    return { subscribe, authenticate, signin, signout }
})()

export const posts = (()=>{
    const { set, subscribe } = writable([])

    async function hydrate(){
        const response = await api('feed')
        const data = await response.json()
        set(data)
    }

    return {subscribe, hydrate}
})()



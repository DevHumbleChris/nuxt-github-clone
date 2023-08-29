interface User {
    name: string
    email: string
    image: string
}

export const user = () : User => {
    const { data } = useAuth()
    return data?.value?.user as User
}

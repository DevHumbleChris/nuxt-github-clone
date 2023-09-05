export const useMenuStore = defineStore('menu', () => {
    const isRightSidebarMenuOpen = useState('isRightSidebarMenuOpen', () => false)
    const isLeftSidebarMenuOpen = useState('isLeftSidebarMenuOpen', () => false)

    const openRightSidebarMenu = (): void => {
        isRightSidebarMenuOpen.value = !isRightSidebarMenuOpen?.value
    }

    const openLeftSidebarMenu = (): void => {
        isLeftSidebarMenuOpen.value = !isLeftSidebarMenuOpen?.value
    }

    return {
        isRightSidebarMenuOpen,
        openRightSidebarMenu,
        isLeftSidebarMenuOpen,
        openLeftSidebarMenu
    }
})

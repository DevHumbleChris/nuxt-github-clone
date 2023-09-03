export const useMenuStore = defineStore('menu', () => {
    const isRightSidebarMenuOpen = useState('isRightSidebarMenuOpen', () => false)
    const isLeftSidebarMenuOpen = useState('isLeftSidebarMenuOpen', () => false)

    const openRightSidebarMenu = () => {
        isRightSidebarMenuOpen.value = !isRightSidebarMenuOpen?.value
    }

    const openLeftSidebarMenu = () => {
        isLeftSidebarMenuOpen.value = !isLeftSidebarMenuOpen?.value
    }

    return {
        isRightSidebarMenuOpen,
        openRightSidebarMenu,
        isLeftSidebarMenuOpen,
        openLeftSidebarMenu
    }
})

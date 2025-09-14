// Global Site Data
export const siteData = {
    name: "Filip Steficar Art",
    lang: "en",
    copyright: "Filip Steficar - 2025 | All Rights Reserved"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Articles",
        href: "/articles"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@filipsteficar.com",
    address: "Gornja Reka 103, 10450 Jastrebarsko, Croatia"
}
// Social Media
export const socialMedia = {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
}
// Hero (Home Page)
export const heroHome = {
    title: "A Creative Mind at Work",
    copy: "A multi-disciplinary journey through moments, sounds, and digital ideas."
}
// Image Grid Home
export const imageGridHome = {
    portraits: [
        "https://images.unsplash.com/photo-1681638413089-0d2232195ad1?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif",
        "https://images.unsplash.com/photo-1685338336480-a8475385be49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif",
        "https://images.unsplash.com/photo-1648617858271-6112c31993dd?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif",
        "https://images.unsplash.com/photo-1607016357898-691d03f9c0ba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif"
    ],
    cars: [
        "https://images.unsplash.com/photo-1517676109075-9a94d44145d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif",
        "https://images.unsplash.com/photo-1595521488367-9b130f86bbe3?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif",
        "https://images.unsplash.com/photo-1505065029964-d4ea1830a456?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif",
        "https://images.unsplash.com/photo-1646427066490-474a01f08a0c?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.avif"
    ]
}
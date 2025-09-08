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
    title: "Lorem ipsum dolor sit amet consectetur.",
    copy: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aliquid alias reiciendis velit aperiam quis nam incidunt ipsa, quae id, obcaecati dolores doloribus officia."
}
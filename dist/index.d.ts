import { UserConfig as UserConfig$1 } from 'vite';

type NavItemWithLink = {
    text: string;
    link: string;
};
interface Sidebar {
    [path: string]: SidebarGroup[];
}
interface SidebarGroup {
    text?: string;
    items: SidebarItem[];
}
type SidebarItem = {
    text: string;
    link: string;
} | {
    text: string;
    link?: string;
    items: SidebarItem[];
};
interface ThemeConfig {
    nav?: NavItemWithLink[];
    sidebar?: Sidebar;
    footer?: Footer;
}
interface Footer {
    message?: string;
    copyright?: string;
}
interface UserConfig {
    title?: string;
    description?: string;
    themeConfig?: ThemeConfig;
    vite?: UserConfig$1;
}

declare function defineConfig(config: UserConfig): UserConfig;

export { defineConfig };

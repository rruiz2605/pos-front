import { SafeHtml } from "@angular/platform-browser";

export interface IMenuItem {
    title?: string;
    icon?: SafeHtml;
    iconName?: string;
    url?: string;
    children?: IMenuItem[];
}
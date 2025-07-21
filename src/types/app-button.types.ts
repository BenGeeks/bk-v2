import { IconType } from 'react-icons';

export enum AppButtonType {
   BUTTON = 'button',
   LINK = 'link',
}

export type AppButtonItem =
   | {
        type: AppButtonType.BUTTON;
        label: string;
        onClick: () => void;
        icon: IconType;
     }
   | {
        type: AppButtonType.LINK;
        label: string;
        href: string;
        icon: IconType;
     };

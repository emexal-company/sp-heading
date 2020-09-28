import { Base } from '@spectrum/sp-base';
export declare class Heading extends Base {
    static componentStyles: import("lit-element").CSSResult;
    size: string;
    heavy: boolean;
    light: boolean;
    serif: boolean;
    protected slot: HTMLElement;
    protected render(): import("lit-element").TemplateResult;
    private getItems;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-heading': Heading;
    }
}

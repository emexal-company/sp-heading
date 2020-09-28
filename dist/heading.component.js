import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import headingStyles from './heading.styles';
import template from './heading.template';
let Heading = class Heading extends Base {
    constructor() {
        super(...arguments);
        this.size = 'L';
        this.heavy = false;
        this.light = false;
        this.serif = false;
    }
    render() {
        return template.call(this);
    }
    getItems() {
        return this.slot
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof HTMLElement);
    }
};
Heading.componentStyles = headingStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Heading.prototype, "size", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Heading.prototype, "heavy", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Heading.prototype, "light", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Heading.prototype, "serif", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], Heading.prototype, "slot", void 0);
Heading = __decorate([
    customElement('sp-heading')
], Heading);
export { Heading };
//# sourceMappingURL=heading.component.js.map
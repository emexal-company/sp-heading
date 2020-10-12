import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function template() {
    const classes = {
        'spectrum-Heading--XXXL': (this.size === 'XXXL'),
        'spectrum-Heading--XXL': (this.size === 'XXL'),
        'spectrum-Heading--XL': (this.size === 'XL'),
        'spectrum-Heading--L': (this.size === 'L'),
        'spectrum-Heading--M': (this.size === 'M'),
        'spectrum-Heading--S': (this.size === 'S'),
        'spectrum-Heading--XS': (this.size === 'XS'),
        'spectrum-Heading--XXS': (this.size === 'XXS'),
        'spectrum-Heading--serif': this.serif,
        'spectrum-Heading--heavy': this.heavy,
        'spectrum-Heading--light': this.light,
    };
    return html `<slot class="spectrum-Heading ${classMap(classes)}"></slot>`;
}
//# sourceMappingURL=heading.template.js.map
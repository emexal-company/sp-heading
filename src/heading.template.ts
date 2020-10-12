/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { Heading } from './heading.component';

export default function template(this: Heading) {
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
    return html`<slot class="spectrum-Heading ${classMap(classes)}"></slot>`;
}

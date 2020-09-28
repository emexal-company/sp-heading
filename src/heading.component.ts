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

import { customElement, property, query } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import headingStyles from './heading.styles';
import template from './heading.template';

@customElement('sp-heading')
export class Heading extends Base {
  public static componentStyles = headingStyles;

  @property({ type: String }) public size: string = 'L';
  @property({ type: Boolean }) public heavy: boolean = false;
  @property({ type: Boolean }) public light: boolean = false;
  @property({ type: Boolean }) public serif: boolean = false;

  @query('slot') protected slot!: HTMLElement;

  protected render() {
    return template.call(this);
  }

  private getItems(): HTMLElement[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => e instanceof HTMLElement) as HTMLElement[];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-heading': Heading;
  }
}

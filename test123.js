var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from "./node_modules/lit@2.2.8/index.js";
import { customElement, property } from "./node_modules/lit@2.2.8/decorators.js";
let SimpleGreeting = class SimpleGreeting extends LitElement {
    constructor() {
        super(...arguments);
        this.id = "1";
    }
    getUserMessage() {
        if (this.id == "abc123") {
            return html `${this.id}`;
        }
        else {
            return html `Please log in <button>Login</button>`;
        }
    }
    render() {
        return html `<p>${this.getUserMessage()}</p>`;
    }
};
SimpleGreeting.styles = css `
    p {
      color: blue;
    }
  `;
__decorate([
    property()
], SimpleGreeting.prototype, "id", void 0);
SimpleGreeting = __decorate([
    customElement("simple-greeting")
], SimpleGreeting);
export { SimpleGreeting };

import { LitElement, css, html } from "lit";

export class LitBtn extends LitElement {
    static properties = {
        _count: {type: Number},
    };

    constructor() {
        super();
        this._count = 0;
    }

    render() {
        return html`
            <div class="flex flex-col">
                <h2 class="text-4xl font-bold text-blue-700">Lit</h2>
                <div class="pt-6">
                    <p class="pb-4 text-xl text-white">
                        Count: ${this._count}
                    </p>
                    <button class="px-2 py-1 text-white bg-blue-700 rounded-lg hover:bg-blue-800" @click=${this._increment}>
                        Lit Button
                    </button>
                </div>
            </div>
        `;
    }
    _increment(e) {
        this._count++;
        this.requestUpdate(); // プロパティの変更を通知
    }
}

customElements.define('lit-btn', LitBtn);
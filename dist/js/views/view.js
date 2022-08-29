export class View {
    constructor(seletor) {
        this.el = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.el.innerHTML = template;
    }
}

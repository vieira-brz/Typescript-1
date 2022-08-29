export abstract class View<T> {
    
    protected el: HTMLElement;

    constructor(seletor: string) {
        this.el = document.querySelector(seletor);
    }

    public update(model: T): void {
        const template = this.template(model);
        this.el.innerHTML = template;
    }

    protected abstract template(model: T): string;
}
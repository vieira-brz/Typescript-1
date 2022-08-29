export abstract class View<T> {
    
    protected el: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.el = elemento as HTMLElement;
        } else {
            throw Error('Seletor não encontrado no DOM!');
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[s\S\]*?<\/script>/, '');
        }
        this.el.innerHTML = template;
    }

    protected abstract template(model: T): string;
}
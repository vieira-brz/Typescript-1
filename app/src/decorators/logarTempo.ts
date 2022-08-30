export function logarTempo(emSegundos: boolean = false) {
    return function(
        target: any,                     // Função construtora (método estático) | Prototype da classe (método não estático) 
        propertyKey: string,             // Nome do método como string
        descriptor: PropertyDescriptor   // "Sabe tudo sobre o método"
    ) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milissegundos';

            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            const t1 = performance.now();
            
            const retorno = metodoOriginal.apply(this, args);
            
            const t2 = performance.now();
            console.log(`${propertyKey}, Tempo de execução: ${(t2-t1)/divisor} ${unidade}`);
       
            retorno;
        };

        return descriptor;
    }
}
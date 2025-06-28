import { Fisica } from './fisica.ts';
import { Juridica } from './juridica.ts';

function main() {
    const pessoaFisica = new Fisica('João Silva', '1234-5678', '123.456.789-00', 'MG-12.345.678', new Date('2005-01-14'));
    console.log(pessoaFisica.getIdade());
    console.log(pessoaFisica.toString());
    
    // Adiciona um mês para garantir que a data de nascimento seja futura
    // isso é para quando a data de nascimento for no próximo mês, para testar o cálculo de idade
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1); 
    
    const pessoaFisicaMaisNova = new Fisica('João Silva', '1234-5678', '123.456.789-00', 'MG-12.345.678', nextMonth);
    console.log(pessoaFisicaMaisNova.getIdade());
    console.log(pessoaFisicaMaisNova.toString());

    const pessoaJuridica = new Juridica('Empresa XYZ', '9876-5432', '12.345.678/0001-90', '1234567890');
    console.log(pessoaJuridica.toString());
}

main();
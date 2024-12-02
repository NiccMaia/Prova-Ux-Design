export function currentDay(){
    const dataAtual = document.querySelector('.dataAtual');
    const month = document.querySelector('.month');
    const data = new Date();

    const diaDaSemana = data.getDay();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
   
    const diasDaSemana = ["Domingo", "Segunda", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const nomeDoDia = diasDaSemana[diaDaSemana];

    let nomeMes;
    switch (mes) {
        case '01':
            nomeMes = 'Janeiro';
            break
        case '02':
            nomeMes = 'Fevereiro';
            break
        case '03':
            nomeMes = 'Março';
            break
        case '04':
            nomeMes = 'Abril';
            break
        case '05':
            nomeMes = 'Maio';
            break
        case '06':
            nomeMes = 'Junho';
            break
        case '07':
            nomeMes = 'Julho';
            break
        case '08':
            nomeMes = 'Agosto';
            break
        case '09':
            nomeMes = 'Setembro';
            break
        case '10':
            nomeMes = 'Outubro';
            break
        case '11':
            nomeMes = 'Novembro';
            break
        case '12':
            nomeMes = 'Dezembro';
            break
    }

    dataAtual.innerText = `${nomeDoDia} ${dia}.${mes}, `;
    month.innerText = `${nomeMes}`;
}
// Defina aqui a data e hora em que começaram a namorar
const namoroDataHora = new Date("2024-06-12T20:42:00"); // Exemplo: 4 de Junho de 2024, 20:00

function formatarDataHora(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam do 0
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    
    return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
}

function calcularTempo() {
    const agora = new Date();
    const diff = agora - namoroDataHora;

    const segundosTotais = Math.floor(diff / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);
    const semanasTotais = Math.floor(diasTotais / 7);
    const mesesTotais = Math.floor(diasTotais / 30.44); // Aproximado

    document.getElementById("months").textContent = mesesTotais;
    document.getElementById("weeks").textContent = semanasTotais;
    document.getElementById("days").textContent = diasTotais;
    document.getElementById("hours").textContent = horasTotais;
    document.getElementById("minutes").textContent = minutosTotais;
    document.getElementById("seconds").textContent = segundosTotais;
    document.getElementById("rosas").textContent = '🌹'.repeat(mesesTotais);
}

// Exibe a data e hora do namoro no frontend
document.getElementById("data-namoro").textContent = formatarDataHora(namoroDataHora);

setInterval(calcularTempo, 1000); // Atualiza o tempo a cada segundo

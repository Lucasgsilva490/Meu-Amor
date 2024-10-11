const namoroDataHora = new Date("2024-06-12T20:43:00"); // Exemplo: 4 de Junho de 2024, 20:00

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
}

setInterval(calcularTempo, 1000); // Atualiza o tempo a cada segundo tempo a cada segundo

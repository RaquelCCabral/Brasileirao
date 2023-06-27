const url_campeonato = "https://api.api-futebol.com.br/v1/campeonatos/10";

const url = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela";
const options = {
    method: "GET",
    headers: {
        Authorization: "Bearer live_4640d6f346d94c8c76190fc14fc7a1"
    }
};

fetch(url_campeonato, options)
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        var h1 = document.getElementById("h1");
        h1.innerHTML = `<img src = "${data.logo}" height = "40" width = "40"/> ${data.edicao_atual.nome_popular} <img src = "${data.logo}" height = "40" width = "40"/>`;
        })
    .catch(error => console.error(error));

fetch(url, options)
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        var tbody = document.getElementById("tbody");

        for(var i = 0; i <= data.length;i++){
            tbody.innerHTML += `<tr id = "time${i+1}"><td id = "pos${i+1}"><b>${data[i].posicao}</b></td>
                                <td><img src = "${data[i].time.escudo}" height = "25" width = "25"/></td>
                                <td>${data[i].time.nome_popular}</td>
                                <td><b>${data[i].pontos}</b></td>
                                <td>${data[i].jogos}</td>
                                <td>${data[i].vitorias}</td>
                                <td>${data[i].empates}</td>
                                <td>${data[i].derrotas}</td>
                                <td>${data[i].gols_pro}</td>
                                <td>${data[i].gols_contra}</td>
                                <td>${data[i].saldo_gols}</td></tr>`
        }
    })
    .catch(error => console.error(error));
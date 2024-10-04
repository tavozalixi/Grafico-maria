const url = "assets/json/dados-fake-news.json";

async function visualizarInformacoes() {
  const res = await fetch(url);
  const dados = await res.json();
  const confiavel = (dados.Confiavel/1e6);


  const paragrafo = document.createElement('p')
  paragrafo.classList.add('grafico-container_texto')
  paragrafo.innerHTML = `De acordo com os dados obtidos, dentre as notícias compartilhadas, <span>${confiavel}</span> são confiáveis, enquanto <span>${dados.fake}</span> são falsas. 
  Também temos <span>${dados.satira}</span> notícias de sátira e <span>${dados["Viés extremo"]}</span> que apresentam viés extremo. Além disso, <span>${dados["Teoria da conspiração"]}</span> se destacam como teorias da conspiração, 
  enquanto <span>${dados["Notícias de ódio"]}</span> refletem conteúdos de ódio. O estado, por sua vez, não apresenta notícias. 
  A categoria de <span>${dados["Ciência Lixo"]}</span> demonstra a desinformação em ciência. Além disso, <span>${dados["Isca de clique"]}</span> são manipulativas, 
  e <span>${dados["Prossiga com cautela"]}</span> servem como aviso. Finalmente, <span>${dados.Político}</span> indicam notícias relacionados a política.`;
  const container = document.getElementById('graficos-container');
  container.appendChild(paragrafo)
}

visualizarInformacoes();

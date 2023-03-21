import "./main.css";

function Main() {
  return (
    <main>
      <h1 className="titulo">A sua doação importa</h1>
      <h2 className="sub-titulo">
        Até 3 vidas com 1 doação <br />
        Mais de 40.000 doações são necessárias todos os dias <br />
        Apenas 1,9% da população brasileira doa sangue.
        <br />
      </h2>
      <h2 className="sub-titulo">
        Incentivo à doação Houve uma redução na doação de sangue em todo o país
        desde a chegada da Covid-19, de acordo com os dados do Ministério da
        Saúde. Em 2019, foram 3.271.824 coletas de sangue no Brasil e, em 2020,
        2.958.665 por causa da menor circulação de pessoas provocada por conta
        do novo coronavírus. O ministério alerta que, embora tenha havyido
        redução das cirurgias eletivas no país, permanece diária a demanda de
        sangue por pessoas que têm doenças crônicas, fazem tratamento de câncer,
        sofrem acidentes e têm complicações em cirurgias e partos que causam
        hemorragias, por exemplo.
      </h2>
      <div className="area-botao">
        <button className="botao ">Quero Ajudar</button>
      </div>
    </main>
  );
}

export default Main;

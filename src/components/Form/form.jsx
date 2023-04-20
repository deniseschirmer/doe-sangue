import "./form.css";

import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  const array = [];

  const verify = () => {
    console.log(`Array aqui: ${array.length}`, array);
  };

  const saveForm = (e) => {
    var object = {
      nome: name,
      email: email,
      blood_type: tipo,
    };
    array.push(object);
    verify();
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulario");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="lista-doadores form">
        <h3 className="quero-doar__title">Entre na lista de doadores</h3>
        <input
          id="name"
          type="text"
          name="fname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
          className="lista-input"
        />
        <input
          id="email"
          type="email"
          name="fname"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="lista-input"
        />

        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          placeholder="Tipo sanguíneo"
          className="lista-input"
        />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="" disabled>
            Selecione Tipo Sanguíneo
          </option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB">AB</option>
          <option value="O+">O+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
        </select>
        <button
          type="submit"
          className="button-light"
          onClick={(e) => saveForm(e)}
        >
          Quero Ajudar
        </button>
      </form>
      <p>Lista de Doadores: {name.tipo}</p>
      <p>Tipo selecionado: {tipo}</p>
    </>
  );
}

export default Form;

import { useState } from "react";
import styles from "./styles.module.css";

export default function HomePage() {
  const [tarefas, setTarefas] = useState({
    aFazer: [],
    emAndamento: [],
    feito: [],
  });

  function entradas(lista) {
    const novaTarefa = {
      nome: prompt("Digite o nome da tarefa:"),
      prazo: prompt("Digite o prazo da tarefa:"),
      descricao: prompt("Digite a descrição da tarefa:"),
      responsavel: prompt("Digite o nome do responsável da tarefa:"),
    };

    if (
      novaTarefa.nome &&
      novaTarefa.prazo &&
      novaTarefa.descricao &&
      novaTarefa.responsavel
    ) {
      setTarefas({ ...tarefas, [lista]: [...tarefas[lista], novaTarefa] });
    }
  }

  return (
    <div id={styles.box}>
      <div id={styles.caixa}>
        <div id={styles.lista1}>
          <h1>A fazer</h1>
          <ul>
            {tarefas.aFazer.map((tarefa, index) => (
              <li id={styles.elementos1} key={index}>
                <h2>{tarefa.nome}</h2>
                <p>{tarefa.prazo}</p>
                <p>{tarefa.descricao}</p>
                <p>{tarefa.responsavel}</p>
              </li>
            ))}
          </ul>
          <button id={styles.primeirobotao} onClick={() => entradas("aFazer")}>
            +
          </button>
        </div>
        <div id={styles.lista2}>
          <h1>Em andamento</h1>
          <ul>
            {tarefas.emAndamento.map((tarefa, index) => (
              <li id={styles.elementos2} key={index}>
                <h2>{tarefa.nome}</h2>
                <p>{tarefa.prazo}</p>
                <p>{tarefa.descricao}</p>
                <p>{tarefa.responsavel}</p>
              </li>
            ))}
          </ul>
          <button
            id={styles.segundobotao}
            onClick={() => entradas("emAndamento")}
          >
            +
          </button>
        </div>
        <div id={styles.lista3}>
          <h1>Feito</h1>
          <ul>
            {tarefas.feito.map((tarefa, index) => (
              <li id={styles.elementos3} key={index}>
                <h2>{tarefa.nome}</h2>
                <p>{tarefa.prazo}</p>
                <p>{tarefa.descricao}</p>
                <p>{tarefa.responsavel}</p>
              </li>
            ))}
          </ul>
          <button id={styles.terceirobotao} onClick={() => entradas("feito")}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import styles from "./styles.module.css";

export default function HomePage() {
  const [Tarefa, setTarefa] = useState({
    nome: "",
    prazo: "",
    descricao: "",
    responsavel: "",
  });

  const [tarefasList, setTarefasList] = useState([]);

  function entradas() {
    const novaTarefa = {
      nome: prompt("Digite o nome da tarefa:"),
      prazo: prompt("Digite o prazo da tarefa:"),
      descricao: prompt("Digite a descrição da tarefa:"),
      responsavel: prompt("Digite o nome do responsável da tarefa:"),
    };

    setTarefa(novaTarefa);

    if (
      novaTarefa.nome &&
      novaTarefa.prazo &&
      novaTarefa.descricao &&
      novaTarefa.responsavel
    ) {
      setTarefasList([...tarefasList, novaTarefa]);
    }
  }

  return (
    <div id={styles.box}>
      <div id={styles.caixa}>
        <div id={styles.lista1}>
          <h1>A fazer</h1>
          <p>
            <br />
          </p>

          <div>
            <ul>
              {tarefasList.map((tarefa, index) => (
                <li className={styles.elementos} key={index}>
                  <h2>{tarefa.nome}</h2>
                  <p>{tarefa.prazo}</p>
                  <p>{tarefa.descricao}</p>
                  <p>{tarefa.responsavel}</p>
                </li>
              ))}
            </ul>
          </div>

          <button id={styles.primeirobotao} onClick={entradas}>
            +
          </button>
        </div>
        <div id={styles.lista2}>
          <h1>Em andamento</h1>
          <p>
            <br />
          </p>
          <button id={styles.segundobotao}>+</button>
        </div>
        <div id={styles.lista3}>
          <h1>Feito</h1>
          <p>
            <br />
          </p>
          <button id={styles.terceirobotao}>+</button>
        </div>
      </div>
    </div>
  );
}

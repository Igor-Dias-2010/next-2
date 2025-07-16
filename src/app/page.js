'use client';
// import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionar(e) {
    e.preventDefault();
    if (!tarefa.trim()) return;
    setTarefas([...tarefas, tarefa]);
    setTarefa("")
  }
  const remover = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }
  const editar = (index) => {
    const novaTarefa = prompt("Editar tarefa:", tarefas[index]);
    if (novaTarefa !== null && novaTarefa.trim() !== "") {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;
      setTarefas(novasTarefas)
    }
  };



  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={adicionar}>
        <input
          value={tarefa}
          type="text"
          placeholder="Digite uma tarefa..."
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button>adicionar</button>

      </form>
      <div>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <div className="div-btns">
                <button id="btns" onClick={() => editar(index)}>✏️</button>
                <button id="btns" onClick={() => remover(index)}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
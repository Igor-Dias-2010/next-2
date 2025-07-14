'use client';
// import Image from "next/image";
import react, { useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([""]);
  const [novatarefa, setNovatarefa] = useState("");

  function adicionar() {
    if (novatarefa.trim() === "") return;
    setTarefas([...tarefas, novatarefa]);
    setNovatarefa("")
  }




  return (
    <div>
      <h1>To Do List</h1>
      <input placeholder="Digite uma tarefa..." />
      <button onClick={adicionar}>adicionar</button>
      <div>
        {tarefas}
      </div>
    </div>
  );
}

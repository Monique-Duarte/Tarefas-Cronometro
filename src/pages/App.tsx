import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/list';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefas } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState <ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState <ITarefas> ();

  function selecionaTarefa(tarefaSelecinada: ITarefas) {
    setSelecionado(tarefaSelecinada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecinada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado= {selecionado} />
    </div>
  );
}

export default App;

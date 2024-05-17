import { HTMLInputTypeAttribute, useState } from 'react';

import Listar from '../components/Listar';
import Logo from '../components/Logo';

const FirstScreen = () => {
  const [tarefa, setTarefa] = useState('');

  const hendletarefa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarefa(event.target.value);
  };

  const hendleSave = () => {
    alert(tarefa);
  };

  return (
    <div className="container mx-auto  h-screen bg-neutral-800">
      <div className="relative h-30 bg-neutral-900 text-center flex flex-col justify-center">
        <Logo />
        <div className="absolute flex items-center justify-center gap-2 -bottom-5 mx-auto w-full">
          <input
            className="outline-indigo-400 rounded-md bg-neutral-700 p-2 w-64"
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={hendletarefa}
            value={tarefa}
          />
          <button
            className="rounded-md bg-sky-700 px-4 py-3 text-white"
            onClick={hendleSave}
          >
            <img src="public/icons/plus.png" alt="plus" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between py-4 pt-6 border-b border-slate-600">
          <a href="" className="text-sky-500 font-bold text-sm">
            Todas{' '}
            <span className="rounded-full px-2 bg-slate-700 font-medium text-white">
              0
            </span>
          </a>
          <a href="" className="text-sky-500 font-bold text-sm">
            Não cincluidas{' '}
            <span className="rounded-full px-2 bg-slate-700 font-medium text-white">
              0
            </span>
          </a>
          <a href="" className="font-bold text-indigo-400 text-sm">
            Concluidas{' '}
            <span className="rounded-full px-2 bg-slate-700 font-medium text-white">
              0
            </span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <img
          className="mx-auto m-4 mt-10 w-16"
          src="public/icons/list.png"
          alt="list icon"
        />
        <p className="text-gray-400 font-semibold text-sm">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-gray-400 text-sm">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
      <Listar></Listar>
    </div>
  );
};

export default FirstScreen;

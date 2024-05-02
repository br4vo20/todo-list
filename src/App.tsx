import './output.css';

import { useState } from 'react';

function App() {
  return (
    <>
      <div className="container mx-auto h-screen bg-neutral-800">
        <div className="relative h-30 bg-neutral-900 text-center flex flex-col justify-center">
          <img
            src="src/assets/icons/logo.png"
            alt=""
            className="mx-auto my-6 text-3xl font-bold text-sky-600 py-6"
          />
          <div className="absolute flex items-center justify-center gap-2 -bottom-5 mx-auto w-full">
            <input
              className="outline-indigo-400 rounded-md bg-neutral-700 p-2 w-64"
              type="text"
              placeholder="Adicione uma nova tarefa"
            />
            <button className="rounded-md bg-sky-700 px-4 py-3 text-white">
              <img src="src/assets/icons/plus.png" alt="plus" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between py-4 pt-6 border-b border-slate-600">
            <a href="" className="text-sky-500 font-bold text-sm">
              Criadas{' '}
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
            src="src/assets/icons/list.png"
            alt="list icon"
          />
          <p className="text-gray-400 font-semibold text-sm">
            Você ainda não tem tarefas cadastradas
          </p>
          <p className="text-gray-400 text-sm">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

import { ClipboardText } from "phosphor-react";

export function ToDo() {
  return (
    <div className="mt-24 flex justify-center items-center bg-[#1A1A1A]">
      <div className="w-736 border-white p-4 text-center bg-[#1A1A1A]">
        <header className="flex justify-between items-start h-10 border-b border-[#808080] pb-1">
          <div className="flex items-start gap-2">
            <p className="text-[#4EA8DE] font-inter font-bold text-sm mt-0 ">
              Tarefas criadas
            </p>
            <span className="text-[#D9D9D9] flex items-center justify-center  bg-[#333333] p-1 w-6 h-5 rounded-full">
          0
        </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#8284FA] font-inter font-bold text-sm mt-0">
              Concluídas
            </p>
            <span className="text-[#D9D9D9] flex items-center justify-center bg-[#333333] w-6 h-5 rounded-full">
          0
        </span>
          </div>
        </header>
        
        <div className="text-center mt-8">
            <ClipboardText className="text-[#808080] mx-auto" size={64}/>
      <p className="text-[#808080] font-inter font-bold text-base mt-3">
        Você ainda não tem tarefas cadastradas
      </p>
      <p className="text-[#808080] text-white font-inter text-base">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
      </div>
    </div>
  );
}

import {PlusCircle} from 'phosphor-react'
export function NewTask () {
    return (
        <div className="flex flex-1 items-center justify-center gap-2 transform -translate-y-1/2">
                <input type="text" placeholder="Adicione uma nova tarefa" className="flex border border-[#0D0D0D] bg-[#262626] rounded-lg p-2.5 w-638 text-[#F2F2F2] placeholder-[#808080]"/>
            <button type="submit"
             className="p-2.5 flex justify-center items-center gap-2 rounded-lg bg-[#1E6F9F] w-90 hover:bg-[#4EA8DE] text-[#F2F2F2] font-inter text-base">Criar <PlusCircle size={20} weight="bold"
            /></button>
        </div>
    )
}
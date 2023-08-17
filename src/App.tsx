import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { ToDo } from './components/ToDo'

export function App () {
  return (
    <div>
      <Header />
      <NewTask />
      <main className="bg-gray-600">
        <ToDo />

      </main>
    </div>
  )
}
import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

export function App () {
  return (
    <div>
      <Header />
      <NewTask />
      <main className="bg-gray-600">

      </main>
    </div>
  )
}
import './App.css'
import Todo from './components/Todo';

function App() {
 
  return (
    <>
      <div className="bg-blue-600 text-center">
        <h1 className="text-6xl py-4 text-white">To-do list</h1>
      </div>

      <section className="flex flex-wrap justify-around px-2 py-6 gap-y-4">
        <Todo text="Title 1"/>
        <Todo text="Title 2"/>
        <Todo text="Title 3"/>
        <Todo text="Title 4"/>
        <Todo text="Title 5"/>
        <Todo text="Title 6"/>
        <Todo text="Title 7"/>
        <Todo text="Title 8"/>
        <Todo text="Title 9"/>
      </section>
    </>
  )
}

export default App;
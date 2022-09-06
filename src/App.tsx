import {useState} from 'react'
import { Header, Search, Table, Modal} from "./components";



const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    console.log("teste")
  }
  return (
    <div className="App">
      <Header />
      <Search 
        placeholder="Busque um cliente" 
        onChange={handleChange} 
        checkboxtext="Somente agendamentos do dia atual"
      />
      <button onClick={() => setIsOpen(true)}>
        Criar Novo Agendamento
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Table data={[]}/>
    </div>
  );
}

export default App;

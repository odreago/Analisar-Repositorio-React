import { useState } from 'react'
import Perfil from './componentes/Perfil'
import ReposList from './componentes/ReposList'


function App() {
  const [userName, setUserName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const handleSearch = () => setUserName(inputValue)

  return (
    <div>
      <div className="bg-dark text-white py-5 text-center">
        {userName.length > 0 && <Perfil userName={userName} />}
        <div className="d-flex justify-content-center mt-3">
          <input
            className="form-control w-25 me-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nome de usuário do GitHub"
          />
          <button className="btn btn-light" onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      {userName.length > 0 && (
        <div className="container my-4">
          <ReposList userName={userName} />
        </div>
      )}
    </div>
  )
}

export default App
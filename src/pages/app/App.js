/*
  @AUTHOR: https://github.com/driicarvalho7

  Arquivo principal de configurações de rotas da aplicação
*/

//IMPORTS DOS ARQUIVOS QUE SERÃO EXIBIDOS NO SIDEBAR
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CadastroCli from '../CadastroCli/CadastroCli.js';
import ListaCli from '../ListaCli/ListaCli.js';
import Relatorios from '../Relatorios/Relatorios.js';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<CadastroCli />} />
          <Route path="/Lista" element={<ListaCli />} />
          <Route path="/Relatorio" element={<Relatorios />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

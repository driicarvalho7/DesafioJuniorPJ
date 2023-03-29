/*
  @AUTHOR: https://github.com/driicarvalho7

  Como a aplicação utiliza bootstrap, importei a biblioteca "Offcanvas".
  Está é responsável pelo Sidebar da aplicação.

  Ademais, utilizei bibliotecas como "react-router-dom", para o menu ser funcional;
  também utilizei a biblioteca "icons-material", para deixar a aplicação com icones mais descritivos.
*/

// IMPORTAÇÕES PARA FUNCIONAMENTO DA APLICAÇÃO
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidebar.css';

// IMPORTAÇÃO DOS ICONS UTILIZADOS
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Sidebar() {
  // VARIÁVEIS DE EXIBIÇÃO DO SIDEBAR
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <MenuOpenIcon />
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static" className="bgSidebar">
        <Offcanvas.Header className="bgHead" closeButton>
          <Offcanvas.Title> <p className='titleSidebar'> Administração Clientes </p> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bgBody'>
          <ul className='SidebarUL'>
            <li className='SidebarLI'>
                <Link to="/" className='linkSide'> <PersonAddIcon fontSize='large'/> Cadastro de clientes</Link>
            </li>
            <li className='SidebarLI'>
              <Link to="/Lista" className='linkSide'> <ContactsIcon fontSize='large'/> Listagem de clientes</Link>
            </li>
            <li className='SidebarLI'>
              <Link to="/Relatorio" className='linkSide'> <ContactPageIcon fontSize='large'/> Relatórios</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

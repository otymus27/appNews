import logo from "../../images/LogoBN.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, ImageLogo, InputSpace, Nav } from "../NavBar/NavbarStyled.jsx";


export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Pesquisar por um título de notícia" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo do Site de Noticias" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}



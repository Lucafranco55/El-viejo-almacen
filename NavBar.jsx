import CarWidget from "./CarWidget";
import { Menu, MenuButton, MenuList,MenuItem} from "@chakra-ui/react";
const NavBar = () => {
  return (
    <div>
      <h3>El Viejo Almacen-commerce</h3>
      <Menu>
        <MenuButton> Categorias</MenuButton>
        <MenuList>
          <MenuItem>Licores</MenuItem>
          <MenuItem>Vermouth</MenuItem>
          <MenuItem>Vinos</MenuItem>
        </MenuList>
      </Menu>
      <CarWidget />
    </div>
  );
};

export default NavBar;

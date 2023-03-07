import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer />
    </ChakraProvider>
  );
}

export default App
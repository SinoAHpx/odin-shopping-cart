import { Button, Card, CardBody, Center, Flex, Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Center width='100vw' height='100vh'>
        <Flex direction='column'>
          <Card width='60vw' height='auto'>
            <CardBody display='flex' gap='10px' flexDirection='column'>
              <Heading>Fired Programmer&#39;s Shop</Heading>
              <img draggable='false' src="https://picsum.photos/1200"/>
              <Button colorScheme="green" variant='solid'>Shop</Button>
            </CardBody>
          </Card>
      </Flex>
    </Center>
  );
}

export default App;

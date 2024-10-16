import {
  Heading,
  Center,
  SimpleGrid,
  Box,
  Flex,
  Button,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import Merchandies from "./Merchandies";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [merchandiesItems, setMerchandiesItems] = useState(null);

  const { onOpen, isOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  let cancel = false;
  const handleAddCartClick = (item) => {
    console.log(item)
  };
  useEffect(() => {
    if (cancel) {
      return;
    }
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((r) => {
        let merchandiesList = r.map((i) => {
          return <Merchandies
            key={i.id}
            info={i}
            onClick={() => handleAddCartClick(i)}
          />;
        });

        setMerchandiesItems(merchandiesList);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => (cancel = true);
  }, []);

  return (
    <Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">To purchase</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        position="fixed"
        width="100%"
        top="0"
        zIndex="100"
        bgColor="#499560"
        gap="10px"
        padding="2vh"
      >
        <Heading color="white">Please dont fire me</Heading>
        <Spacer />
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={onOpen} colorScheme="red">
          View cart
        </Button>
      </Flex>

      <Center margin="10vh">
        <SimpleGrid columns="2" spacing="5vw">
          {merchandiesItems}
        </SimpleGrid>
      </Center>
    </Box>
  );
}

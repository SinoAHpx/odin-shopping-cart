import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [imgUrl, setImgUrl] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate()
  let cancel = false

  useEffect(() => {
    if (cancel) {
      return
    }
    fetch("https://picsum.photos/1200")
      .then((r) => r.blob())
      .then((b) => {
        const url = URL.createObjectURL(b);
        setImgUrl(url);
      })
      .finally(() => {
        setIsLoaded(true);
      });

    return () => cancel = true
  }, []);

  return (
    <Center width="100vw" height="100vh">
      <Flex direction="column">
        <Card width="40vw" height="auto">
          <CardBody display="flex" gap="10px" flexDirection="column">
            <Heading>Fired Programmer&#39;s Shop</Heading>

            {isLoaded ? (
              <img src={imgUrl} style={{ height:'20vw', objectFit: "cover" }} />
            ) : (
              <Skeleton height="20vw" />
            )}
            <Button onClick={() => {
              navigate('/shop')
            }} colorScheme="green" variant="solid">
              Shop
            </Button>
          </CardBody>
        </Card>
      </Flex>
    </Center>
  );
}

export default App;

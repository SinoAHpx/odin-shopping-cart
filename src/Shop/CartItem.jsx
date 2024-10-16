import { Card, CardBody, Heading } from "@chakra-ui/react";

export default function CartItem({info}){
    return <Card>
    <CardBody>
        <Heading size='sm'>{info.title}</Heading>
    </CardBody>
</Card>
}
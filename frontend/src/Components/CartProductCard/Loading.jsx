
import { Flex ,Heading} from "@chakra-ui/react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
 
    

    return (
        <Flex justifyContent="center" alignItems="center" gap="10px" > 
        <Heading fontSize="18px" >Loading</Heading>    
      <Flex gap="8px">
        <Spinner animation="grow" size="sm" variant="info" />
        <Spinner animation="grow" size="sm" variant="info" />
        <Spinner animation="grow" size="sm" variant="info"  />
        <Spinner animation="grow" size="sm" variant="info" />
      </Flex></Flex>
    );
}
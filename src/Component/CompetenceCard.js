import React from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Flex,
  Divider
} from '@chakra-ui/react';
import "../style.css";
import Rubrique from './Rubrique';

const CompetenceCard= ({title, descComp, op1, op2, op3, descNiv}) => {
  return (
    
      <Flex textAlign="center" backgroundColor={"black"} p={5} flexDir={"column"} justifyContent={"center"} borderRadius={10} borderColor={'#838383'} opacity={1} borderWidth={2} role='group' _hover={{borderColor: "#c7ffc5"}}>
        <Text fontSize={"3xl"}  pb={5}>{title}</Text>
        <Text display={"none"} _groupHover={{display: "flex"}} fontSize={"md"}>{descComp}</Text>
        <Box py={5}>
          <Divider orientation='horizontal' colorScheme='#1C3A48' opacity={"1"} />
        </Box>
        <Text > Mon niveau :</Text>
        <Flex justifyContent={"space-between"} px={16} py={5}>
            <Image src={"/image/fleur11.png"} width={"30%"} opacity={op1} />
            <Image src={"/image/fleur11.png"} width={"30%"} opacity={op2}/>
            <Image src={"/image/fleur11.png"} width={"30%"} opacity={op3}/>
        </Flex>
        <Text display={"none"} _groupHover={{display: "flex"}} >{descNiv}</Text>
      </Flex>
  );
}

export default CompetenceCard;
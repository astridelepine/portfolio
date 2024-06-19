import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import "../style.css";

const ProjetCard= ({image, nom, desc, techno}) => {
    const [isHover, setIsHover] = useState(false)

  return (
    <Flex borderRadius={10} boxShadow={"0px 0px 60px 7px rgba(255,227,197,0.75)"} background={`url(${image}) center/cover no-repeat`} onMouseOver={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} width={300} height={200} pos={"relative"} backgroundColor={"white"}>
        {isHover &&
            <Flex flexDir={"column"} justifyContent={"center"} pos={"absolute"} backgroundColor={'rgb(0,0,0,0.5)'} width={"100%"} height={"100%"} px={2}>
                <Text fontWeight={'bold'}>{nom}</Text>
                <Text fontWeight={'semibold'}>{desc}</Text>
                <Text textColor={"#c7ffc5"}fontWeight={'semibold'}  >{techno}</Text>
            </Flex>
        }
    </Flex>
  );
}

export default ProjetCard;
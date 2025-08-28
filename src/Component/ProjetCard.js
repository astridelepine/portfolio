import React, { useState } from "react";
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
} from "@chakra-ui/react";
import "../style.css";

const ProjetCard = ({ image, nom, desc, techno }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Flex
      cursor={"pointer"}
      borderRadius={10}
      background={`url(${image}) center/cover no-repeat`}
      role="group"
      width={400}
      height={300}
      pos={"relative"}
      backgroundColor={"#FFD978"}
    >
      <Flex
        transition={"all .3s"}
        flexDir={"column"}
        justifyContent={"center"}
        pos={"absolute"}
        backgroundColor={"rgb(255,201,94)"}
        width={"100%"}
        height={"100%"}
        px={2}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        className="apparitionfleur"
        borderRadius={10}
      >
        <Text color={"black"} fontWeight={"bold"}>
          {nom}
        </Text>
        <Text color={"black"} fontWeight={"medium"}>
          {desc}
        </Text>
        <Text color={"black"} fontWeight={"semibold"}>
          {techno}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProjetCard;

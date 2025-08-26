import React from "react";

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
  Image,
} from "@chakra-ui/react";
import Rubrique from "./Rubrique";

import "../style.css";
const Infos = () => {
  return (
    <Box
      textColor={"black"}
      textAlign="center"
      fontSize="xl"
      backgroundColor={"#FFFFF0"}
      width={"100%"}
      minHeight={"100vh"}
      pt={20}
    >
      <Rubrique
        srcImage={"/image/image-removebg-preview(6).png"}
        color={"#FF82C5"}
        title={"MES INFOS"}
      />
      <Flex p={20} justifyContent={"center"} gap={32}>
        <Box cursor={"pointer"}>
          <a href="/CV_AstridDelepine.pdf" download={"Cv_AstridDelepine.pdf"}>
            <Image width={402} src="/image/cv.png" />
          </a>
        </Box>
        <Flex flexDir={"column"}>
          <Text fontSize={"3xl"}>Retrouvez-moi sur : </Text>
          <Flex alignItems={"center"}>
            <Link href="https://www.linkedin.com/in/astrid-del%C3%A9pine-0a3b29250/">
              <Image w={32} src="/image/linkdin.webp" />
            </Link>
            <Link href="https://github.com/astridelepine">
              <Image w={44} src="/image/github.png" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Infos;

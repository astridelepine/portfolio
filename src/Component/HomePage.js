import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../style.css";
import Fleurs from "./fleurs";

const HomePage = () => {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      backgroundColor={"#FFFFF0"}
      width={"100vw"}
    >
      <Grid minH="100vh" p={3}>
        <Flex fontFamily={"Playwrite"} justifyContent={"flex-end"} zIndex={20}>
          <Link to={"/projets"}>
            <Text
              pr={4}
              color={"black"}
              _hover={{ color: "#FFA500", fontWeight: "bold" }}
            >
              projets
            </Text>
          </Link>
          <Link to={"/competences"}>
            <Text
              pr={4}
              color={"black"}
              _hover={{ color: "#1FA055", fontWeight: "bold" }}
            >
              competences
            </Text>
          </Link>
          <Link to={"/alternance"}>
            <Text
              pr={4}
              color={"black"}
              _hover={{ color: "#667AFF", fontWeight: "bold" }}
            >
              experiences pros
            </Text>
          </Link>
          <Link to={"/passions"}>
            <Text
              pr={4}
              color={"black"}
              _hover={{ color: "#BD33A4", fontWeight: "bold" }}
            >
              passions
            </Text>
          </Link>
          <Link to={"/infos"}>
            <Text
              pr={4}
              color={"black"}
              _hover={{ color: "#FF82C5", fontWeight: "bold" }}
            >
              infos
            </Text>
          </Link>
        </Flex>
        <Text
          fontSize={"6xl"}
          color={"black"}
          fontWeight={"bold"}
          fontFamily={"Playwrite"}
          width={500}
          ml={80}
          mt={200}
          className="slide"
        >
          Bienvenue sur mon Portfolio{" "}
        </Text>
        <Flex width={"100%"} justifyContent={"flex-end"} pr={200}>
          <Text
            color={"black"}
            width={400}
            textAlign={"left"}
            border={"dashed 2px"}
            height={"fit-content"}
            padding={"20px"}
            borderRadius={"10px"}
          >
            Saluuut, Je m'appelle Astrid et je suis étudiante en BUT
            informatique. Dans ce portfolio je vous fais part de mes projets et
            compétence informatiques mais aussi de mes autres centres d'interêts
            !
          </Text>
        </Flex>
        <Box width={"100%"}>
          <Fleurs />
        </Box>
      </Grid>
    </Box>
  );
};

export default HomePage;

/** @format */

import {
  Box,
  Flex,
  Grid,
  Input,
  InputGroup,
  Text,
  Image,
} from "@chakra-ui/react";
import { GrDocumentPdf } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { useDarkMode } from "../../hooks/use-dark-mode-provider/use-dark-mode";
import GridcardsInner from "../../components/grid-cards-inner";
import SideCheckbox from "../../components/side-check-box";
import { assetImages } from "../../constants/assets";
import { IoIosLink } from "react-icons/io";

const Resources = () => {
  const { isDark } = useDarkMode();

  return (
    <Box
      as={"section"}
      fontFamily={"Poppins"}
      backgroundColor={isDark ? "black" : ""}
      paddingTop={"40px"}
      paddingBottom={{ base: "90px", lg: "120px" }}
    >
      <Box m={"auto"} marginTop={{ base: "10", lg: "20" }} maxWidth={"1250px"}>
        <Box margin={"auto"} maxWidth={"750px"}>
          <Text
            color={isDark ? "white" : "#2C3237"}
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize={{ base: "40px", lg: "52px" }}
          >
            Resources
          </Text>
          <Text
            maxW={"640px"}
            margin={"auto"}
            width={{ base: "290px", lg: "100%" }}
            marginTop={{ lg: "3px" }}
            textAlign={"center"}
            color={isDark ? "white" : "#2C3237"}
            fontFamily={"Inter"}
            fontWeight={"normal"}
            fontSize={{ base: "15px", lg: "18px" }}
          >
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
            vitae congue
          </Text>
          <InputGroup
            mx={"auto"}
            display={"flex"}
            alignItems={"center"}
            width={{ md: "80%", base: "100%" }}
            marginTop={{ base: "8", lg: "10" }}
            px={"16px"}
            startElement={
              <Box px={"14px"}>
                <LuSearch />
              </Box>
            }
          >
            <Input
              _focus={{
                outline: "none",
              }}
              placeholder="Search by title or keywords"
              fontFamily={"Inter"}
              fontSize={{ base: "16px", lg: "14px" }}
              fontWeight={"normal"}
              color={isDark ? "white" : "#4F4F4F"}
            />
          </InputGroup>
        </Box>
        <Box position={"relative"} marginTop={{ base: "70px", lg: "20px" }}>
          <Flex
            alignItems={"center "}
            justify={"center"}
            gap={4}
            backgroundColor={"#F2F2F2"}
            color={"#3F3F3F"}
            position={"absolute"}
            w={"100%"}
            left={0}
            right={0}
            height={10}
            display={{ base: "flex", lg: "none" }}
          >
            <IoFilterSharp
              color={"#2C3237"}
              style={{ fontSize: "25px", fontWeight: "bolder" }}
            />
            <Text
              color={"#2C3237"}
              fontWeight={"medium"}
              fontFamily={"Poppins"}
            >
              Show Filters
            </Text>
          </Flex>
        </Box>
        <Text
          display={{ base: "none", lg: "block" }}
          paddingLeft={5}
          m={"auto"}
          width={{ base: "85%", xl: "90%" }}
          marginTop={20}
          fontFamily={"Inter"}
          fontWeight={"bold"}
          color={isDark ? "white" : "#3F3F3F"}
        >
          Filters
        </Text>
        <Box m={"auto"} width={{ base: "85%", xl: "90%" }}>
          <Flex
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
            gap={10}
            marginTop={{ base: "120px", md: "110px", lg: "20px" }}
            position={"relative"}
          >
            <Box
              display={{ base: "none", md: "block" }}
              width={368}
              padding={5}
              borderTopWidth={1}
              borderTopColor={"#E0E0E0"}
            >
              <SideCheckbox />
            </Box>

            <Box
              margin={"auto"}
              marginTop={{ base: "35px", md: "50px", lg: "0" }}
              width={{ base: "100%" }}
            >
              <Grid
                templateColumns={{ lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
                placeItems={{ base: "center" }}
                width={"100%"}
                gap={4}
              >
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    icon={IoIosLink}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Sense of Appreciation"
                  />
                  <Image
                    src={assetImages.Bg3}
                    position={"absolute"}
                    right={0}
                    top={0}
                    borderTopRightRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    icon={GoVideo}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Secure Base"
                  />
                  <Image
                    src={assetImages.Bg4}
                    position={"absolute"}
                    left={0}
                    top={0}
                    borderTopRightRadius={20}
                    borderTopLeftRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    icon={IoIosLink}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Learning Organisation"
                  />
                  <Image
                    src={assetImages.Bg5}
                    position={"absolute"}
                    left={0}
                    top={0}
                    borderTopRightRadius={20}
                    borderTopLeftRadius={20}
                    zIndex={1}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    icon={GoVideo}
                    title="Taking stock of mental health in your workplace"
                    info="Sample Topic"
                    filterCheck="Mission and Vision"
                  />
                  <Image
                    src={assetImages.Bg6}
                    position={"absolute"}
                    right={0}
                    top={0}
                    borderTopRightRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    icon={GrDocumentPdf}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Learning Organisation"
                  />
                  <Image
                    src={assetImages.Bg5}
                    position={"absolute"}
                    left={0}
                    top={0}
                    borderTopRightRadius={20}
                    borderTopLeftRadius={20}
                    zIndex={1}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    icon={GrDocumentPdf}
                    title="Taking stock of mental health in your workplace"
                    info="Sample Topic"
                    filterCheck="Mission and Vision"
                  />
                  <Image
                    src={assetImages.Bg6}
                    position={"absolute"}
                    right={0}
                    top={0}
                    borderTopRightRadius={20}
                  />
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Resources;

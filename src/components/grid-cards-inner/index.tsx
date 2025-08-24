/** @format */

import { Box, Button, Card } from "@chakra-ui/react";
import { useDarkMode } from "../../hooks/use-dark-mode-provider/use-dark-mode";

const GridcardsInner = ({
  icon,
  title,
  info,
  filterCheck,
}: GridcardsInnerProps) => {
  const { isDark } = useDarkMode();
  return (
    <Card.Root
      bg={isDark ? "black" : "white"}
      shadowColor={"#F2F2F2"}
      rounded={20}
      height={{ md: 290, base: "fit-content" }}
      px={"16px"}
      pb="16px"
      border={isDark ? "" : "none"}
      boxShadow="sm"
      borderWidth={"0.5px"}
      borderColor={"white"}
    >
      <Card.Body>
        {icon && (
          <Box
            as={icon}
            color={isDark ? "white" : "black"}
            boxSize="6"
            mt="60px"
            zIndex={20}
          />
        )}

        <Card.Title
          marginTop={"40px"}
          fontFamily={"Poppins"}
          fontWeight={"semibold"}
          fontSize={{ base: "22px", lg: "16px" }}
          color={isDark ? "white" : "#2C3237"}
          zIndex={1}
        >
          {title}
        </Card.Title>
        <Card.Description
          marginTop={4}
          fontFamily={"Poppins"}
          fontWeight={"normal"}
          color={isDark ? "white" : "#828282"}
        >
          {info}
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button
          fontWeight={"medium"}
          fontSize={"12px"}
          height={8}
          color={"#222222"}
          backgroundColor={"#F2F2F2"}
          rounded={20}
          mt={{ md: 0, base: 10 }}
        >
          {filterCheck}
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default GridcardsInner;

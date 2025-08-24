/** @format */

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useDarkMode } from "../../hooks/use-dark-mode-provider/use-dark-mode";
import CheckBoxRe from "../check-box";
import { checkboxSections } from "../../constants/data";

const SideCheckbox = () => {
  const { isDark } = useDarkMode();

  return (
    <Flex flexDir="column" gapY={8} position="sticky" top="100px">
      {checkboxSections.map((section, index) => (
        <Box key={index}>
          <Text
            mb="4"
            color={isDark ? "white" : "#3F3F3F"}
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="bold"
            fontFamily="Inter"
          >
            {section.title}
          </Text>
          <VStack align="start" gap={4}>
            {section.items.map((label, idx) => (
              <CheckBoxRe key={idx} label={label} />
            ))}
          </VStack>
        </Box>
      ))}
    </Flex>
  );
};

export default SideCheckbox;

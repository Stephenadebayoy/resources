/** @format */

import { Checkbox } from "@chakra-ui/react";
import { useDarkMode } from "../../hooks/use-dark-mode-provider/use-dark-mode";

const CheckBoxRe = ({ label }: { label: string }) => {
  const { isDark } = useDarkMode();
  return (
    <>
      <Checkbox.Root variant={"solid"}>
        <Checkbox.HiddenInput />
        <Checkbox.Control _checked={{ bg: "#3F3F3F" }} />
        <Checkbox.Label
          fontSize={"14px"}
          paddingLeft={{ lg: 2 }}
          fontWeight={"normal"}
          color={isDark ? "white" : "#3F3F3F"}
          fontFamily={"Inter"}
        >
          {label}
        </Checkbox.Label>
      </Checkbox.Root>
    </>
  );
};

export default CheckBoxRe;

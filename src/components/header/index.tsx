/** @format */

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Flex, Box, Text, Switch, Link, Image } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useDarkMode } from "../../hooks/use-dark-mode-provider/use-dark-mode";
import { assetImages } from "../../constants/assets";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { isDark, toggleTheme } = useDarkMode();

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const pages = [
    { page: "Dashboard", path: "/dashboard" },
    { page: "Resources", path: "/resources" },
    { page: "Toolkit", path: "/toolkit" },
  ];

  const location = useLocation();
  console.log("location.pathname", location.pathname);

  return (
    <Box
      as="section"
      fontFamily="Poppins"
      height="60px"
      boxShadow="xs"
      position={"fixed"}
      left={0}
      top={0}
      right={0}
      backgroundColor={isDark ? "black" : "white"}
      zIndex={30}
      display="flex"
      alignItems="centre"
    >
      <Flex
        width={"90%"}
        maxWidth={"1280px"}
        m="auto"
        display="flex"
        alignItems="items-center"
        justifyContent="space-between"
      >
        <Flex alignItems="Center" gap={10}>
          <Flex gap={2} alignItems="center">
            <Image
              src={assetImages.Logo}
              alt="Logo"
              height={{ base: "28px", lg: "30px" }}
              width={{ base: "28px", lg: "30px" }}
              objectFit={"contain"}
            />
            <Text
              color={isDark ? "white" : "#404040"}
              fontFamily="Inter"
              fontWeight="extrabold"
              fontSize={{ base: "18px", md: "23px" }}
            >
              LOGO
            </Text>
          </Flex>
          <Flex gap={8} display={{ base: "none", lg: "flex" }}>
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Box key={page.page} position="relative">
                  <Link
                    key={page.path}
                    href={page.path}
                    _focusVisible={{
                      boxShadow: "none",
                      border: "none",
                      focusRing: "none",
                      borderBottom: "none",
                      ring: "0px",
                      ringColor: "none",
                    }}
                    color={isDark ? "white" : "#2C3237"}
                    mr={4}
                    _hover={{
                      boxShadow: "none",
                      border: "none",
                      focusRing: "none",
                      borderBottom: "none",
                      ring: "0px",
                      ringColor: "none",
                    }}
                    borderBottom={isActive ? "2px solid #314EF9" : "0"}
                    pb={isActive ? "1" : "0"}
                    fontSize={"14px"}
                  >
                    {page.page}
                  </Link>
                </Box>
              );
            })}
          </Flex>
        </Flex>
        <Flex gap={{ base: "10px", lg: "15px" }} alignItems="center">
          <Switch.Root>
            <Switch.HiddenInput />

            <Switch.Control
              onClick={toggleTheme}
              bg="#314EF9"
              _checked={{ bg: isDark ? "#314EF9" : "black" }}
            />
            <Switch.Label
              fontFamily="Poppins"
              fontWeight="semibold"
              fontSize="14px"
              display={{ base: "none", lg: "block" }}
              color={isDark ? "white" : "#2C3237"}
            >
              Switch to Employee
            </Switch.Label>
          </Switch.Root>
          <Box borderLeftWidth="2px" borderColor="#E4E4E4" height="24px" />
          <Flex gap={2}>
            <Box
              fontFamily="Poppins"
              fontWeight="extrabold"
              fontSize="12px"
              backgroundColor="#17E4A1"
              height="33px"
              width="33px"
              borderRadius={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              JA
            </Box>
            <Box
              alignItems="center"
              gap={1}
              fontFamily="Poppins"
              color={isDark ? "white" : "#525252"}
              fontSize="16px"
              fontWeight="semibold"
              display={{ base: "none", lg: "flex" }}
              cursor="pointer"
            >
              Jonathan
              <Box as="span" cursor={"pointer"}>
                <IoChevronDown color={isDark ? "white" : "#525252"} />{" "}
              </Box>
            </Box>
          </Flex>
          <Flex display={{ lg: "none" }} cursor="pointer" onClick={handleNav}>
            <Box
              zIndex={30}
              position={"relative"}
              fontSize={30}
              color={isDark ? "white" : "#3C3C3C"}
            >
              {!openNav ? <IoIosMenu /> : <MdOutlineClose color="#3C3C3C" />}
            </Box>
          </Flex>
        </Flex>
        <Box
          onClick={handleNav}
          height={200}
          paddingTop={10}
          transition="transform ease-in-out 0.3s"
          pos="fixed"
          left={0}
          right={0}
          top={0}
          backgroundColor="white"
          shadow={"sm"}
          flexDirection={"column"}
          display={{ base: "flex", lg: "none" }}
          transform={openNav ? "translateY(0)" : "translateY(-200px)"}
        >
          {pages.map((page) => (
            <a
              key={page.path}
              href={page.path}
              color={isDark ? "white" : "#2C3237"}
              style={{ padding: 10 }}
            >
              {page.page}
            </a>
          ))}
        </Box>
        {openNav && (
          <Box
            onClick={handleNav}
            position={"fixed"}
            left={0}
            right={0}
            top={200}
            height={"100%"}
            backgroundColor={"transparent"}
            zIndex={40}
          ></Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;

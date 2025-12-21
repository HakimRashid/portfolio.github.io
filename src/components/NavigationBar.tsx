import { VStack, Flex, Text, Button, Box } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";

interface PageLayoutsProps {
  children: React.ReactNode;
}

const NavigationBar = ({ children }: PageLayoutsProps) => {
  const color = useColorModeValue("grey.300", "gray.800");
  const { pathname } = useLocation();

  const menuItems = [
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Resume", link: "/resume" },
    { label: "Skills & Intrests", link: "/description" },
  ];

  return (
    <VStack overflowX={"hidden"} h={"full"}>
      <Flex w={"full"} px={5} animation="fade-in 1s" alignItems={"center"}>
        <Text
          color="rgba(252, 182, 59, 0.87)"
          w={"full"}
          fontFamily={"Brush Script MT"}
          fontSize={"8xl"}
        >
          Hakim Rashid
        </Text>

        <Flex justifyContent={"flex-end"} w="full" gap={2} p={3}>
          <ColorModeButton />
          {menuItems.map((items) => (
            <VStack key={items.label}>
              {pathname === items.link && (
                <Box
                  position={"absolute"}
                  borderRadius={100}
                  borderColor="rgba(252, 182, 59, 0.87)"
                  borderWidth={4}
                />
              )}
              <RouterLink key={items.label} to={items.link}>
                <Button variant={"ghost"}>{items.label}</Button>
              </RouterLink>
            </VStack>
          ))}
        </Flex>
      </Flex>
      <Box
        borderTopRadius={50}
        borderTopColor={color}
        borderTopWidth={5}
        w="full"
        p={5}
      >
        {children}
      </Box>
    </VStack>
  );
};

export default NavigationBar;

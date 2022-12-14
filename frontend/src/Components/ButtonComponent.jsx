import { Button } from "@chakra-ui/react";

export default function ButtonComponent({ Title, txtColor, bgColor, icon, buttonColor }) {
  return (
    <Button
      mt="15px"
      colorScheme={buttonColor}
      _hover={{ backgroundColor: bgColor, color: txtColor }}
      leftIcon={icon}
      size={["xs", "sm", "md", "lg"]}
    >
      {Title} 
    </Button>
  );
}

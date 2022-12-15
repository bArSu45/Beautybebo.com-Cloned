import { Button } from "@chakra-ui/react";

export default function ButtonComponent({
  Title,
  txtColor,
  bgColor,
  icon,
  buttonColor,
  handleClick,
  size
}) {
  return (
    <Button
      mt="15px"
      colorScheme={buttonColor}
      _hover={{ backgroundColor: bgColor, color: txtColor }}
      leftIcon={icon}
      size={size ? size : ["xs", "sm", "md", "lg"]}
      onClick={handleClick}
    >
      {Title}
    </Button>
  );
}

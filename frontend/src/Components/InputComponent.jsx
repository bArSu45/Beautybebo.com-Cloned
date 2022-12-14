import { Input } from "@chakra-ui/react";

export default function InputComponent({
  handleFunction,
  name,
  type,
  value,
  width,
  placeholder,
}) {
  return (
    <Input
      mt="5px"
      name={name}
      type={type}
      value={value}
      _hover={{ border: "2px solid pink" }}
      focusBorderColor="pink.400"
      placeholder={placeholder}
      w={width}
      onChange={handleFunction}
    />
  );
}

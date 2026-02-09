
import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={2}>
        
      <Switch
        size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />

       {colorMode === "dark" ? <FaMoon size={15} /> : <FaSun size={17} />}
     

    </HStack>
  );
}

export default ToggleSwitch

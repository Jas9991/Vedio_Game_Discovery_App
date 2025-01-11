import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/jas13.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        borderRadius={10}
        overflow="hidden"
        src={logo}
        boxSize="60px"
        flexShrink="0"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/jas13.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <div>
        <HStack>
          <Image
            borderRadius={10}
            overflow="hidden"
            src={logo}
            boxSize="60px"
          />
          <Text color={"grey"}>
            Vedio Games Discovery Web App , just like Airbnb is for finding
            rooms , this App is for finding games by Genres or by Platforms.{" "}
          </Text>
        </HStack>
      </div>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

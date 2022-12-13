import ExcelToJson from "./components/Reader";
import {
  FlexBox,
  FullScreen,
  AnimatedProgress,
  Slide,
  Deck,
  Box,
  Heading,
  Appear,
  Text,
  Image,
} from "spectacle";
import Greetings from "./components/slides/Greetings";
import Thanks from "./components/slides/Thanks";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);
function App() {
  return (
    <Deck theme={theme} template={template}>
      <Greetings />
      <Slide
        transition={{
          from: {
            transform: "scale(0.5) rotate(45deg)",
            opacity: 0,
          },
          enter: {
            transform: "scale(1) rotate(0)",
            opacity: 1,
          },
          leave: {
            transform: "scale(0.2) rotate(315deg)",
            opacity: 0,
          },
        }}
      >
        <FlexBox>
          {" "}
          <Image
            src="https://cdn2.iconfinder.com/data/icons/business-and-marketing-23/64/marketing_target_audience_business-256.png"
            width={"200px"}
          />
          <Heading>Let's compare big audiences</Heading>
        </FlexBox>

        <Appear>
          <FlexBox justifyContent={"flex-start"}>
            <Text>Mobile and Web devices</Text>
            <Image
              src="https://cdn0.iconfinder.com/data/icons/seo-and-developement-hexagone/128/24-256.png"
              width={"100px"}
            />
          </FlexBox>
        </Appear>
        <Appear>
          <FlexBox justifyContent={"flex-start"}>
            <Text>Gender</Text>
            <Image
              src="https://cdn3.iconfinder.com/data/icons/miscellaneous-72/48/gender-male-female-heterosexual-256.png"
              width={"200px"}
            />
          </FlexBox>
        </Appear>
        <Appear>
          <FlexBox justifyContent={"flex-start"}>
            {" "}
            <Text>College students</Text>
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/college-students-preparing-for-examination-5204934-4345983.png"
              width={"300px"}
            />
          </FlexBox>
        </Appear>
      </Slide>
      <ExcelToJson />
      <Thanks />
    </Deck>
  );
}

export default App;

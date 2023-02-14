import {Title, TitleHeading, TitleSubHeading} from "./styled";

const Header = ({header, subHeader}) => (
  <Title>
    <TitleHeading>{header}</TitleHeading>
    <TitleSubHeading>{subHeader}</TitleSubHeading>
  </Title>
);

export default Header;

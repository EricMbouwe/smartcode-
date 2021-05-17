import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <AdsBar>
        <Logo>Blog Gem</Logo>
        <Ads>some ads here</Ads>
      </AdsBar>

      <HeaderLinks>
        <Links>
          <li>
            <a href="#">Home</a>{' '}
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="">Single Post</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </Links>
        <SearchInput placeholder="Search..." />
      </HeaderLinks>
      
    </Container>
  );
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const AdsBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLinks = styled.div`
  display: flex;
  height: 50px;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 25px;
`;

const Ads = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
`;

const Links = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-self: center;
  flex: 1;
  
  li {
    font-size: 15px;
    margin-right: 15px;
  }
`;

const SearchInput = styled.input`
  border: 1px solid gray;
  width: 25%;
  padding: 15px;
`;

export default Header;

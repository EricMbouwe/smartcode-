import styled from 'styled-components';

function Hero() {
  return (
    <Container>
      <MainImage>
        <TextContent>
          <div>author</div>
          <div>description</div>
          <ActionButtons>
            <button>
              <img src="" alt="like-icon" />
              <span>665</span>
            </button>
            <button>
              <img src="" alt="comment-icon" />
              <span>52</span>
            </button>
          </ActionButtons>
        </TextContent>
      </MainImage>
      <SideImages>
        <Wrap>
          <TextContent>
            <div>author</div>
            <div>description</div>
            <ActionButtons>
              <button>
                <img src="" alt="like-icon" />
                <span>665</span>
              </button>
              <button>
                <img src="" alt="comment-icon" />
                <span>52</span>
              </button>
            </ActionButtons>
          </TextContent>
        </Wrap>
        <Wrap>
          <TextContent>
            <div>author</div>
            <div>description</div>
            <ActionButtons>
              <button>
                <img src="" alt="like-icon" />
                <span>665</span>
              </button>
              <button>
                <img src="" alt="comment-icon" />
                <span>52</span>
              </button>
            </ActionButtons>
          </TextContent>
        </Wrap>
      </SideImages>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;

const MainImage = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 30px;
  background-color: #000;
  opacity: 0.95;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url('https://unsplash.it/1920/1080');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8;
    z-index: -1;
  }
`;

const SideImages = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Wrap = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 30px;
  background-color: #000;
  opacity: 0.95;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url('https://unsplash.it/1920/1080');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8;
    z-index: -1;
  }
`;

const TextContent = styled.div`
  font-size: 18px;
  color: white;
  padding-bottom: 20px;
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default Hero;

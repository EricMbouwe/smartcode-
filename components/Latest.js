import Image from 'next/image';
import styled from 'styled-components';

function Latest() {
  return (
    <Container>
      <TitleBar>
        <h1>
          LATEST BLOG POST <span>POPULAR POST</span>
        </h1>
        <InputSearch placeholder="Search..." />
      </TitleBar>
      <InlinePosts>
        <InlinePost>
          <PostImage>
            <Image
              src="https://unsplash.it/1920/1080"
              alt="some alt"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </PostImage>

          <PostText>
            <PostTicket>Traveling</PostTicket>
            <div>date</div>
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
          </PostText>
        </InlinePost>

        <InlinePost>
          <PostImage>
            <Image
              src="https://unsplash.it/1920/1080"
              alt="some alt"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </PostImage>

          <PostText>
            <PostTicket>Traveling</PostTicket>
            <div>date</div>
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
          </PostText>
        </InlinePost>

        <InlinePost>
          <PostImage>
            <Image
              src="https://unsplash.it/1920/1080"
              alt="some alt"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </PostImage>

          <PostText>
            <PostTicket>Traveling</PostTicket>
            <div>date</div>
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
          </PostText>
        </InlinePost>
      </InlinePosts>

      <GridPosts>
        <GridPost>
          <PostImage>
            <Image
              src="https://unsplash.it/1920/1080"
              alt="some alt"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </PostImage>
          <PostText>
            <PostTicket>Flowers</PostTicket>
            <div>date</div>
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
          </PostText>
        </GridPost>

        <SidePosts>
          <GridPost>
            <PostImage>
              <Image
                src="https://unsplash.it/1920/1080"
                alt="some alt"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </PostImage>
            <PostText>
              <PostTicket>Flowers</PostTicket>
              <div>date</div>
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
            </PostText>
          </GridPost>

          <GridPost>
            <PostImage>
              <Image
                src="https://unsplash.it/1920/1080"
                alt="some alt"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </PostImage>
            <PostText>
              <PostTicket>Flowers</PostTicket>
              <div>date</div>
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
            </PostText>
          </GridPost>
        </SidePosts>
      </GridPosts>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;

  h1 {
    font-size: 20px;
    opacity: 0.8;

    span {
      color: gray;
      margin-left: 20px;
    }
  }
`;

const InputSearch = styled.input`
  border: none;
  width: 300px;
  padding: 0 20px;
`;

const InlinePosts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
`;

const InlinePost = styled.div`
  flex: 1;
  min-width: 30%;
  background-color: white;
`;

const PostImage = styled.div``;

const PostTicket = styled.div`
  position: relative;
  top: -40px;
  background-color: yellow;
  width: fit-content;
  padding: 10px;
`;

const PostText = styled.div`
  padding: 20px;

  div:nth-child(2) {
    margin: 10px 0;
  }
`;

const GridPosts = styled.div`
  display: flex;
  gap: 20px;
  height: 500px;
`;

const GridPost = styled.div`
  flex: 1;
  background-color: white;
`;

const SidePosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default Latest;

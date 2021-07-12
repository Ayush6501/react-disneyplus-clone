import styled from "styled-components";
import ViewerItem from "./components/ViewerItems";

const Viewer = () => {
    return (
        <Container>
            <ViewerItem
                src='/images/viewers-disney.png'
                vidsrc="/videos/1564674844-disney.mp4"
                title='Disney' />
            <ViewerItem
                src='/images/viewers-marvel.png'
                vidsrc="/videos/1564676115-marvel.mp4"
                title='Marvel' />
            <ViewerItem
                src='/images/viewers-pixar.png'
                vidsrc="/videos/1564676714-pixar.mp4"
                title='Pixar' />
            <ViewerItem
                src='/images/viewers-starwars.png'
                vidsrc="/videos/1608229455-star-wars.mp4"
                title='StarWars' />
            <ViewerItem
                src='/images/viewers-national.png'
                vidsrc="/videos/1564676296-national-geographic.mp4"
                title='NationalGeo' />
        </Container>
    );
};


const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Viewer;

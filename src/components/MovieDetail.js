import styled from "styled-components";
import db from "./firebase";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

const MovieDetail = () => {
    const {id} = useParams();
    const[detail, setDetail] = useState({});

    useEffect(() => {
        db.collection('movies')
            .doc(id).get().then(doc => {
            if(doc.exists) {
                setDetail(doc.data());
            } else {
                console.log('No such Movie Found!')
            }
        }).catch(error => {
            console.log("error getting document", error);
            })
    }, [id])

    return (
        <Container>
            <Background>
                <img src={detail.backgroundImg} alt={detail.title}/>
            </Background>
            <ImageTitle>
                <img src={detail.titleImg} alt={detail.title}/>
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src='/images/play-icon-black.png' alt=""/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src='/images/play-icon-white.png' alt=""/>
                        <span>Trailer</span>
                    </Trailer>
                    <Addlist>
                        <span />
                        <span />
                    </Addlist>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt=""/>
                        </div>
                    </GroupWatch>
                </Controls>

                <Subtitles>
                    {detail.subTitle}
                </Subtitles>
                <Description>
                    {detail.description}
                </Description>
            </ContentMeta>
        </Container>
    );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;

`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0 ;
  padding: 0 24px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: black;
  
  img {
    width: 32px;
  }
  
  &:hover {
    background: rgb(198, 198, 198);
  }
  
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0 10px 0px 0px;
     
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0 ;
  padding: 0 24px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  color: white;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 13px;
    margin: 0 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Addlist = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  span {
    background-color: white;
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  } 
`;

const GroupWatch = styled(Addlist)``;

const Subtitles = styled.div`
  color: white;
  font-size: 15px;
  min-height: 20px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: white;
  
  @media (max-width: 768px){
    font-size: 15px;
  }
`;

export default MovieDetail;

import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "../Viewer";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import {useEffect} from "react";
import db from './firebase';
import {useSelector, useDispatch} from "react-redux";
import {setMovies} from "../feature/movie/movieSlice";
import {selectUserName} from "../feature/user/UserSlice";

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommends = [];
    let originals = [];
    let trendings = [];
    let newDisneys = [];


    useEffect(() => {
        console.log("hello");
        db.collection("movies").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;

                    case "new":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case "trending":
                        trendings = [...trendings, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trendings,
                })
            );
        });
    }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewer />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

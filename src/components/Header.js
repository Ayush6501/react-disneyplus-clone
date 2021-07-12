import styled from "styled-components";
import HeaderItems from "./HeaderItems";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {auth, provider} from "./firebase";
import {
    selectUserEmail,
    selectUserPhoto,
    selectUserName,
    setUserLoginDetails,
    setSignOutState
} from "../feature/user/UserSlice";
import {useEffect} from "react";

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history.push('/home');
            }
        });
    }, [username])

    const authHandler = () => {
        if (!username) {
            auth.signInWithPopup(provider)
                .then(result => {
                    setUser(result.user);
                }).catch((error) => {
                alert(error.message);
            });
        } else if (username) {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                history.push('/')
            }).catch((error) => {
                alert(error.message);
            });
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+ Logo"/>
            </Logo>

            {!username ? <LoginButton onClick={authHandler}>Login</LoginButton>
                :
                <>
                    <NavMenu>
                        <HeaderItems
                            href='/home'
                            src='/images/home-icon.svg'
                            title='HOME'
                        />
                        <HeaderItems
                            href='/search'
                            src='/images/search-icon.svg'
                            title='SEARCH'
                        />
                        <HeaderItems
                            href='/watchlist'
                            src='/images/watchlist-icon.svg'
                            title='WATCHLIST'
                        />
                        <HeaderItems
                            href='/originals'
                            src='/images/original-icon.svg'
                            title='ORIGINAL'
                        />
                        <HeaderItems
                            href='/movies'
                            src='/images/movie-icon.svg'
                            title='MOVIE'
                        />
                        <HeaderItems
                            href='/series'
                            src='/images/series-icon.svg'
                            title='SERIES'
                        />
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={username}/>
                        <DropDown>
                            <span onClick={authHandler}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>
            }
        </Nav>
    );
};

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    cursor: pointer;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 5px;
  box-shadow: rgba(0 0 0 / 50%) 0 0 18px 0;
  padding: 8px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;


export default Header;

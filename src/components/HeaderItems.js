import styled from "styled-components";

const HeaderItems = (props) => {
    return (
        <NavItems>
            <a href={props.href}>
                <img src={props.src} alt={props.title}/>
                <span>
                    {props.title}
                </span>
            </a>
        </NavItems>
    );
};

const NavItems = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    &:hover {
      cursor: pointer;
    }
    
    img{
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.4px;
      line-height: 1.08px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6.5px;
        content: '';
        opacity: 0;
        height: 2px;
        left: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }
    
    &:hover {
      span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        cursor: pointer;
      }
    }
  }
`;

export default HeaderItems;

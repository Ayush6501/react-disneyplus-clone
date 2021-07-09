import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTAOne src='/images/cta-logo-one.svg' alt="" />
                    <SignUp>GET THE DISNEY BUNDLE</SignUp>
                    <CTAMain>Stream for $29.99 with a Disney+ Subscription.</CTAMain>
                    <Desc>
                        See Movies & Tv shows
                        before it's available to all. Watch as many times as you like
                        with Premier Access for $29.99 and your Disney+ Subscription.
                        Sign up Now to continue.
                    </Desc>
                    <CTA2 src='/images/cta-logo-two.png' alt="" />
                </CTA>
                <BgImg />
            </Content>
        </Container>
    );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImg = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 720px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTAOne = styled.img`
  margin-bottom: 12px;
  max-width: 720px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTA2 = styled.img`
  max-width: 720px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const CTAMain = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 25px;
  margin: 15px 5px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
  font-weight: bold;
`;

export default Login;

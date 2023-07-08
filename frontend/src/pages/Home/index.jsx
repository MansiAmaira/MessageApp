import React from 'react';

import {
    Container,
    Header,
    HeaderWrapper,
    HeaderTitle,
    Link,
    Content,
    Title,
    Info,
    SocialContainer
} from './styles';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home() {
    return (
        <Container>
            <Header>
                <HeaderWrapper>
                    <WhatsappIcon />
                    <HeaderTitle>TextApp</HeaderTitle>
                </HeaderWrapper>

                <HeaderWrapper>
                    <Link to='/signin'>Sign in</Link>
                    <Link to='/signup'>Sign up</Link>
                </HeaderWrapper>
            </Header>

            <Content>
                <Title>Welcome to Text App</Title>  
                <Info>A real time chat made with React</Info>
            </Content>

            <SocialContainer>
                <a href="https://github.com/MansiAmaira/" rel="noopener noreferrer" target="_blank">
                    <GitHubIcon />
                </a>

                <a href="https://www.linkedin.com/in/mansi9/" rel="noopener noreferrer" target="_blank">
                    <LinkedInIcon />
                </a>
            </SocialContainer>
        </Container>
    );
};

export default Home;

import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import Link from 'components/core/link'
import { Ionicon } from 'components/core/ionicons'
import { H2, H5 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  background-color: ${props => props.theme.backgroundColor};

  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  padding-top: 30px;
  padding-bottom: 45px;
`

const Header = H2.extend`
  text-align: center;
`

const Tagline = H5.extend`
  text-align: center;
`

const TechStackContainer = Div.extend`
  flex-direction: column;
  align-items: center;
`

const Headline = Text.extend`
  font-size: 19.2px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: center;
`

const LogoImage = styled.img`
  height: 40px;
  margin: 20px;
`

const Logo = props => <LogoImage src={`/static/techStackLogos/${props.logo}`} style={props.style} />

const LogosContainer = Div.extend`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  flex-wrap: wrap;
  max-width: 1000px;
`

export default () => (
  <Container>
    <TechStackContainer>
      <Header>Tech Stack</Header>
      <Tagline>We‘re Fullstack Javascript Developers.</Tagline>
      <Headline>We work with:</Headline>
      <LogosContainer>
        <Logo logo="node.svg" />
        <Logo logo="npm.svg" />
        <Logo logo="react.svg" />
        <Logo logo="reactNative.svg" />
        <Logo logo="redux.png" />
        <Logo logo="firebase.png" />
        <Logo logo="next.png" />
        <Logo logo="webpack.png" />
        <Logo logo="docker.png" />
      </LogosContainer>
      <Headline>
        See our{' '}
        <Link href="https://github.com/z-dev/code-portfolio/blob/master/readme.md">
          code portfolio <Ionicon className="ion-social-github" />
        </Link>{' '}
        for examples of how we build things.
      </Headline>
    </TechStackContainer>
  </Container>
)

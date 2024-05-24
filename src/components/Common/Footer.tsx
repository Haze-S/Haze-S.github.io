import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { regular16 } from '../../styles/font'

const Footer: FunctionComponent = function () {
  return (
    <Container>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2024 Developer Haze, Powered By Gatsby.
    </Container>
  )
}

export default Footer

const Container = styled.p`
  padding: 60px 0;
  text-align: center;
  ${regular16}
`

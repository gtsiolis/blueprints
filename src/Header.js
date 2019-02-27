import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import {Text, Flex, Sticky, BorderBox, Box} from '@primer/components'
import Link from './Link'

const BoxShadow = styled(Box)`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`

const HeaderText = props => <Text fontSize={2} {...props} />

const Header = ({title, root, children}) => (
  <Sticky zIndex={100}>
    <BoxShadow py={3} bg="gray.9" color="white">
      <Flex className="p-responsive" alignItems="center" justifyContent="space-between">
        <Link href={`/${root}`} color="white" ml={3}>
          <Flex alignItems="center" justifyContent="center">
            <Octicon icon={MarkGithub} size="medium" />
            <HeaderText ml={3}>{title}</HeaderText>
          </Flex>
        </Link>
        <Box display={['none', 'none', 'block']}>
          <HeaderText>{children}</HeaderText>
        </Box>
        <Box display={['block', 'block', 'none']}>
          <Link href="#sidenav">
            <BorderBox
              border={1}
              borderColor="gray.6"
              borderRadius={3}
              color="white"
              display="inline-block"
              px="12px"
              py="6px"
            >
              <Text fontWeight="bold" fontSize={1}>
                Menu
              </Text>
            </BorderBox>
          </Link>
        </Box>
      </Flex>
    </BoxShadow>
  </Sticky>
)
Header.defaultProps = {
  root: ''
}
Header.propTypes = {
  root: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Header

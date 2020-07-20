import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Layout from '../../components/Layout'
import { mockNextUseRouter } from '../utils/mock-router'

describe('Component => Layout', () => {
  mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: '',
    asPath: '/',
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Layout>Mock Layout</Layout>, {})
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot()
  })
})

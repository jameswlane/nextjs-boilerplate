import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../../components/Header'
import { mockNextUseRouter } from '../utils/mock-router'

describe('Component => Header', () => {
  mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: '',
    asPath: '/',
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {})
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot()
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Footer from '../../components/Footer'

describe('Component => Footer', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {})
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot()
  })
})

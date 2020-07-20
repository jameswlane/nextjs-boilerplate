import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = (): ReactElement => {
  const router = useRouter()
  const isPage = (path: string): boolean => path === router.pathname

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link href="/">
          <a className="navbar-brand" data-testid="top-nav-brand">
            Next.js Boilerplate
          </a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className={isPage('/') ? 'nav-item active' : 'nav-item'}>
              <Link href="/">
                <a className="nav-link" data-testid="top-nav-home">
                  Home
                </a>
              </Link>
            </li>
            <li className={isPage('/about') ? 'nav-item active' : 'nav-item'}>
              <Link href="/about">
                <a className="nav-link" data-testid="top-nav-about">
                  About
                </a>
              </Link>
            </li>
            <li className={isPage('/contact') ? 'nav-item active' : 'nav-item'}>
              <Link href="/contact">
                <a className="nav-link" data-testid="top-nav-contact">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

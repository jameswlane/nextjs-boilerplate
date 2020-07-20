import Header from '../Header'
import Footer from '../Footer'
import { FunctionComponent } from 'react'

const SiteLayout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <main role="main" className="container">
      {children}
    </main>
    <Footer />
  </>
)
export default SiteLayout

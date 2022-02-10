import Nav from './Nav';
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Nav/>
      <div>
        {children}
      </div>
    </>
    
  )
};

export default Layout;
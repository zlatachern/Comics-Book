import Header from '../components/Header/Header'
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header>
      {children}
      </Header>
      <Main>
        {children}
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout;
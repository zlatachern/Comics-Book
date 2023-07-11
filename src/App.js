import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './ThemeContext/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

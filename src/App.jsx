import logo from './assets/images/white-logo.png';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="app">
      <body className='app-body'>
        <header className="app-header">
          <nav className='navbar'>
            <a href="index.html"><img src={logo} className="app-logo" alt="logo" /></a>
              <ul>
                <li><a className='nav-button' href="aboutus.html">support</a></li>
                <li><a className='nav-button' href="aboutus.html">about us</a></li>
              </ul>
          </nav>
        </header>
      </body>
    </div>
  );
}

export default App;

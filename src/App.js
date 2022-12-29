import logo from './images/logo.png';
import mdLogo from './images/md-outlook.png';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <div className="login">
        <div className="login-content">
          <h2>Precision Intelligence | ThoughtLeader Insight</h2>
          <p className="text-xl">MDoutlook is a leading precision intelligence company. We build the success of your 
            organization through better decision-making and activation.</p>
          <p>Lumineer® is a unique cloud-based platform, built on decades of relationships and 
            collaborations with clinicians, ThoughtLeaders and life science organizations across 
            the globe delivering comprehensive disease insights.</p>
          <p>If you are a healthcare provider interested in joining the MDoutlook community, 
            please send an email to <a href='' className="button button-link">join@mdoutlook.com</a></p>
        </div>
        <div className="login-box">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="login-form">
              <div className="input">
                <label>Usernamme</label>
                <input type="text" className="form-control" placeholder="Usernae" value="kevin.smith@gmail.com" />
              </div>
              <div className="input">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value="kevin.smith@gmail.com" />
              </div>
          </div>
          <div className="btn-group">
            <button className="button button-primary button-lg">Login</button>
            <a href='' className="button button-link">Forgot Password?</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <ul className="footer-menu">
          <li className="menu-item">
            <a href="" className="button button-link">Contact</a>
          </li>
          <li className="menu-item">
            <a href="" className="button button-link">Privacy Statement</a>
          </li>
          <li className="menu-item">
            <a href="" className="button button-link">Terms of Use</a>
          </li>
        </ul>
        <div className="footer-logo">
          <img src={mdLogo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default App;

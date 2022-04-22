import React, { Component } from 'react'
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Logo from '../../Assets/LOGO.jpg';

export default class NavbarComp extends Component {
  state = { loggedIn: false };
  // state = { loggedIn: true };

  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    const LoginLink = "/Login";

    return (
      <div className="Navbar">
        <div className="Headline1">
          <a className="Link" alt="logo" href="/">
            <img alt="Logo" src={Logo} className="responsive"></img>
          </a>
          <br />
          <br />
          <h1 className="AppName">Carsharing Y</h1>
        </div>
        <nav className="NavbarItems">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.titel}
                </a>
              </li>
            );
          })}
          {this.state.loggedIn === false ?
            <li>
              <a className="nav-links" href={LoginLink}>
                Log In
              </a>
            </li>
            :
            <li>
            <a className="nav-links" href="">
              Logged In
            </a>
          </li>
          }
          <br />
          <br />
        </nav>
      </div>
    )
  }
}

// import React from 'react'
// import { MenuItems } from "./MenuItems";
// import "./Navbar.css";
// import Logo from '../../Assets/LOGO.jpg';

// export default function NavbarComp() {
//   let loggedIn = false
//   const LoginLink = "/Login";

//   return (
//     <div className="Navbar">
//       <div className="Headline1">
//         <a className="Link" alt="logo" href="/">
//           <img alt="Logo" src={Logo} className="responsive"></img>
//         </a>
//         <br />
//         <br />
//         <h1 className="AppName">Carsharing Y</h1>
//       </div>
//       <nav className="NavbarItems">
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <a className={item.cName} href={item.url}>
//                 {item.titel}
//               </a>
//             </li>
//           );
//         })}
//         {loggedIn === false ?
//           <dev>
//             <li>
//               <a className="nav-links" href={LoginLink}>
//                 Log In
//               </a>
//             </li>
//           </dev>
//           :
//           <li>
//             <a className="nav-links" href="">
//               Logged In
//             </a>
//           </li>
//         }
//         <br />
//         <br />
//       </nav>
//     </div>
//   )
// }
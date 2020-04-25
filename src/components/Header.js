import React from "react";



// const Header = (tagline, age) =>
// ................OR................
const Header = (props) => {
    return (
        <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
        {/* <span>{tagline} {age} </span> */}
  {/* ................OR..................... */}
          <span>{props.tagline}</span>
        </h3>
      </header>
    )
}

// export default class Header extends Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header

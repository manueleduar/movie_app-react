import * as React from "react";
import logo_movie from "../../assets/images/logo_movie.png";

const Logo: React.FC = () => {
  return (
      <a className="navbar-brand" href="/">
        <img src={logo_movie} alt="logo" height={46}/>
      </a>
  );
}


export default Logo;

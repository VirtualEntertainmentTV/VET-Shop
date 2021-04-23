import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreT from "./MoreT";
import LoginT from "./LoginT";
import "tippy.js/themes/light.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_first">
        <img src="https://i.ibb.co/4ZnHvdQ/VET-Shop2-trans.png" alt="logo" />
        <div className="header_first1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Save
          </span>
          <span
            style={{
              color: "#f9e107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="header_second">
        <input
          placeholder="Search for products, brands, and more"
          type="text"
        />
        <SearchIcon />
      </div>
      <div className="header_third">
        <Tippy
          theme="light"
          content={<LoginT></LoginT>}
          interactive={true}
          offset={[5, 18]}
        >
          <button>Login</button>
        </Tippy>
      </div>
      <div className="header_fourth">
        <Tippy
          theme="light"
          content={<MoreT></MoreT>}
          interactive={true}
          offset={[5, 18]}
        >
          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div className="header_fifth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import StoreIcon from "@material-ui/icons/Store";
import "./LoginT.css";

const LoginT = () => {
  return (
    <div className="logint">
      <div className="logint__in">
        <h3>New customer</h3>
        <h2>Sign up</h2>
      </div>
      <div className="logint__in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
          alt=""
        />
        <p>Save Plus</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteIcon />
        <p>Wishing</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>      
    </div>
  );
};

export default LoginT;

import React from "react";
import PropTypes from "prop-types"; // ES6

const Profile = ({ Dossier, children, Rihab }) => {
  console.log(Rihab);
  return (
    <div>
      <h1>{Dossier.FullName}</h1>
      <h2>{Dossier.Bio}</h2>
      <h3>{Dossier.Profession} </h3>
      <img src={children} alt={Dossier.FullName} />
      <button onClick={() => Rihab(Dossier.FullName)}> Info </button>
    </div>
  );
};
Profile.defaultProps = {
  children:
    "https://png.pngtree.com/png-clipart/20210610/ourlarge/pngtree-woman-avatar-silhouette-with-haircut-png-image_3426751.jpg",
};
Profile.propTypes = {
  children: PropTypes.string,
};

export default Profile;

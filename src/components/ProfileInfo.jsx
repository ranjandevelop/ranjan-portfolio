import React from "react";

function ProfileInfo() {
  return (
    <>
      <div className="flex justify-start items-center m-1">
        <img
          style={{ height: "50px", width: "50px" }}
          src="https://img.icons8.com/clouds/100/user.png"
          alt=""
        />
        <p className="ml-4 text-white font-bold text-xl">Ranjan Prasad</p>
      </div>
      <p className="text-white text-sm text-left m-1 tracking-wider">
        Web developer with a touch of magic, creating spellbinding websites with
        code and creativity. Turning ideas into amazing online experiences, just
        like a true wizard.
      </p>
    </>
  );
}

export default ProfileInfo;

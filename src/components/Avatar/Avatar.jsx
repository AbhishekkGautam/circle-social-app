import React from "react";

export const Avatar = ({ avatarImg, firstname, lastname, profileCard }) => {
  const nameAvatar = firstname?.split("")[0] + lastname?.split("")[0];

  return (
    <>
      {profileCard ? (
        <>
          {avatarImg ? (
            <img
              src={avatarImg}
              alt="avatar"
              className="h-[120px] w-[120px] bg-[#273340] sm:h-36 sm:w-36 rounded-full border-4 border-[#151F2B] -mt-20"
            />
          ) : (
            <div className="h-[120px] w-[120px] bg-gray-700 sm:h-36 sm:w-36 rounded-full border-4 border-[#151F2B] -mt-20">
              <h4 className="w-full h-full flex items-center justify-center text-3xl text-white font-bold">
                {nameAvatar ?? ""}
              </h4>
            </div>
          )}
        </>
      ) : avatarImg !== "" ? (
        <img src={avatarImg} alt="avatar" className="h-12 w-12 rounded-full" />
      ) : (
        <div className="h-12 w-12 rounded-full bg-gray-700">
          <h4 className="w-full h-full flex items-center justify-center text-lg text-white font-bold">
            {nameAvatar}
          </h4>
        </div>
      )}
    </>
  );
};

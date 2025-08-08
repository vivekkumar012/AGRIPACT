import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="profile-picture.jpg"
          alt="Profile Picture"
        ></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{user.name}</div>
          <p className="text-gray-700 text-base">{user.email}</p>
          <p className="text-gray-700 text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #webdeveloper
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photographer
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #musiclover
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

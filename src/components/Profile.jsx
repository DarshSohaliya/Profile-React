import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useProfile } from "../store/atoms";

function Profile() {
  
    const user = useRecoilValue(useProfile)


 return(
     <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4">
        <img src={user.imageSrc} alt={`${user.name}`} className="w-full h-40 object-cover mb-4 rounded-md" />
        <div className="text-center">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <h3 className="text-m font-bold mb-2">{user.country}</h3>
            <p className="text-gray-600 whitespace-normal">Follower :{user.Followers}  Photo: {user.Photo}   Like: {user.Like}</p>
            
        </div>
     </div>
 )
}
export default Profile
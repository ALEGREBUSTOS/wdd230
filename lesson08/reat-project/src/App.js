import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const randomUserResponse = await $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
        });

        const randomUser = randomUserResponse.results[0];
        setUserData({
          name: `${randomUser.name.first} ${randomUser.name.last}`,
          imageUrl: randomUser.picture.large,
          imageSize: 90,
        });
      } catch (error) {
        console.error('Error fetching random user data:', error);
      }
    };

    fetchRandomUser();
  }, []);

  return (
    <>
      <h1>{userData.name}</h1>
      <img
        className="avatar"
        src={userData.imageUrl}
        alt={`Photo of ${userData.name}`}
        style={{
          width: userData.imageSize,
          height: userData.imageSize,
          padding
        }}
      />
  
      <h1>{userData.name}</h1>
      <img
        className="avatar"
        src={userData.imageUrl}
        alt={`Photo of ${userData.name}`}
        style={{
          width: userData.imageSize,
          height: userData.imageSize,
          padding
        }}
      />

      <h1>{userData.name}</h1>
      <img
        className="avatar"
        src={userData.imageUrl}
        alt={`Photo of ${userData.name}`}
        style={{
          width: userData.imageSize,
          height: userData.imageSize,
          padding
        }}
      />
    </>

    
  );
}

export default Profile;

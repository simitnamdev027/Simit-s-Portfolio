import React from 'react';
import Marquee from './Marquee';

function Marquees() {
  const marqueeData = [
    [
      "https://cdn.iconscout.com/icon/free/png-512/javascript-1-282804.png", // JavaScript (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/cplusplus-3-569564.png", // C++ (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/java-22-225997.png", // Java (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png", // Python (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/django-13-1175187.png", // Django (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/html5-40-1175193.png", // HTML (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/css3-11-1175239.png", // CSS (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png", // ReactJS (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png", // Redux (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/tailwind-css-2-1175272.png", // Tailwind CSS (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png", // Bootstrap (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png", // Node.js (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/express-1174949.png", // Express.js (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png", // MongoDB (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png", // Firebase (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/git-17-1175218.png", // Git (Black & White)
      "https://cdn.iconscout.com/icon/free/png-512/aws-1869025-1583149.png", // AWS (Black & White)
    ]
  ];

  return (
    <div className="w-full overflow-hidden">
      {marqueeData.map((item, index) => (
        <Marquee key={index} imgUrl={item} id={index} />
      ))}
    </div>
  );
}

export default Marquees;

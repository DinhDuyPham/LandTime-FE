import React, { useEffect } from 'react';
import { Grid } from '@mui/material';


const FacebookPageEmbed = () => {
  useEffect(() => {
    // Tạo script Facebook SDK
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Cleanup khi component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Grid item xs={12} sm={6} md={7}>
    
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=100063604838343"
        data-tabs="timeline"
        data-width="200"
        data-height="200"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/profile.php?id=100063604838343"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=100063604838343">
            Landtimes Authentic Dĩ An
          </a>
        </blockquote>
      </div>
    </Grid>
  );
};

export default FacebookPageEmbed;

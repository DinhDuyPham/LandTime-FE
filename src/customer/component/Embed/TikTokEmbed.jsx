import React, { useEffect } from 'react';
import { Grid } from '@mui/material'; 

const TikTokEmbed = () => {
  useEffect(() => {
    // Tạo script TikTok SDK
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup khi component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Grid item xs={12} sm={6} md={3} className='flex justify-center'>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@tulandtimes"
        data-unique-id="tulandtimes"
        data-embed-type="creator"
        style={{ maxWidth: '120px', minWidth: '200px', height: '200px' }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@tulandtimes?refer=creator_embed"
          >
            @tulandtimes  
          </a>
        </section>
      </blockquote>
    </Grid>
  );
};

export default TikTokEmbed;

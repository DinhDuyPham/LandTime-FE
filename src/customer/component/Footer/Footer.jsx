import { Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookPageEmbed from '../Embed/FacebookPageEmbed';
import TikTokEmbed from '../Embed/TikTokEmbed';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white text-center mt-10 pt-6 pb-1'>
        <Grid container spacing={2} className='max-w-8xl mx-auto flex justify-center'>
            <Grid item xs={12} sm={6} md={3} className='mb-6'>
                <Typography className='pb-5 text-xl font-semibold'>LANDTIME</Typography>
                <ul className='list-disc list-inside pl-5 text-left'>
                    <li>0366010143</li>
                    <li>497/46/36 Phan Văn Trị, Phường 5, Gò Vấp</li>
                    <li>phamdinhduy1502@gmail.com</li>
                    <li>Zalo(0366010143)</li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5 text-xl font-semibold'>TIKTOK</Typography>
                <div className='w-full flex justify-center mt-[-20px]'>
                    <TikTokEmbed />
                </div>
            </Grid>               
            <Grid item xs={12} sm={6} md={3} className='mb-6'>
                <Typography className='pb-5 text-xl font-semibold'>BẢN ĐỒ</Typography>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9848634477376!2d106.7833565745762!3d10.888754557112707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d94cad4c6827%3A0xa995be83e3f54f52!2sChung%20c%C6%B0%20HT%20Pearl!5e0!3m2!1svi!2s!4v1721840463202!5m2!1svi!2s"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className='mb-6'>
                <Typography className='pb-5 text-xl font-semibold'>FACEBOOK</Typography>
                <div className='flex justify-center'>
                    <FacebookPageEmbed />
                </div>
            </Grid>
        </Grid>
        <Grid item sx={12} className='pt-10'>
            <Typography variant='body2' component="p" align='center'>Copyright 2024 &copy; LandTime</Typography>
        </Grid>
    </div>
    
    );
}

export default Footer;

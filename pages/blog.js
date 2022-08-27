import { Typography } from '@mui/material';
import React from 'react';
import Line from '../components/lines'
function blog(props) {
    return (
        <div>
            <Typography
                gutterBottom
                variant="h3"
                component="div"
                fontWeight="800"
                fontFamily="Lato"
                fontSize="7.5vmin"
            >
                BLOGS
            </Typography>
        </div>
    );
}

export default blog;
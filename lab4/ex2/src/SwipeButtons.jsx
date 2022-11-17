import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import IconButton from '@mui/material/IconButton'

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className="swipeButton swipeButtons__left">
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className="swipeButton swipeButtons__left">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="swipeButton swipeButtons__star">
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className="swipeButton swipeButtons__right">
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="sswipeButton wipeButtons__lightning">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
        </div>
    )
}
export default SwipeButtons

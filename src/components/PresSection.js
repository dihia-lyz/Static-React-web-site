import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './PresSection.css';

export default function PresSection({
blueButton,
headline,
description,
buttonLabel
}) 
{
    return (
        <>
<div className="home__hero-section" id='presentation'>
    <div className="container">
        <div className="text-wrapper">
            <div className="heading">
                {headline}
            </div>

            <p className='home__hero-desc'>
                {description}
            </p>

            <Link to="/">
            <Button buttonStyle='btn--outline'>
                    {buttonLabel}
                </Button>
            </Link>
        </div>

    </div>
   </div>


        </>
    )
}

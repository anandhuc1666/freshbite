import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './About.css'

function About() {

    return (
        <div className='about'>
            <div className="user-about">
                <h1>🥗 About FreshBite</h1>
                <p>
                    FreshBite was created with one simple mission to bring <strong>delicious, fresh, and high-quality food</strong> right to your doorstep.
                </p>
                <p>
                    We believe food is more than just a meal , it’s an <em>experience of taste, comfort, and happiness</em>. That’s why we carefully curate our products from trusted restaurants, home chefs, and food brands, ensuring that every bite you take is full of flavor and freshness.
                </p>
            </div>
        </div>
    )
}

export default About
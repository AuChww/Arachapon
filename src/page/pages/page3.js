import "./text.css";
import React from 'react';
import pink1 from "../image/pink1.jpg"
import profile from "../image/profile.jpg"

function Page3() {
    return (
        <div class="text-white">
            <div class="mx-auto w-full lg:w-1/2">
                <img src={profile} class="" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0, // Set width to 100% for proportional scaling
                    width: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                }}></img>
                
            </div>
        </div>
    )
}

export default Page3;
import React from 'react'
import HeroImage from "../assets/heroImage.png";

const Home = () => {
    return (
        <div>
            <div>
                <img
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
            </div>

        </div>
    )
}

export default Home


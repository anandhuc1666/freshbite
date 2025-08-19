import React from 'react'
import './Home.css'
import logo from "../components/Fresh.png"

function Home() {
    return (
        <div className='home'>
            <div className="home-img1">
                <img src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png" alt="" className='pic1' />
                <h1>Delicious food at your doorstep 🍲</h1>
                <img src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png" alt="" className='pic2' />
                <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" className='pic-curve1' />
            </div>
            <div className="home-text">
                <h1>Order from a wide range of cuisines and enjoy fresh meals anytime!</h1>
                <h3>For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep</h3>
            </div>
            <div className="home-img2">
                <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" className='pic-curve' />
                <img src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png" alt="" className='pic3' />
                <img src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png" alt="" className='pic1' />
                <img src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png" alt="" className='pic4' />
            </div>
            <div className="home-container">
                <div className="home-food">
                    <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" className='item-img1'/>
                    <h3>Pizza</h3>
                    <hr />
                    <div className="home-off">50% off</div>
                </div>
                <div className="home-food">
                    <img src="https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" alt="" className='item-img1'/>
                    <h3>Biriyani</h3>
                    <hr />
                    <div className="home-off">25% off</div>
                </div>
                <div className="home-food">
                    <img src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="" className='item-img1'/>
                    <h3>Thali</h3>
                    <hr />
                    <div className="home-off">10% off</div>
                </div>
                <div className="home-container-text">
                    <h2>Inspiration for your first order</h2>
                    <p>What are you waiting for? Hurry up and try out this burger pizza near you. With a massive amount of cheese with all of its chewiness and softness, you are sure to squeal in delight as you take your first bite</p>
                </div>
            </div>
            <div className="home-container-footer">
                   <img src={logo} alt="" className='nav-header1'/>
                   <p>Copyright: © 2025 FreshBite. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Home
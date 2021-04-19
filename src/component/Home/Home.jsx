import React from 'react';
import '../Home/home.css';
import redribbon from '../../assets/red-ribbon.png';
import XRay from '../../assets/x-ray.png';
import bloodPressure from '../../assets/blood-pressure.png';

const Home = () => {
    return(
        <div className="home">
            <div className="dashboard">
                <div className="balance">
                    <h5>AFYA</h5>
                    <h3>143.00</h3>
                    <p>Balance</p>
                </div>

                <div className="equivalent">
                    <h5>ZAR</h5>
                    <h3>R21.00</h3>
                    <p>Equivalent</p>
                </div>
            </div>

            <div className="set-currency">
                <p>Select Currency:</p>
                <div className="options">
                    <select name="AFYA" id="">
                        <option>AFYA</option>
                    </select>
                    <input type="number" placeholder="0.0000001"/>
                </div>
                
                <div className="buttons">
                    <button>SEND</button>
                    <button>RECIEVE</button>
                </div>
            </div>

            <div className="recent-activity">
                <p>Recent Activity</p>
                <ul>
                    <li>
                        <div className="list-wrapper">
                            <img src={redribbon} alt=""/>
                            <p>HIV Blood Draw Test</p>
                            <p>A100</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-wrapper">
                            <img src={XRay} alt=""/>
                            <p>TB Radiology XRay</p>
                            <p>A30</p>
                        </div>
                    </li>
                    <li>
                        <div className="list-wrapper">
                            <img src={bloodPressure} alt=""/>
                            <p>Blood Pressure Check</p>
                            <p>A10</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;
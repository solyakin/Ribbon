import React from 'react';
import '../Home-Menu/home-menu.css';

const Home = () => {
    return(
        <div className="home">
            <div className="dashboard">
               <h3>WALLET BALANCE</h3>
               <h3>TOKEN BALANCE:</h3>
               <h3>NAIRA BALANCE:</h3>
            </div>

            <div className="set-currency">
                <p>Select Currency:</p>
                <div className="options">
                    <select name="AFYA" id="">
                        <option>TOKEN</option>
                        <option>NAIRA</option>
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
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>1/1/21</td>
                        <td>Sent</td>
                        <td>N100</td>
                    </tr>
                    <tr>
                        <td>2/2/21</td>
                        <td>Recieved</td>
                        <td>N200</td>
                    </tr>
                    <tr>
                        <td>3/3/21</td>
                        <td>Sent</td>
                        <td>N300</td>
                    </tr>
                    
                </table>
            </div>
        </div>
    )
}

export default Home;
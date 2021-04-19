import React from 'react';
import '../Footer/footer.css';
import { faHome, faCalendarTimes, faWallet, faStore, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {setActivity, setHome} from '../Redux/render/renderAction';
import {setMarket} from '../Redux/render/renderAction';
import {setWallet} from '../Redux/render/renderAction';
import {setEarn} from '../Redux/render/renderAction';

const Footer = ({ setHome, setActivity, setWallet, setMarket, setEarn}) => {

    return(
        <div className="footer">
            <div className="home" onClick={setHome}>
                <FontAwesomeIcon icon={faHome}/>
                <p>Home</p>
            </div>
        
            <div className="activity" onClick={setActivity}>
                <FontAwesomeIcon icon={faCalendarTimes}/>
                <p>Activity</p>
            </div>

            <div className="wallet" onClick={setWallet}>
                <FontAwesomeIcon icon={faWallet}/>
                <p>Wallet</p>
            </div>
        
            <div className="market" onClick={setMarket}>
                <FontAwesomeIcon icon={faStore}/>
                <p>Market</p>
            </div>
        
            <div className="earn" onClick={setEarn}>
                <FontAwesomeIcon icon={faGift}/>
                <p>Earn</p>
            </div>
        
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        setHome : () => dispatch(setHome()),
        setActivity : () => dispatch(setActivity()),
        setMarket : () => dispatch(setMarket()),
        setWallet : () => dispatch(setWallet()),
        setEarn : () => dispatch(setEarn())
    }
}
export default connect(null, mapDispatchToProps) (Footer);
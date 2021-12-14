import React from 'react'
import titleImg from '../images/title.png'
import './main_title.css'
import { useSelector } from 'react-redux';

const Main_title = () => {
    const currentCash = useSelector((state) => { return state.game.currentCash })

    return (
        <div className="main_title_container">
            <div><img src={titleImg} /></div>
            <div className="score">
                <span className="score_title">Cash</span><br />
                <span className="score_number">{currentCash}$</span>
            </div>
        </div >
    )
}

export default Main_title
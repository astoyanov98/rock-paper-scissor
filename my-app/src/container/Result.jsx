import React, { useState, useEffect } from 'react'
import './result.css'
import { useSelector } from 'react-redux'
import Rock from '../images/rock.png'
import Paper from '../images/paper.png'
import Scissors from '../images/scissors.png'

const Result = () => {
    const data = useSelector(state => state.game)
    const cash = useSelector(state => state.game.currentCash)
    const [msg, setMsg] = useState('')
    const icons = { 'rock': Rock, 'paper': Paper, 'scissor': Scissors }

    useEffect(() => {
        switch (data.winner) {
            case 'tie':
                setMsg('IT IS A TIE!')
                break;
            case 'player':
                setMsg('YOU WIN!')
                break;
            case 'ai':
                setMsg('YOU LOST!')
                break;
            default:
                break;
        }
    }, [])

    return (
        <>
            <div className='back_button' onClick={() => { window.location.pathname = '/' }}>New Game</div>
            <div className='resultPage'>
                {msg}
                <div style={{ color: '#4E9455' }}>{cash}$</div>

            </div>
            <img style={{ marginRight: '7vw' }} src={icons[data.player]} />
            <img src={icons[data.ai]} />
            <div>

            </div>

        </>
    )
}

export default Result;
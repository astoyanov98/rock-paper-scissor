import React from 'react'
import './figure.css'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlayer } from '../actions/playerAction'
import Rock from '../images/rock.png'
import Paper from '../images/paper.png'
import Scissors from '../images/scissors.png'

const Figure = (props) => {

    const icons = { 'rock': Rock, 'paper': Paper, 'scissor': Scissors }
    const dispatch = useDispatch();
    const figures = ['rock', 'paper', 'scissor']
    const currentCash = useSelector((state) => { return state.game.currentCash })

    const winner = (player, ai) => {
        if ((player == "rock" && ai == "scissor") || (player == "paper" && ai == "rock") || (player == "scissor" && ai == "paper")) {
            dispatch(updatePlayer('winner', 'player'))
            dispatch(updatePlayer("currentCash", currentCash + 100))
        } else if ((player == "rock" && ai == "paper") || (player == "paper" && ai == "scissor") || (player == "scissor" && ai == "rock")) {
            dispatch(updatePlayer('winner', 'ai'))
            dispatch(updatePlayer("currentCash", currentCash - 100))
        } else {
            dispatch(updatePlayer('winner', 'tie'))
        }
    };

    const handleClick = () => {
        if (currentCash > 0) {
            dispatch(updatePlayer('player', props.figure))
            const rndInt = Math.floor(Math.random() * (3) + 1)
            const aiPick = figures[rndInt - 1];
            dispatch(updatePlayer('ai', aiPick))
            winner(props.figure, aiPick);
            window.location.pathname = '/result'
        } else {
            alert("Not enogh Cash!")
        }

    }

    return (
        <>
            {(window.location.pathName === '/result') ?
                <div>
                    <img src={icons[props.img]} />
                </div>
                :
                <div className="container" onClick={() => handleClick()} style={{ backgroundColor: props.color }}>
                    <img src={icons[props.img]} />
                </div>
            }

        </>

    )
}

export default Figure;
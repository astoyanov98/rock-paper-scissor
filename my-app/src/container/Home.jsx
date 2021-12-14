import React from 'react'
import Figure from '../components/figure';
import Main_title from '../components/main_title';

const Home = () => {
    return (
        <div style={{ marginTop: '4vh' }}>
            <Main_title />
            <div className="outer_div">
                <Figure img="rock" figure='rock'></Figure>
                <Figure img="paper" figure='paper'></Figure>
            </div>
            <div className='outer_div'>
                <Figure img="scissor" figure='scissor'></Figure>
            </div>
        </div >
    )
}

export default Home
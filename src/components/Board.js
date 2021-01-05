import React from 'react';
import Square from './Square';
import {Grid} from '@material-ui/core';

import {size, tiles} from '../helpers/mock';

const boardWidth = (size * 3 )

const tileSet = [...Array(tiles)]

class Board extends React.Component{

    state = {

    }

    game = (value) => {
        this.props.playGame(value)
    }
     render(){

         return(

            <div>
                    <Grid container style={{width:`${boardWidth + 6}px`}}>
                    {tileSet.map((a,i) =>
                        <Grid item xs={4}index={i} data-value={i}> <Square position={i} game={this.game}/> </Grid>
                    )}
                </Grid>
            </div>

        )

    }
}



export default Board;
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Player from './Payer';

class Players extends React.Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players', {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(res => this.setState({players: res.data}));
    }

    render() {
        return(
            <Wrapper>
                <h2>Players</h2>
                {this.state.players.map(player => <Player key={player.id} {...player} />)}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 90%;
    margin: 0px auto 50px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 120px;
    @media (min-width: 600px) {
        width: 75%;
    }
    h2 {
        margin: 0 0 20px;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
    }
`

export default Players;
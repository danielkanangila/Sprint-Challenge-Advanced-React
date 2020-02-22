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
                {this.state.players.map(player => <Player key={player.id} {...player} />)}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 70%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
`

export default Players;
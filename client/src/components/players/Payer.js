import React from 'react';
import styled from 'styled-components';

class Player extends React.Component {
    render() {
        const { name, country, searches } = this.props;
        return(
            <Card data-testid="resolved-payer-card" className="card">
                <span role="img" aria-label="img" className="card__player-emoji">
                    &#9977;
                </span>
                <h3 className="card__name">
                    {name}
                </h3>
                <div className="card__bottom">
                    <p className="card__text">
                        <span className="flag" role="img" aria-label="img">&#9873;</span>
                        {country}
                    </p>
                    <p className="card__text">
                        <span role="img" aria-label="img">&#9997;</span>
                        <span className="searches">{searches}</span>
                    </p>
                </div>
            </Card>
        )
    }
}

const Card = styled.div`
    &.card {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 16px;
        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.07);
        border-radius: 5px;
        margin: 0 1.5% 15px 0;
        @media (min-width: 850px) {
            width: 31.5%;
        }
    }
    .card__name {
        text-align: center;
    }
    .card__player-emoji {
        width: 75px;
        height: 75px;
        margin: 10px auto 0;
        background-color: #ccc;
        border-radius: 50%;
        font-size: 50px;
        text-align: center;
    }
    .card__bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .flag {
        font-size: 18px;
        margin-right: 5px;
        color: rgba(0, 0, 0, 0.7)
    }
    .card__text {
        display: flex;
        margin-bottom: 10px;
    }
    .searches {
        display: block;
        width: 25px;
        height: 25px;
        padding-top: 5px;
        border-radius: 50%;
        text-align: center;
        background-color: #2196f3;
        color: #fff;
        font-weight: bold;
        font-size: 0.8em;
        margin-left: 5px;
    }
`

export default Player;
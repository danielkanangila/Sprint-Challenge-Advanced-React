import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import styled from 'styled-components';

const Chart = ({data}) => {
    const formatData = data => {
        let newPlayers = [];
        data.forEach(player => {
            if (newPlayers.some(newPlayer => newPlayer.country === player.country)) {
                let index = newPlayers.findIndex(p => p.country === player.country)
                newPlayers[index].searches += player.searches
                newPlayers[index].numberOfPlayersByCountry += 1; 
            } else {
                newPlayers.push({
                    country: player.country,
                    searches: player.searches,
                    numberOfPlayersByCountry: 1
                })
            }
        });
        return newPlayers;
    }
    return(
        <Wrapper>
            <h2>Searches and number of players by countrys</h2>
            <ChartWrapper>
                <ResponsiveContainer>
                    <LineChart data={formatData(data)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="country" />
                        <YAxis />
                        <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                        <Line type="monotone" dataKey="numberOfPlayersByCountry" stroke="#82ca9d" />
                        <Legend />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-bottom: 25px;
    width: 100%;
`   

const ChartWrapper = styled.div`
    width: 100%;
    height: 350px;
`

export default Chart;
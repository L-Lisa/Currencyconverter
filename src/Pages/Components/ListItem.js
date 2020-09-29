import React, { useState, useEffect } from "react"
import styled from "styled-components/macro";

const ListSection = styled.article`
width: 300px;
background: #f7f2f2;
padding: 10px;
`;

const Info = styled.div`
color:#1c1c1c;
`;

const Country = styled.div`
width: auto;
text-align: left;
padding: 10px;
font-size: 25px;
border-radius: 2px;
margin: 3px;
background: lightgray;
`;


export const ListItem = ({ amount, name, currencies, population, flag, capital }) => {
    const [showInfo, setShowInfo] = useState(false)
    const [swedRate, setSwedRate] = useState([])
    const [XchangeE, setXchangeE] = useState()
    const bucks = `${currencies[0].code}`.toString()

    useEffect(() => {

        const Exchange = async () => {
            const res = await fetch(` http://data.fixer.io/api/latest?access_key=f5ba67ddbe62d125023653a7aca65f3a=${bucks}`)
            const jsonRes = await res.json()
            if (jsonRes.rates !== undefined || jsonRes.success === true) {
                console.log(jsonRes)
                console.log(jsonRes.rates[bucks])
                setXchangeE(jsonRes.rates[bucks])
            }
        }

        const RateSEK = async () => {
            const res = await fetch(`http://data.fixer.io/api/latest?access_key=f5ba67ddbe62d125023653a7aca65f3a=SEK`)
            const jsonRes = await res.json()
            if (jsonRes.rates !== undefined || jsonRes.success === true) {
                setSwedRate(jsonRes.rates["SEK"])
            }
        }
        Exchange()
        RateSEK()
    }, [amount, bucks]);


    const Answer1E = amount / swedRate
    const FinalAnswer = Answer1E * XchangeE
    const FinalShort = FinalAnswer.toFixed(2)
    return (

        < ListSection >
            <Country onClick={() => setShowInfo(!showInfo)}>{name}</Country>
            {showInfo && <Info>
                <h2>Capital city:{capital}</h2>
                <p>Total Population:{population}</p>
                <p>Your SEK is worth:{FinalShort} -{bucks} here! </p>

            </Info>}
        </ ListSection>
    )
}


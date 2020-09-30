import React, { useState } from "react"
import styled from "styled-components/macro";

const ListSection = styled.article`
width: 280px;
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

    const GetMoney = () => {
        const Exchange = async () => {
            const res = await fetch(` http://data.fixer.io/api/latest?access_key=b36112c44ba87ac0ceb95dd5eaf320df&symbols=${bucks}`)
            const jsonRes = await res.json()
            if (jsonRes.rates !== undefined || jsonRes.success === true) {
                setXchangeE(jsonRes.rates[bucks])
            }
        }
        const RateSEK = async () => {
            const res = await fetch(`
            http://data.fixer.io/api/latest?access_key=b36112c44ba87ac0ceb95dd5eaf320df&symbols=SEK`)
            const jsonRes = await res.json()
            if (jsonRes.rates !== undefined || jsonRes.success === true) {
                setSwedRate(jsonRes.rates["SEK"])
            }
        }
        Exchange()
        RateSEK()
    }

    const handlecountryClick = () => {
        setShowInfo(!showInfo)
        if (!showInfo) { GetMoney() }

    }
    const Answer1E = amount / swedRate
    const FinalAnswer = Answer1E * XchangeE
    const FinalShort = FinalAnswer.toFixed(2)
    return (

        < ListSection >
            <Country onClick={handlecountryClick}>{name}</Country>
            {showInfo && <Info>
                <h2>Capital city: {capital}</h2>
                <p>Total Population: {population}</p>
                <p>Your SEK is worth:{FinalShort} -{bucks} here! </p>
            </Info>}
        </ ListSection>
    )
}


import React, { useState, useEffect } from "react"
import styled from "styled-components/macro";
import { ListItem } from "./Components/ListItem"
import Background from "background.jpg"

const Wrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
padding: 130px;
overflow: scroll;
background-image: url(${Background});
`;
const CountryList = styled.section`
width: 300px;
overflow: scroll;
border: 10px solid #355d39;
  `;


const Cashin = styled.section`
width:300px;
background:#95b391;
padding: 10px;
text-align: center;
display:flex;
flex-direction:column;
align-content:center;
`;

const CashinPut = styled.div`
background:#f7f2f2;
width:inherit;
height:2.5rem;
text-align:center;
input{
font-size:2rem;
font-size: 2rem;
width: -webkit-fill-available;
text-align: center;
}
`;


export const ListOfCountries = () => {
    const [countries, setCountries] = useState([])
    const [amount, SetAmount] = useState(100)
    const ALL_URL = "https://restcountries.eu/rest/v2/all"

    const HandleSetAmount = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        const CountriesList = async () => {
            const res = await fetch(ALL_URL)
            const jsonRes = await res.json()
            setCountries(jsonRes)
        }
        CountriesList()
    }, []);


    return (
        <Wrapper>
            <Cashin>
                <h1>How much is your cash worth in different countries, enter SEK &#8595; </h1>
                <CashinPut> <input type="number" value={amount} onChange={HandleSetAmount}
                    onChange={e => SetAmount(e.target.value)} /></CashinPut>
            </Cashin>
            <CountryList>
                {countries.map(country =>
                    <ListItem key={country.name}{...country} amount={amount} />
                )}
            </CountryList>
        </Wrapper>
    )
}


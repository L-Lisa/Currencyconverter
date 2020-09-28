import React, { useState, useEffect } from "react"
import styled from "styled-components/macro";
import { Link } from 'react-router-dom'
import { ListItem } from "./Components/ListItem"

/* FixerKey = e4854d270c7885260fde497b430fd4f6  
http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6

CURRENCY_URL = "http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6"
  ALL_URL = "https://restcountries.eu/rest/v2/all"
  COUNTRY_URL = "https://restcountries.eu/rest/v2/name/{name}"
*/


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
            /*    console.log(jsonRes) */
            setCountries(jsonRes)
        }
        CountriesList()
    }, []);

    return (
        <>
            <p>SEK to convert: </p>
            <input type="number" value={amount} onChange={HandleSetAmount}
                onChange={e => SetAmount(e.target.value)} />
            <CountryList>
                {countries.map(country =>
                    <ListItem {...country} amount={amount} SetAmount={SetAmount} />
                )}
            </CountryList>
        </>
    )
}


const CountryList = styled.section`
  width:300px;
  overflow:scroll;

  `;
const Li = styled.div`
  width:270px;
  list-style:none;
  `;

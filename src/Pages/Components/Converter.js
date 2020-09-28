import React, { useState, useEffect } from "react"
import styled from "styled-components/macro";
import { Link } from 'react-router-dom'
/* import { ListItem } from "./Components/ListItem" */

/*  FixerKey = e4854d270c7885260fde497b430fd4f6
http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6

CURRENCY_URL = "http://data.fixer.io/api/latest?

access_key= 4a68d465f7d3ddafd245e35977509634

ALL_URL = "https://restcountries.eu/rest/v2/all"
COUNTRY_URL = "https://restcountries.eu/rest/v2/name/{name}"

export const Converter = () => {
    const [COptions, setCOptions] = useState([])
    const [sek, setSek] = useState()
    const [amount, setAmount] = useState(1)
    const [amountSek, setAmountSek] = useState(1)
    const [exchangeRate, setExchangeRate] = useState()
    const Convert_URL = "http://data.fixer.io/api/latest?access_key=4a68d465f7d3ddafd245e35977509634"

    const Rates_URL = "http://data.fixer.io/api/latest?access_key=4a68d465f7d3ddafd245e35977509634&format1"


    // Get Exchange rates
    useEffect(() => {
        fetch(Convert_URL)
            .then(res => res.json())
            .then(info => {
                setCOptions([info.base, ...Object.keys(info.rates)])
                        setSek(Object.keys(info.rates)[128])
                setExchangeRate(info.rates[sek])
                console.log(info.rates)
                console.log(info.rates["SEK"])
                console.log(sek)
            })
    }, []);
    /*  const bucks = `SEK`
     const TheRate = `rates.rates${bucks}` */
/*   return (
      <Calculator>
          <input type="number" />
          <select>
              {COptions.map(optionC => (
                  <option key={optionC} value={optionC} onChange={(e) => setCOptions(e.target.value)}>{optionC}</option>
              ))}
          </select>
          <input type="number" value={amountSek} onChange={(e) => setAmountSek(e.target.value)} />

          <OutPut>OUTPUT:{amountSek} </OutPut>
          <OutPut>{amountSek} </OutPut>
      </Calculator>
  )
}


const Calculator = styled.div`
width:auto;
display:flex;
height:50px;
background:pink;
overflow:scroll;
input{
width:30px;
height:20px;
font-size: 12px;
}
`;
const OutPut = styled.div`
display:flex;
flex-direction:column;
`;

const Li = styled.div`
width:270px;
list-style:none;
`;  */
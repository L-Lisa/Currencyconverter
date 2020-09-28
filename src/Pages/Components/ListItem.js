import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Converter } from "../Components/Converter.js"

export const ListItem = ({ amount, rates, name, currencies, code, population, flag, capital }) => {
    const [MyCash, setMyCash] = useState()
    const [swedRate, setSwedRate] = useState([])
    const [KrAmount, SetKRAmount] = useState([])
    /*  const [amount, SetAmount] = useState(2) */
    const [XchangeE, setXchangeE] = useState()
    const [listBucks, setListBucks] = useState()
    const bucks = `${currencies[0].code}`
    const Convert_URL = `http://data.fixer.io/api/latest?access_key=efa4c890e8bdb4d2a17565d47ae9fd02&${bucks}`

    const RateofCountry = ` http://data.fixer.io/api/latest?access_key=efa4c890e8bdb4d2a17565d47ae9fd02&symbols=${bucks}`

    const RateofSEK = ` http://data.fixer.io/api/latest?access_key=efa4c890e8bdb4d2a17565d47ae9fd02&symbols=SEK`

    useEffect(() => {

        const Exchange = async () => {
            const res = await fetch(RateofCountry)
            const jsonRes = await res.json()
            if (jsonRes.rates != undefined || jsonRes.rates != null) {
                console.log(jsonRes)
                console.log(jsonRes.rates[bucks])
                setXchangeE(jsonRes.rates[bucks])
            }
        }
        Exchange()


        const RateSEK = async () => {
            const res = await fetch(RateofSEK)
            const jsonRes = await res.json()
            if (jsonRes.rates != undefined || jsonRes.rates != null) {
                setSwedRate(jsonRes.rates["SEK"])
            }
        }
        RateSEK()

    }, [amount, bucks]);

    /*  const HandleSetAmount = (e) => {
         e.preventDefault()
     } */
    const HandleSetMyCash = (e) => {
        e.preventDefault()
    }
    const ConvertToEuro = amount / XchangeE
    const convertEtoSEK = ConvertToEuro * swedRate

    const Answer1E = amount / swedRate
    const FinalAnswer = Answer1E * XchangeE
    const FinalShort = FinalAnswer.toFixed(2)
    return (

        < div >
            <h1>{name}</h1>
            <h2>Capital city:{capital}</h2>
            <p>Total Population:{population}</p>
            {/*   <p>{currencies[0].code}</p> */}
            {/*   <p> Xchange to Euro rate{XchangeE}</p>
            <p>cash is: {bucks}</p>
            <p>SEKrate {swedRate}</p> */}

            {/*  <p>SEK to convert: </p>
            <input type="number" value={amount} onChange={HandleSetAmount}
                onChange={e => SetAmount(e.target.value)} /> */}


            {/*   <input type="number" value={MyCash} onChange={HandleSetMyCash}
                onChange={e => SetMyCash(e.target.value)} /> */}


            {/* 
            <p> if you have {amount}Bucks that is {amount}/{XchangeE} = €{ConvertToEuro} </p>
            <p> that is SEK{convertEtoSEK}</p> */}
            <p>That is:{FinalShort} -{bucks} </p>
        </ div >
    )
}
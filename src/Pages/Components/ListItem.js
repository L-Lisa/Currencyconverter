import React, { useState, useEffect } from "react"


export const ListItem = ({ amount, name, currencies, population, flag, capital }) => {

    const [swedRate, setSwedRate] = useState([])
    const [XchangeE, setXchangeE] = useState()
    const bucks = `${currencies[0].code}`


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


    const HandleSetMyCash = (e) => {
        e.preventDefault()
    }

    const Answer1E = amount / swedRate
    const FinalAnswer = Answer1E * XchangeE
    const FinalShort = FinalAnswer.toFixed(2)
    return (

        < div  >
            <h1>{name}</h1>
            <h2>Capital city:{capital}</h2>
            <p>Total Population:{population}</p>
            <p>That is:{FinalShort} -{bucks} </p>
        </ div >
    )
}
import React, { useState, useEffect } from "react"
import styled from "styled-components/macro";
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ListOfCountries } from "./Pages/ListOfCountries"
import { CountryDetails } from "./Pages/CountryDetails"
import { Converter } from "./Pages/Components/Converter.js"


/* FixerKey = e4854d270c7885260fde497b430fd4f6  
http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6

CURRENCY_URL = "http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6"
  ALL_URL = "https://restcountries.eu/rest/v2/all"
  COUNTRY_URL = "https://restcountries.eu/rest/v2/name/{name}"
*/



export const App = () => {
  return (
    <>
      {/*       <Converter /> */}
      <ListOfCountries />

    </>
  )
}


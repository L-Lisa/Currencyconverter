import React, { useState, useEffect } from "react"

/* FixerKey = e4854d270c7885260fde497b430fd4f6  
http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6
*/



export const App = () => {
  const [countries, setCountries] = useState([])
  CURRENCY_URL = "http://data.fixer.io/api/latest?access_key=e4854d270c7885260fde497b430fd4f6"
  ALL_URL = "https://restcountries.eu/rest/v2/all"
  COUNTRY_URL = "https://restcountries.eu/rest/v2/name/{name}"

  useEffect(() => {
    fetch(ALL_URL)
      .then(res => res.json)
      .then(json => setCountries(json.results))
  })
  if (!countries) {
    return <>Paitence, List is loading.. </>
  }

  return (
    <CountryList>
      {countries.map(country =>
        <Li>{country}</Li>
      )}

    </CountryList>
  )
}


const CountryList = styled.ul`
width:300px;
`;
const Li = styled.li`
width:270px;
`
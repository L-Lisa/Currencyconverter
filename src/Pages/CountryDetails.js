import React, { useState, useEffect } from "react"
import styled from "styled-components/macro";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { ListItem } from "./Components/ListItem"

/* const Details_URL = `https://restcountries.eu/rest/v2/name/${name}` */



export const CountryDetails = ({ capital }) => {
    const { name } = useParams();
    const [details, setDetails] = useState([])
    const Details_URL = `https://restcountries.eu/rest/v2/name/${name}`


    useEffect(() => {


        const Details = async () => {
            const res = await fetch(Details_URL)
            const jsonRes = await res.json()
            console.log(jsonRes)
            setDetails(jsonRes)
        }
        Details()
    }, []);

    return (
        <DetailsWrapper>
            <Title>{name}</Title>
            <InfoP> Capital:{capital} </InfoP>
        </DetailsWrapper>
    )
}




const DetailsWrapper = styled.main`
width:auto;
`;

const Title = styled.h1`
font-weight:800;
`;

const InfoP = styled.p`
width:auto;
`
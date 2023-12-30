import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Tour from '../components/Tour'
import PuffLoader from "react-spinners/ClipLoader";


function MainPage()
{
    // const [loading, setLoading] = 
    const [tours, setTours] = useState([])
    const url = 'https://course-api.com/react-tours-project'
    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");

    const getData = async () =>
    {
        const { data } = await axios.get(url)
        setTours(data)
    }

    useEffect(() =>
    {
        getData()

    }, [])


    return (
        <Component>
            <h1>Our Tours</h1>
            {tours.length > 0 ?
                tours.map((el) =>
                {
                    return (<>
                        {<Tour key={el.id} tours={el} />}
                    </>)


                })
                : <PuffLoader
                    color="#3936d7"
                    size={250}
                    speedMultiplier={2}
                />}
        </Component>
    )
}
const Component = styled.div`
background-color: white;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 20px;
h2{
    font-size: 25px;
}
h1{
    color: Purple;
    text-decoration: underline;
    text-decoration-color: blue;
    text-decoration-thickness: 2.5px;

}
`
export default MainPage
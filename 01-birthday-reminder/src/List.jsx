import React, { useState } from 'react'
import data from "./data.json"
import styled from 'styled-components'
import CardItem from './Components/CardItem'

function List()
{
    const [users, setUsers] = useState(data)
    const [showUsers, setShowUsers] = useState(true)
    const showData = () =>
    {
        if (showUsers === true)
        {
            setUsers(data)
            setShowUsers(false)
        } else
        {
            setShowUsers(true)
            setUsers([])
        }
    }

    console.log(`users : `, users);
    return (
        <MyComponent>
            <div className="myList">
                <h1 h1 className='card-title' > {users.length} birthdays today</h1>
                <div className="items-container">
                    {users.map((el) =>

                        <CardItem users={el} />
                    )
                    }
                </div >
                < button type="submit" onClick={() => { showData() }}> {showUsers ? 'Show all' : 'Hide all'}</button>
            </div>
        </MyComponent >
    );
}


const MyComponent = styled.div`
            width: 350px;
            height: 450px;
            background-color: white;
            padding: 12px;
            border-radius: 30px;
    
            .card-title{
                text-align: start;
            font-size: 20px;
            padding: 0 30px;
}
.myList{
                padding: 10px;
                .items-container{
    height: 20rem;
    overflow-y  : scroll;
}
}
            button{
                background-color: #f83051;
            padding: 15px 35px;
            color: white;
            font-weight: 800;
            margin-top: 18px;
            border: 0 solid white;
            border-radius: 15px;
}
`




export default List;

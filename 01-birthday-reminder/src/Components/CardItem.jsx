import React from 'react'
import styled from 'styled-components'

function CardItem(props)
{
  console.log(`props`, props);
  return (
    <>
      <MyComponent>
        < div className="card-item" >
          <img src={props.users.image} alt="" style={{ borderRadius: "50%", padding: "5px", width: "55px" }} />
          <div className="card-item-details">
            <h3 className="name">{props.users.name}</h3>
            <p className="age">{props.users.age} Years old</p>
          </div>
        </div>
      </MyComponent>
    </>
  )
}



const MyComponent = styled.div`
    
            .card-item{
                background-color: #911191;
            display: flex;
            height: 70px;
            margin: 8px 1px;
            border-radius: 35px;
}
            .card-item-details{
                display: flex;
            flex-direction: column;
            align-items: start;
            gap: 8px;
            padding: 3px 12px;
            h3{
                /* top :0; */
                margin: 0;
    }

            p{
                margin: 0;
                font-size: 12px;
                font-weight: bold;
                color: rgb(53, 53, 53);
                /* display: flex; */
    }
}
        
`


export default CardItem
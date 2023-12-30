import React from 'react'
import styled from 'styled-components'
import img from '../assit/download.jpg'
function Tour(props)
{
    return (
        <Component >
            <img src={props.tours.image} alt="" style={{ width: "390px", borderRadius: "15px 15px 0 0 " }} />
            <div className='card-details '>
                <h4 className="title">{props.tours.name}</h4>
                <h4 className="price">{props.tours.price}</h4>
            </div>
            <p>
                {props.tours.info}
                <span id='dots'>...</span><span id='more'>, ipsam in corporis voluptatibus ratione,
                    dolor molestiae asperiores ducimus iure! Magni
                    quisquam velit repellat laboriosam sunt quos
                    accusantium perferendis beatae animi minus alias,
                    aliquid temporibus rerum sit mollitia delectus in ad
                    aspernatur.</span></p>

        </Component>
    )
}

const Component = styled.div`
background-color: #5e5e5e61;
border-radius: 15px 15px 15px 0;
padding: 7px;
width: 390px;
margin: 18px 0;
img{
    transition: transform .7s;
}
img:hover{
    -ms-transform: scale(1.01); /* IE 9 */
  -webkit-transform: scale(1.01); /* Safari 3-8 */
  transform: scale(1.05); 
}
.card-details{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #636161;
}
p{
    text-align: justify;
    line-height: 1.3;
    #more{
        display: none;
    }
}
`
export default Tour
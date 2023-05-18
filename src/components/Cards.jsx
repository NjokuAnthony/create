import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Cards = (props) => {
  return (
    <div>
        <div className="card d-flex justify-content-evenly  mx-1 my-2 flex-wrap" style={{width: "18rem"}}>
            <img src={props.image} class="card-img-top" alt="..."/>

            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.price}</p>
                <div className='d-flex justify-content-center mb-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <div className='d-flex justify-content-center'>
                <a href="ydfd" class=" btn btn-danger w-100">
                <BsCartCheckFill />   Add to Cart</a>
                </div>
            </div>
        </div>

        

        
    </div>
  )
}

export default Cards
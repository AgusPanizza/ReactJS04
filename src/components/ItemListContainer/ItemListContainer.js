import React from 'react'

export const ItemListContainer =(props) =>  {

    console.log(props.greeting)
    return (
<section>  
   <p>{props.greeting} </p> 
    <p>{props.contenido} </p> 

</section>
    )
}


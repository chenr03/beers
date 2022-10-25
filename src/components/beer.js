import React from 'react';

function Beer(props) {
    const [count, setCount] = React.useState(0);

    function handleClick () {
        setCount(count + 1);
        console.log('Button Click ....');
        if(setCount >= 1) {
            handleClick.count++
    } else {
        return
        }
    }


    return (

            <li>
            <img src = {props.beer.image_url} alt = {props.beer.name}/>
            <h4> {props.beer.name} </h4>
            <p> {props.beer.description} </p>
                <div>
                    <button type="button" onClick={handleClick}> 👍 </button>

                </div>
                Likes: { count}
            </li>

    );
}

export default Beer;

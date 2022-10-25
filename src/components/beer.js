function Beer(props) {
    console.log(props);

    return (
        <li>
        <img src = {props.beer.image_url} alt = {props.beer.name}/>
        <h4> {props.beer.name} </h4>
        <p> {props.beer.description} </p>
            <button type="button">Like</button>
        </li>
    );
}

export default Beer;

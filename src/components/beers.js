import React, { Component }from 'react';
import "../App.css";
import Beer from "./beer";

export default class Beers extends Component {
   constructor(props) {
       console.log("in constructor")
       super(props);

       this.state = {
           beers: [],
       };
   }

   componentDidMount(){
       console.log('Mounted')
       fetch("https://api.punkapi.com/v2/beers")
           .then((response) => response.json())
           .then(data => {
               this.setState({
                   beers: [...data],
               });
           });
}

    componentDidUpdate() {
       console.log("Updated", this.state.beers);
    }

    render() {
       console.log('Render!');
        return (
            <div className = "wrapper">
                <h2> List of the Best Beer  </h2>

                <ul className= "beersBeers">
                    {this.state.beers.map((beer) => {
                       return <Beer beer={beer}/>;
                        })}
                </ul>
            </div>
        );
    }
}


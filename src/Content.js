import React, { Component } from "react";
import Game from "./games.json";

const games = Game.map(
    (Game) => 
    {
        return(
            <div className="col-20" key={Game.item}>
                    <div className="card shadow-sm">
                        <img src= {Game.image}  />
                        <div className="card-body">
                            <p className="card-text">{Game["special containment procedures"]}</p>
                            <p className="card-text">{Game.description}</p>
                        </div>
                    </div>
                </div>
        );
    }
);

class Content extends Component {
    render() {
        return (
            <div className="album py-5 bg-dark">
            <div className="container">
            <div className="row-cols-sm-2  g-12">

                {games}

            </div>
            </div>
            </div>
        );
    }
}

export default Content;

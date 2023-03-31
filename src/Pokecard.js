import React from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {
    render() {
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.item.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.item.id}.png`} />

                <div className='Pokecard-data'> Type: {this.props.item.type} </div>
                <div className='Pokecard-data'> EXP: {this.props.item.base_experience} </div>


            </div>
        );
    }
}

export default Pokecard;
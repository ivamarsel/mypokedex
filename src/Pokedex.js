import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <div className='Pokedex'>
                <div className='Pokedex-cards'>
                    {this.props.characters.map(c => <Pokecard key={c.id} item={c} />)}
                </div>
            </div>
        );
    }
}

export default Pokedex;

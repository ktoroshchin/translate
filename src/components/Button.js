import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends Component {
    
    buttonText(value){
        return value === 'english' ? 'Submit' : 'Отправить'
    }

    buttonColor(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.buttonText(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    // static contextType = LanguageContext
    
    render(){
        // const text = this.context === 'english' ? 'Submit' : 'Отправить'
        return(
            <ColorContext.Consumer>
              {(color) => this.buttonColor(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;
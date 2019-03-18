import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
class Field extends Component {
    renderField(value){
        return value === 'english' ? 'Name' : 'Имя'
    }

    // static contextType = LanguageContext 
    
 render(){
    //  const text = this.context === 'english' ? 'Name' : 'Имя'
     return(
         <div className="ui field">
            <label>
                <LanguageContext>
                     {(value) => this.renderField(value)}
                </LanguageContext>
            </label>
            <input />
         </div>
     )
    }
};
export default Field;
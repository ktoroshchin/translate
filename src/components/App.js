import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguagSelector';

class App extends Component {

    state = {
        language: "english"
    }

    onLangSelect = (language, color) => {
        this.setState({
            language: language,
            color: color
        })
    }

    render(){
        return(
            <div className="ui container">
                <LanguageSelector onLangSelect={this.onLangSelect}/>
                <ColorContext.Provider value={this.state.color}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App;
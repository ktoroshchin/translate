import React, { Component } from 'react';

class LanguageSelector extends Component {

    render(){
        return(
            <div>
                Select language:
                <i onClick={() => this.props.onLangSelect("russian", "red")} className="ui flag ru"/>
                <i onClick={() => this.props.onLangSelect("english", "primary")} className="ui flag ca"/>
            </div>
        )
    }
}
export default LanguageSelector;
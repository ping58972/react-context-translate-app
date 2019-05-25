import React, { Component } from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
// import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

export class App extends Component {
    state = {language: 'english'}
    onLanguageChange = language => {
        this.setState({language});
    }
    render() {
        return (
            <div className="ui container">
                {/* <div>
                    Select a language:
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}/>
                </div> */}
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                            <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
                {/* <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value = {this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider> */}
                {/* <LanguageContext.Provider value = "dutch">
                    <UserCreate />
                </LanguageContext.Provider>
                <UserCreate /> */}
            </div>
        );
    }
}

export default App;


import React from 'react';
import './App.css';

import DatePickers from './component/form'

class App extends React.Component {
    render(){
        return (
            <div className={"App"}>
                <DatePickers/>
            </div>
        )
    }
}

export default App
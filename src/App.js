import './App.css';

import React, {Component} from 'react';
import Machine from "./components/Machine";


class App extends Component {
    state = {
        totalPoint:0,
    }

    changeTotalPoint=(pointToAdd)=>{
        this.setState(prev=>({
            totalPoint:prev.totalPoint+pointToAdd
        }))
    }
    render() {
        return (
            <div style={{flexDirection: 'column', display: 'flex', flex: 1}}>
                <div style={{
                    textAlign:'center'
                }}>
                    {
                        'סה"כ נקודות:'+this.state.totalPoint
                    }
                </div>
                <Machine
                    changeTotalPoint={this.changeTotalPoint}
                    machineTitle={"מכונה מספר 1"}
                    />
                <Machine
                    changeTotalPoint={this.changeTotalPoint}
                    machineTitle={"מכונה מספר 2"}
                    />
                <Machine
                    changeTotalPoint={this.changeTotalPoint}
                    machineTitle={"מכונה מספר 3"}
                />

            </div>
        );
    }

}

export default App;



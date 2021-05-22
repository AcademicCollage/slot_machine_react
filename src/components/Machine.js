import React, {Component} from 'react';

import Row from "./Row";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import {TYPE_OF_KEYBOARD} from "../utils/Utils";


class Machine extends Component {
    state = {
        difficulty: 3,
        refreshSlot:false
    }
    actionOnButtonPress= ()=>{
        this.setState({
            refreshSlot:true
        })
    }
    actionAfterFinishRowAction=async ()=>{
    await    this.setState({
            refreshSlot:false
        })
    }
    createMachine = () => {
        let machine = [];
        let index = 0;
        for (let i = 0; i < this.state.difficulty; i++) {
            const row = [];
            for (let j = 0; j < this.state.difficulty; j++) {
                row.push(index++)
            }
            machine.push(row);
        }
        return machine;
    }

    render() {
        return (
            <div style={{display: "flex", alignItems: 'center', flex: 1, flexDirection: 'column'}}>
                <div>
                    {
                        this.props.machineTitle
                    }
                </div>
                {
                    this.createMachine().map((item) => {
                        return <Row
                            difficulty={this.state.difficulty}
                            changeTotalPoint={this.props.changeTotalPoint}
                            actionAfterFinishRowAction={this.actionAfterFinishRowAction}
                            refreshSlot={this.state.refreshSlot}
                            key={item} item={item}/>
                    })
                }
                <div style={{display: "flex", justifyContent: 'space-evenly', flex: 1, flexDirection: 'row'}}>
                    <CustomButton onClick={this.actionOnButtonPress} title={"בדוק התאמות"}/>
                    <CustomInput
                        type={TYPE_OF_KEYBOARD.number}
                        placeholder={"שנה את מספר השורות"}
                        onChange={(event)=>{
                        this.setState({
                            difficulty:event.target.value
                        })
                    }}/>
                </div>
            </div>
        );
    }

}


export default Machine;



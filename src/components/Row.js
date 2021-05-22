import Slot from "./Slot";
import {TYPE_OF_SLOT} from "../utils/Utils";
import React, {Component} from 'react';


class Row extends Component {
    state = {
        row: [],
        needToCheckResult: true,
        roundIndex: 0,
        win:false
    }

    createRow = () => {
        let row = [];
        for (let i = 0; i < this.props.item.length; i++) {
            const randIndex = (Math.random() * (Object.keys(TYPE_OF_SLOT).length - 1)).toFixed()

            const item = Object.values(TYPE_OF_SLOT).find((item, index) => {

                return index == randIndex
            })
            row.push({
                slot: <Slot item={item}/>,
                type: item.type
            })
        }
        this.setState({
            row
        })
    }

    componentDidMount() {
        this.createRow();
    }

    createNewRowAndCheckResult = async () => {
        await this.setState({
            win:false,
            needToCheckResult: false
        })
        setTimeout(async () => {

            if (this.state.roundIndex % 3 == 0 && this.state.roundIndex > 0) {
                const itemToCheck=this.state.row[0].type
                let win=true
                 this.state.row.map((item)=>{
                    if(itemToCheck!=item.type){
                        win=false
                    }
                });
                if(win){

                    const scoreToAdd=Object.keys(TYPE_OF_SLOT).find((item)=>{

                        return TYPE_OF_SLOT[item].type==itemToCheck
                    })

                    this.props.changeTotalPoint(TYPE_OF_SLOT[scoreToAdd].score*this.props.difficulty);
                    this.setState({
                        win
                    })

                }


                await this.props.actionAfterFinishRowAction()
                this.setState({
                    roundIndex: 0,
                    needToCheckResult: true
                })
            } else {
                await this.setState(prev => ({

                    roundIndex: prev.roundIndex + 1
                }))
                this.createNewRowAndCheckResult()
                this.createRow();
            }
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.refreshSlot && this.state.needToCheckResult) {
            this.createNewRowAndCheckResult()

        }
    }


    render() {
        return (
            <div style={{display: 'flex', flex: 1, flexDirection: 'row',backgroundColor:this.state.win?'blue':undefined}}>
                {
                    this.state.row.map((slot) => {
                        return slot.slot
                    })
                }
            </div>
        );
    }
}

Row.propTypes = {};

export default Row;


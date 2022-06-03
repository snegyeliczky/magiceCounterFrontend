import React, {useRef, useState} from 'react';
import {Menu, Dropdown, Input, Button, Space} from 'antd';
import Styled from '../styled/components';
import {mathOperations} from "../utils/mathOperations";
import AddNumbers from "../utils/addNumbers";
import SavedNumber from "../components/SavedNumber";
import axios from "axios";
import {apiUrls} from "../utils/apiUrls";
import MenuItems from "./MenuItems";





const Counter = () => {
    const { add } =mathOperations;
    const [counter,setCounter] = useState(add);
    const [sum,setSum] = useState(0);
    const firsInput = useRef(0);
    const secondInput = useRef(0);

    const handleMenuClick = (e) => {
        setCounter(e.key);
    };

    const handelCount = () => {
        const result = AddNumbers(firsInput.current.input.value,secondInput.current.input.value,counter);
        setSum(result);
    };

    const saveResult = async () =>{
        const myNum = {myNum : sum};
        await axios.post(apiUrls.setMyNumber,myNum);
    };


    return (
        <Styled.Container>
            <SavedNumber/>
            <Styled.CounterContainer>
                <Input placeholder={'add Number'} defaultValue={0} type={"number"} ref={firsInput}/>
                <Dropdown overlay={<MenuItems handleMenuClick={handleMenuClick}/>}>
                    <Button>
                        {counter}
                    </Button>
                </Dropdown>
                <Input placeholder={'add Number'} defaultValue={0} type={"number"} ref={secondInput}/>
                <Button onClick={handelCount} >Count</Button>
            </Styled.CounterContainer>
            <Styled.SumContainer>
                <div>{sum}</div>
                <Button onClick={saveResult}>Save</Button>
            </Styled.SumContainer>
        </Styled.Container>
    );
};

export default Counter;
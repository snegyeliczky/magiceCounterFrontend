import React, {useEffect, useState} from 'react';
import Styled from '../styled/components';
import {Button} from "antd";
import axios from "axios";
import {apiUrls} from "../utils/apiUrls";

const SavedNumber = () => {
    const [savedNumber,setSavedNumber] = useState();

    const getMyNumber = async () =>{
        const myNumber = await axios.get(apiUrls.myNumber);
        setSavedNumber(myNumber.data.myNum);
    };

    return (
        <Styled.SumContainer>
            <div>{savedNumber}</div>
            <Button onClick={getMyNumber}>Get Memory</Button>
        </Styled.SumContainer>
    );
};

export default SavedNumber;
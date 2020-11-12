import React, {useState} from 'react';
import { homeObjOne } from '../components/InfoSection/Data';
import Dashborad from '../components/Dashboard/Dashboard';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Dashborad />
        </>
    )
}

export default Home

import { useQuery } from '@apollo/client';
import { SINGLE_POST } from '../utils/queries';
import Auth from '../utils/auth';

import Header from '../components/Header';
import NavTab from '../components/NavTab';


const Notifications = () => {
    
    const { loading, data } = useQuery(SINGLE_POST);
    const memory = data?.memory || [];

    return (
        <div>
            <Header />
            <NavTab />
            <h2>Notifications!</h2>
        </div>
    )
}

export default Notifications;
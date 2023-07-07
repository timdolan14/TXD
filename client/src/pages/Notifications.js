// import { useQuery } from '@apollo/client';
// import { SINGLE_POST } from '../utils/queries';
// import Auth from '../utils/auth';

import Header from '../components/Header';
import NavTab from '../components/NavTab';
import NotificationPage from '../components/NotificationsPage';


const Notifications = () => {

    return (
        <div>
            <Header />
            <NavTab />
            <NotificationPage />
        </div>
    )
}

export default Notifications;
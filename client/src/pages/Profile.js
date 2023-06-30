import { useQuery } from '@apollo/client';
import Dashboard from "../components/Dashboard";


import { ALL_POSTS_BY_USER } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {

    const { loading, data } = useQuery(ALL_POSTS_BY_USER);
    const memories = data?.memory || [];

    return (
        <div>
            <Dashboard/>
        </div>
    )
}

export default Profile;
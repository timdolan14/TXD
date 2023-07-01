import { useQuery } from '@apollo/client';

import { SINGLE_POST } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {

    const { loading, data } = useQuery(SINGLE_POST);
    const memory = data?.memory || [];

    return (
        <div>
        </div>
    )
}

export default Profile;
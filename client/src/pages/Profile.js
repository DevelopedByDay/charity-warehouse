

import {useParams, Redirect} from 'react-router-dom';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {QUERY_USER, QUERY_ME} from '../utils/queries';
import SavedCharities from '../components/SavedCharities';
import Auth from '../utils/auth';
import {ADD_CHARITY} from '../utils/mutations';


const Profile = () => {
    const {username: userParam} = useParams();
    const [addCharity] = useMutation(ADD_CHARITY);

    const {loading, data} = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: {username: userParam}
    });

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to = '/profile' />
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page.
            </h4>
        );
    }

    

    return (
        <div>
            <div>
                <h2>
                    Viewing {user.username}'s profile.
                </h2>
            </div>

            <div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Profile;
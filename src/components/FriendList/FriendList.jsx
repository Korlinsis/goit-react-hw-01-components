import PropTypes from 'prop-types';
import { FriendsList, FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <FriendItem key={friend.id}>
                    <FriendStatus status={friend.isOnline}></FriendStatus>
                    <FriendAvatar 
                        src={friend.avatar} 
                        alt="User avatar" 
                        width="48" 
                    />
                    <FriendName>{friend.name}</FriendName>
                </FriendItem>
            ))}
        </FriendsList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// FriendItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// };

export default FriendList;
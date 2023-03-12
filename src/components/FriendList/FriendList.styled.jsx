import styled from '@emotion/styled';

export const FriendsList = styled.ul`
    margin: 0 auto 100px;
    padding: 0;
    width: 350px;
    border-radius: 5px;
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px 12px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
        0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    background-color: #ffffff;
`;

export const FriendStatus = styled.span`
    display: inline-block;
    margin-right: 12px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => {
        switch (props.status) {
            case true: return 'green';
            default: return 'red';
        }
    }};
`;

export const FriendAvatar = styled.img`
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
        0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
`;

export const FriendName = styled.p`
    margin-left: 12px;
    font-size: 20px;
`;
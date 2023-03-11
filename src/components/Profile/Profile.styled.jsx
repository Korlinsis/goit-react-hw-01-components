import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
    margin: 100px auto;
    width: 350px;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const ProfileImage = styled.img`
    margin-top: 30px;
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    border-radius: 50%;
`;

export const UserName = styled.p`
    margin-top: 30px;
    font-size: 22px;
    font-weight: 700;
`;

export const UserTag = styled.p`
    margin: 15px 0;
    font-size: 18px;
    color: #497174;
`;

export const UserLocation = styled.p`
    margin-bottom: 20px;
    font-size: 18px;
    color: #497174;
`;

export const UserStats = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    background-color: #f3f6f9;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    padding: 15px;
    border: 1px solid #e7ecf2;
`;

export const StatsLabel = styled.span`
    margin-bottom: 10px;
    color: #497174;
`;

export const StatsQuantity = styled.span`
    font-size: 18px;
    font-weight: 700;
`;
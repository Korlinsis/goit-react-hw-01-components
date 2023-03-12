import styled from '@emotion/styled';

export const StattisticsDiv = styled.section`
    margin: 0 auto;
    width: 350px;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 20px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    color: #ffffff;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: ${getRandomHexColor};
`;

export const StatLabel = styled.span`
    font-size: 15px;
    margin-bottom: 8px;
`;

export const StatPercentage = styled.span`
    font-size: 18px;
    font-weight: 700;
`;
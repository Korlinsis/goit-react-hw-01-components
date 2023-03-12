import styled from '@emotion/styled';

export const StattisticsContainer = styled.section`
    margin: 0 auto 100px;
    width: 350px;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
        0px 2px 2px rgba(0, 0, 0, 0.12);
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
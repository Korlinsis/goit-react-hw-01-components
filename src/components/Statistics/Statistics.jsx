import PropTypes from 'prop-types';
import { StattisticsContainer, Title, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (
        <StattisticsContainer>
            {title && (<Title>{title}</Title>)}
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stat.id} style={{width: `${100 / stats.length}%`}}>
                        <StatLabel>{stat.label}</StatLabel>
                        <StatPercentage>{stat.percentage}%</StatPercentage>
                    </StatItem>
                ))}
            </StatList>
        </StattisticsContainer>
    );
};

Statistics.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
import {
  StatList,
  StatSection,
  Title,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <StatSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};

import TravelItem from './travel-item';
import classes from './travel-grid.module.css';

export default function TravelGrid({ travels }) {
  return (
    <ul className={classes.travels}>
      {travels.map((travel) => (
        <li key={travel.id}>
          <TravelItem {...travel} />
        </li>
      ))}
    </ul>
  );
}

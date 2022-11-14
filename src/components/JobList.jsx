import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'store/filters/filter-actions';
import { selectAllPositions } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const dispatch = useDispatch();
  const positions = useSelector(selectAllPositions);

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  );
};

export { JobList };

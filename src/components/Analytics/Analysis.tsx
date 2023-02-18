import { FC } from 'react';
import { AnalyticBlock } from '../AnalyticBlock/AnalyticBlock';
import { DropDown } from '../DropDown/DropDown';
import styles from './Analysis.module.css';
import { useStore } from 'effector-react';
import { dashboard } from '../../store/dataStore';

export const Analysis: FC = () => {
  const array = useStore(dashboard.$analysis);
  const options = useStore(dashboard.regionStore.$filters);
  const selected = useStore(dashboard.regionStore.$selectedFilter);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Аналитика</h1>
      <div className={styles.drop}>
        <DropDown
          options={options}
          value={selected}
          onChange={dashboard.regionStore.setSelectedFilter}
        />
      </div>
      <div className={styles.blocks}>
        {array &&
          array.map((e, index) => (
            <AnalyticBlock
              key={index}
              status={e.status}
              text={e.text}
              plot={e.plot}
            />
          ))}
      </div>
    </div>
  );
};

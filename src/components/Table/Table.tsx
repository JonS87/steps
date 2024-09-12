import React from 'react';
import { Workout } from '../../types/types';
import styles from './Table.module.css';

interface TableProps {
  workouts: Workout[];
  removeWorkout: (date: string) => void;
}

export const Table: React.FC<TableProps> = ({ workouts, removeWorkout }) => {
  const sortedWorkouts = [...workouts].sort((a, b) => {
    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split('.');
      const fullYear = year.length === 2 ? `20${year}` : year;
      return new Date(`${fullYear}-${month}-${day}`).getTime();
    };

    return parseDate(b.date) - parseDate(a.date);
  });

  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedWorkouts.map((workout) => (
          <tr key={workout.date}>
            <td>{workout.date}</td>
            <td>{workout.distance.toFixed(1)}</td>
            <td>
            <button className={styles['edit-button']}>✏️</button> {/* Кнопка-заглушка с карандашом */}
              <button className={styles['delete-button']} onClick={() => removeWorkout(workout.date)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

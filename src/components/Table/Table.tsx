import React from 'react';
import { Workout } from '../../types/types';
import styles from './Table.module.css';

interface TableProps {
  workouts: Workout[];
  removeWorkout: (date: string) => void;
}

export const Table: React.FC<TableProps> = ({ workouts, removeWorkout }) => {
  const sortedWorkouts = [...workouts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedWorkouts.map((workout) => (
          <tr key={workout.date}>
            <td>{new Date(workout.date).toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
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

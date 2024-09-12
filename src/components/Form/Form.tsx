import React, { useState } from 'react';
import { Workout } from '../../types/types';
import styles from './Form.module.css';

interface FormProps {
  addWorkout: (workout: Workout) => void;
}

export const Form: React.FC<FormProps> = ({ addWorkout }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && distance) {
      addWorkout({ date, distance: Number(distance) });
      setDate('');
      setDistance('');
    }
  };

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <div className={styles['input']}>
        <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
        <input
          className={styles['input-date']}
          id='date'
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles['distance']}>
        <label htmlFor='distance'>Пройдено км</label>
        <input
          className={styles['input-distance']}
          id='distance'
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value ? Number(e.target.value) : '')}
        />
      </div>
      <button className={styles['submit']} type="submit">OK</button>
    </form>
  );
};

import React, { useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { Workout } from './types/types';

const App: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = (newWorkout: Workout) => {
    setWorkouts((prevWorkouts) => {
      const existingWorkoutIndex = prevWorkouts.findIndex(
        (workout) => workout.date === newWorkout.date
      );

      if (existingWorkoutIndex !== -1) {
        const updatedWorkouts = [...prevWorkouts];
        updatedWorkouts[existingWorkoutIndex].distance += newWorkout.distance;
        return updatedWorkouts;
      }

      return [...prevWorkouts, newWorkout];
    });
  };

  const removeWorkout = (date: string) => {
    setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout.date !== date));
  };

  return (
    <>
      <h1>Тренировки и Прогулки</h1>
      <Form addWorkout={addWorkout} />
      <Table workouts={workouts} removeWorkout={removeWorkout} />
    </>
  );
};

export default App;

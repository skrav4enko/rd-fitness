export interface Workout {
  name: string;
  type: WorkoutType;
  strength?: Strength;
  endurance?: Endurance;
}

interface Strength {
  reps: number;
  sets: number;
  weight: number;
}

interface Endurance {
  distance: number;
  duration: number;
}

type WorkoutType = 'endurance' | 'strength';

import { WorkoutsPipe } from './workouts.pipe';
import { Workout } from '../../core/models/workout.model';

describe('WorkoutsPipe', () => {
  it('create an instance', () => {
    const pipe = new WorkoutsPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should transform endurance workout', () => {
      const pipe = new WorkoutsPipe();
      const enduranceMock = {
        name: 'test',
        type: 'endurance',
        endurance: {
          distance: 1,
          duration: 1,
        }
      } as Workout;
      const expectedResult = `Distance: ${enduranceMock.endurance.distance} km, Duration: ${enduranceMock.endurance.duration} min`;

      const result = pipe.transform(enduranceMock);

      expect(result).toBe(expectedResult)
    });

    it('should transform strength workout', () => {
      const pipe = new WorkoutsPipe();
      const enduranceMock = {
        name: 'test',
        type: 'strength',
        strength: {
          reps: 1,
          sets: 1,
          weight: 1,
        }
      } as Workout;
      const expectedResult = `Weight ${enduranceMock.strength.weight} kg, Reps: ${enduranceMock.strength.reps}, Sets: ${enduranceMock.strength.sets}`;

      const result = pipe.transform(enduranceMock);

      expect(result).toBe(expectedResult)
    });
  })
});

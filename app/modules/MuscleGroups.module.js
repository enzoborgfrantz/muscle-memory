class MuscleGroup {
  constructor(name, exercises) {
    this.name = name;
    this.exercises = exercises;
  }
}

const MuscleGroups = [new MuscleGroup('Biceps', ['Bicep Curls', 'Hammer Curls', 'Preacher Curls']),
  new MuscleGroup('Triceps', ['Dips', 'Pulldowns', 'Overhead Extensions', 'Skull Crushers']),
  new MuscleGroup('Chest', ['Push Ups', 'Dumbell Flys']),
  new MuscleGroup('Shoulders', ['Missionary Press', 'Lateral Raises']),
  new MuscleGroup('Back', ['Missionary Press', 'Lateral Raises']),
  new MuscleGroup('Legs', ['Missionary Press', 'Lateral Raises']),
  new MuscleGroup('Abs', ['Missionary Press', 'Lateral Raises'])];

export default MuscleGroups;

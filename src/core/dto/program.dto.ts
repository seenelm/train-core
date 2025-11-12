import {
  ProfileAccess,
  WorkoutDifficulty,
  Unit,
  BlockType,
  MeasurementType,
  MeasurementUnit,
} from "../enums";

export interface Phase {
  name: string;
  startWeek: number;
  endWeek: number;
}

export interface ProgramRequest {
  name: string;
  description?: string;
  types?: string[];
  numWeeks: number;
  hasNutritionProgram?: boolean;
  phases?: Phase[];
  accessType: ProfileAccess;
  admins: string[];
  createdBy: string;
  members?: string[];
  image?: string;
}

export interface WeekDetail {
  id: string;
  name?: string;
  description?: string;
  weekNumber: number;
  imageUrl?: string;
}

export interface ProgramResponse {
  id: string;
  name: string;
  description?: string;
  types?: string[];
  numWeeks: number;
  hasNutritionProgram?: boolean;
  phases?: Phase[];
  accessType: ProfileAccess;
  admins: string[];
  createdBy: string;
  members?: string[];
  weeks?: WeekDetail[];
  imageUrl?: string;
}

export interface WorkoutRequest {
  name: string;
  description?: string;
  category?: string[];
  difficulty?: WorkoutDifficulty;
  duration?: number;
  blocks?: Block[];
  exercises?: Exercise[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
}

export interface Block {
  type: BlockType;
  name?: string;
  targetSets?: number;
  description?: string;
  rest?: number;
  exercises: Exercise[];
  order: number;
}

export interface Measurement {
  measurementType: MeasurementType;
  measurementUnit: MeasurementUnit;
}

export interface Exercise {
  name: string;
  rest?: number;
  targetReps?: number;
  targetDurationSec?: number;
  targetWeight?: number;
  targetDistance?: number;
  notes?: string;
  order: number;
  sets?: number;
  hasSuperset?: boolean;
  measurement: Measurement;
}

export interface WorkoutResponse {
  id: string;
  versionId: number;
  name: string;
  description?: string;
  category?: string[];
  difficulty?: WorkoutDifficulty;
  duration?: number;
  blocks?: Block[];
  exercises?: Exercise[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
}

export interface WorkoutLogRequest {
  userId: string;
  workoutId: string;
  versionId: number;
  workoutSnapshot: WorkoutSnapshot;
  blockLogs?: BlockLog[];
  exerciseLogs?: ExerciseLog[];
  actualDuration: number;
  actualStartDate: Date;
  actualEndDate: Date;
  isCompleted: boolean;
}

export interface BlockLog {
  name?: string;
  actualRest?: number;
  actualSets?: number;
  exerciseLogs: ExerciseLog[];
  order: number;
  isCompleted: boolean;
}

export interface ExerciseLog {
  name: string;
  actualRest?: number;
  actualReps?: number;
  actualDurationSec?: number;
  actualWeight?: number;
  actualDistance?: number;
  isCompleted: boolean;
  order: number;
  actualSets?: number;
  actualMeasurement?: Measurement;
  hasSuperset?: boolean;
}

export interface WorkoutSnapshot {
  name: string;
  description?: string;
  category?: string[];
  difficulty?: WorkoutDifficulty;
  duration?: number;
  blockSnapshot?: BlockSnapshot[];
  exerciseSnapshot?: ExerciseSnapshot[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
}

export interface BlockSnapshot {
  type: BlockType;
  name?: string;
  targetSets?: number;
  description?: string;
  rest?: number;
  exerciseSnapshot: ExerciseSnapshot[];
  order: number;
}

export interface ExerciseSnapshot {
  name: string;
  rest?: number;
  targetReps?: number;
  targetDurationSec?: number;
  targetWeight?: number;
  targetDistance?: number;
  notes?: string;
  order: number;
  sets?: number;
  hasSuperset?: boolean;
  measurement: Measurement;
}

export interface WorkoutLogResponse {
  id: string;
  userId: string;
  workoutId: string;
  versionId: number;
  workoutSnapshot: WorkoutSnapshot;
  blockLogs?: BlockLog[];
  exerciseLogs?: ExerciseLog[];
  actualDuration: number;
  actualStartDate: Date;
  actualEndDate: Date;
  isCompleted: boolean;
}

export interface MealRequest {
  createdBy: string;
  mealName: string;
  macros?: Macros;
  ingredients?: Ingredient[];
  instructions?: string;
  startDate: Date;
  endDate: Date;
}

export interface MealResponse {
  id: string;
  versionId: number;
  createdBy: string;
  mealName: string;
  macros?: Macros;
  ingredients?: Ingredient[];
  instructions?: string;
  startDate: Date;
  endDate: Date;
}

export interface Macros {
  protein: number;
  carbs: number;
  fats: number;
}

export interface Portion {
  amount: number;
  unit: Unit;
}

export interface Ingredient {
  name: string;
  portion: Portion;
}

export interface MealLogRequest {
  versionId: number;
  userId: string;
  mealId: string;
  mealSnapshot: MealSnapshot;
  actualMacros?: Macros;
  actualIngredients?: Ingredient[];
  notes?: string;
  isCompleted: boolean;
  actualStartDate: Date;
  actualEndDate: Date;
}

export interface MealSnapshot {
  createdBy: string;
  mealName: string;
  macrosSnapshot?: MacrosSnapshot;
  ingredientSnapshot?: IngredientSnapshot[];
  instructions?: string;
  startDate: Date;
  endDate: Date;
}

export interface MacrosSnapshot {
  protein: number;
  carbs: number;
  fats: number;
}

export interface PortionSnapshot {
  amount: number;
  unit: Unit;
}

export interface IngredientSnapshot {
  name: string;
  portionSnapshot: PortionSnapshot;
}

export interface MealLogResponse {
  id: string;
  versionId: number;
  userId: string;
  mealId: string;
  mealSnapshot: MealSnapshot;
  actualMacros?: Macros;
  actualIngredients?: Ingredient[];
  notes?: string;
  isCompleted: boolean;
  actualStartDate: Date;
  actualEndDate: Date;
}

export interface NotesRequest {
  createdBy: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
}

export interface NotesResponse {
  id: string;
  createdBy: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
}

export interface WeekRequest {
  name?: string;
  description?: string;
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  image?: string;
}

export interface WeekResponse {
  id: string;
  name?: string;
  description?: string;
  weekNumber: number;
  workouts?: string[];
  meals?: string[];
  notes?: string[];
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
}

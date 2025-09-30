import { ProfileAccess, WorkoutDifficulty, Unit, BlockType } from "../enums";

export interface Phase {
  name: string;
  startWeek: number;
  endWeek: number;
}

export interface ProgramRequest {
  name: string;
  types?: string[];
  numWeeks: number;
  hasNutritionProgram?: boolean;
  phases?: Phase[];
  accessType: ProfileAccess;
  admins: string[];
  createdBy: string;
  members?: string[];
}

export interface WeekDetail {
  id: string;
  name?: string;
  description?: string;
  weekNumber: number;
}

export interface ProgramResponse {
  id: string;
  name: string;
  types?: string[];
  numWeeks: number;
  hasNutritionProgram?: boolean;
  phases?: Phase[];
  accessType: ProfileAccess;
  admins: string[];
  createdBy: string;
  members?: string[];
  weeks?: WeekDetail[];
}

export interface WorkoutRequest {
  name: string;
  description?: string;
  category?: string[];
  difficulty?: WorkoutDifficulty;
  duration?: number;
  blocks?: Block[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
}

export interface Block {
  type: BlockType;
  name?: string;
  description?: string;
  restBetweenExercisesSec?: number;
  restAfterBlockSec?: number;
  exercises: Exercise[];
  order: number;
}

export interface Exercise {
  name: string;
  targetSets?: number;
  targetReps?: number;
  targetDurationSec?: number;
  targetWeight?: number;
  notes?: string;
  order: number;
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
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
}

export interface WorkoutLogRequest {
  userId: string;
  workoutId: string;
  versionId: number;
  workoutSnapshot: WorkoutSnapshot;
  blockLogs?: BlockLog[];
  actualDuration: number;
  actualStartDate: Date;
  actualEndDate: Date;
  isCompleted: boolean;
}

export interface BlockLog {
  actualRestBetweenExercisesSec?: number;
  actualRestAfterBlockSec?: number;
  exerciseLogs: ExerciseLog[];
  order: number;
  isCompleted: boolean;
}

export interface ExerciseLog {
  name: string;
  actualSets?: number;
  actualReps?: number;
  actualDurationSec?: number;
  actualWeight?: number;
  isCompleted: boolean;
  order: number;
}

export interface WorkoutSnapshot {
  name: string;
  description?: string;
  category?: string[];
  difficulty?: WorkoutDifficulty;
  duration?: number;
  blockSnapshot: BlockSnapshot[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
}

export interface BlockSnapshot {
  type: BlockType;
  name?: string;
  description?: string;
  restBetweenExercisesSec?: number;
  restAfterBlockSec?: number;
  exerciseSnapshot: ExerciseSnapshot[];
  order: number;
}

export interface ExerciseSnapshot {
  name: string;
  targetSets?: number;
  targetReps?: number;
  targetDurationSec?: number;
  targetWeight?: number;
  notes?: string;
  order: number;
}

export interface WorkoutLogResponse {
  id: string;
  userId: string;
  workoutId: string;
  versionId: number;
  workoutSnapshot: WorkoutSnapshot;
  blockLogs: BlockLog[];
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
  macrosSnapshot: MacrosSnapshot;
  ingredientSnapshot: IngredientSnapshot[];
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
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
}

export interface NotesResponse {
  id: string;
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
}

export interface WeekResponse {
  id: string;
  name?: string;
  description?: string;
  weekNumber: number;
  workouts?: WorkoutResponse[];
  meals?: MealResponse[];
  notes?: NotesResponse[];
  startDate: Date;
  endDate: Date;
}

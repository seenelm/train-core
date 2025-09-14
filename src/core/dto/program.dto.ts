import { ProfileAccess } from "../enums";

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
  weeks?: string[];
}

export interface WorkoutRequest {
  name: string;
  description?: string;
  category?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  duration?: number;
  blocks: Block[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
}

export interface Block {
  type: "single" | "superset" | "cluster" | "circuit";
  name?: string;
  description?: string;
  restBetweenExercisesSec?: number;
  restAfterBlockSec?: number;
  exercises: Exercise[];
  order: number;
}

export interface Exercise {
  exerciseId: string;
  targetSets?: number;
  targetReps?: number;
  targetDurationSec?: number;
  targetWeight?: number;
  notes?: string;
  order: number;
}

export interface WorkoutResponse {
  id: string;
  name: string;
  description?: string;
  category?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  duration?: number;
  blocks: Block[];
  accessType: ProfileAccess;
  createdBy: string;
  startDate: Date;
  endDate: Date;
}

export interface WorkoutLogRequest {
  userId: string;
  workoutId: string;
  blockLogs: BlockLog[];
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
  exerciseId: string;
  actualSets?: number;
  actualReps?: number;
  actualDurationSec?: number;
  actualWeight?: number;
  isCompleted: boolean;
  order: number;
}

export interface WorkoutLogResponse {
  id: string;
  userId: string;
  workoutId: string;
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

export enum Unit {
  Gram = "g",
  Kilogram = "kg",
  Ounce = "oz",
  Pound = "lb",
  Milliliter = "ml",
  Liter = "l",
  Cup = "cup",
  Tablespoon = "tbsp",
  Teaspoon = "tsp",
  Piece = "piece",
}

export interface MealLogRequest {
  userId: string;
  mealId: string;
  actualMacros?: Macros;
  actualIngredients?: Ingredient[];
  notes?: string;
  isCompleted: boolean;
  actualStartDate: Date;
  actualEndDate: Date;
}

export interface MealLogResponse {
  id: string;
  userId: string;
  mealId: string;
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

export interface WeekResponse {
  id: string;
  weekNumber: number;
  workouts?: WorkoutResponse[];
  meals?: MealResponse[];
  notes?: NotesResponse[];
  startDate: Date;
  endDate: Date;
}

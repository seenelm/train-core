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
  createdBy: string;
}

export interface ProgramResponse {
  id: string;
  name: string;
  types?: string[];
  numWeeks: number;
  hasNutritionProgram?: boolean;
  phases?: Phase[];
  accessType: ProfileAccess;
  createdBy: string;
}

export interface ExerciseRequest {
  name?: string;
  group?: string;
  imagePath?: string;
  weight?: string;
  targetSets?: number;
  targetReps?: number;
  notes?: string;
  completed?: boolean;
  createdBy: string;
  sets: string[];
}

export interface ExerciseResponse {
  id: string;
  name?: string;
  group?: string;
  imagePath?: string;
  weight?: string;
  targetSets?: number;
  targetReps?: number;
  notes?: string;
  completed?: boolean;
  createdBy: string;
  sets: string[];
}

export interface SetRequest {
  weight?: number;
  reps?: number;
  completed?: boolean;
  imagePath?: string;
  link?: string;
  createdBy: string;
}

export interface SetResponse {
  id: string;
  weight?: number;
  reps?: number;
  completed?: boolean;
  imagePath?: string;
  link?: string;
  createdBy: string;
}

export interface WeekRequest {
  programId: string;
  name: string;
  description?: string;
  imagePath?: string;
  weekNumber: number;
  workouts: string[];
}

export interface WeekResponse {
  id: string;
  programId: string;
  name: string;
  description?: string;
  imagePath?: string;
  weekNumber: number;
  workouts: string[];
}

export interface WorkoutRequest {
  title?: string;
  description?: string;
  imagePath?: string;
  completed?: boolean;
  createdBy: string;
  exercises: string[];
}

export interface WorkoutResponse {
  id: string;
  title?: string;
  description?: string;
  imagePath?: string;
  completed?: boolean;
  createdBy: string;
  exercises: string[];
}

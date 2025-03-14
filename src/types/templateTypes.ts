/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

export interface templateTypes {
  id: string;
  name: string;
  author?: string;
  authorUrl?: string;
  preview?: string; // Image URL
  mode?: number; //Development mode or Production mode
  components: {
    component: ComponentType<any>; // 🔥 Keep this as a real React component
    data: Record<string, any>;
    settings?: {
      colors?: Record<string, string | any>;
      typography?: Record<string, string | number | any>;
      spacing?: Record<string, string | number>;
      layout?: Record<string, string | number>;
      border?: Record<string, string | number>;
      shadows?: Record<string, string>;
      [key: string]: Record<string, any> | undefined;
    };
  }[];
  metadata?: {
    description?: string;
    version?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  theme?: {
    name?: string;
    variant?: string;
  };
  globalSettings?: Record<string, any>;
  customData?: Record<string, any>;
}

// 🔹 Temporary type for JSON loading (stores components as strings)
export interface templateJsonType {
  id: string;
  name: string;
  author?: string;
  authorUrl?: string;
  preview?: string;
  components: {
    component: string; // 🔥 Store as a string in JSON
    data: Record<string, any>;
    settings?: Record<string, any>;
  }[];
  metadata?: Record<string, any>;
  theme?: Record<string, any>;
  globalSettings?: Record<string, any>;
  customData?: Record<string, any>;
}

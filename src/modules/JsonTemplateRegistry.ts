/* eslint-disable @typescript-eslint/no-explicit-any */
import TemplateManagerAPI from "./templateManagerAPI";
import { templateTypes, templateJsonType } from "../types/templateTypes";
import axios from "axios";
import { ComponentType } from "react";

// import ContributionTable from "../components/ContributionTable";
// import ContributionDashboard from "../components/ContributionDashboard";
// import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

// Define a component map for dynamic resolution
const componentMap: Record<string, ComponentType<any>> = {
  // ContributionTable,
  // ContributionDashboard,
  // Signup,
  Dashboard,
};

// Function to load templates and register them with TemplateManagerAPI
export const loadTemplates = async (): Promise<void> => {
  try {
    // Fetch template JSON
    const response = await axios.get<{ templates: templateJsonType[] }>("/powergroup/templates.json");
    const jsonTemplates = response.data.templates;

    // Convert JSON structure to match `templateTypes`
    const templates: templateTypes[] = jsonTemplates.map((template) => ({
      ...template,
      components: template.components.map(({ component, data, settings }) => ({
        // 🔥 Convert component name string to actual React component
        component: componentMap[component] || (() => null),
        data,
        settings,
      })),
    }));

    // Register each template
    templates.forEach((template) => {
      TemplateManagerAPI.registerTemplate(template);
    });

    console.log("JsonTemplateRegistry: Templates successfully loaded and registered.");
  } catch (error) {
    console.error("Error loading templates:", error);
  }
};


// Load templates on startup
loadTemplates();


export default {};

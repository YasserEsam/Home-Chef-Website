import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Search meals by name
export const searchMeals = async (query: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php?s=${query}`);
    return response.data.meals || []; 
  } catch (error) {
    console.error("Error fetching meals by name:", error);
    throw new Error("Failed to fetch meals.");
  }
};

// Get meal categories
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories.php`);
    return response.data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories.");
  }
};

// Get a random meal
export const getRandomMeal = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/random.php`);
    return response.data.meals[0] || null;
  } catch (error) {
    console.error("Error fetching random meal:", error);
    throw new Error("Failed to fetch random meal.");
  }
};

// Lookup meal by ID
export const getMealById = async (mealId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0] || null;
  } catch (error) {
    console.error("Error fetching meal by ID:", error);
    throw new Error("Failed to fetch meal.");
  }
};

// Filter meals by main ingredient (e.g., chicken breast)
export const filterMealsByIngredient = async (ingredient: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    return response.data.meals || [];
  } catch (error) {
    console.error(`Error fetching meals with ingredient ${ingredient}:`, error);
    throw new Error("Failed to fetch meals by ingredient.");
  }
};

// Filter meals by category (e.g., Seafood)
export const filterMealsByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/filter.php?c=${category}`);
    return response.data.meals || [];
  } catch (error) {
    console.error(`Error fetching meals by category ${category}:`, error);
    throw new Error("Failed to fetch meals by category.");
  }
};

// Get a list of ingredients
export const getIngredientsList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
    return response.data.ingredients || [];
  } catch (error) {
    console.error("Error fetching ingredients list:", error);
    throw new Error("Failed to fetch ingredients.");
  }
};

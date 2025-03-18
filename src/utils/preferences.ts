
interface UserPreferences {
  favoriteAttraction?: string;
  lastVisit?: Date;
  visitCount?: number;
}

// Get user preferences from cookies
export const getPreferences = (): UserPreferences => {
  const prefsString = localStorage.getItem('userPreferences');
  
  if (!prefsString) {
    return {};
  }
  
  try {
    return JSON.parse(prefsString) as UserPreferences;
  } catch (error) {
    console.error('Error parsing user preferences:', error);
    return {};
  }
};

// Save user preferences to cookies
export const savePreferences = (prefs: Partial<UserPreferences>): void => {
  const currentPrefs = getPreferences();
  const updatedPrefs = { ...currentPrefs, ...prefs };
  
  // Update visit count and last visit time
  updatedPrefs.lastVisit = new Date();
  updatedPrefs.visitCount = (currentPrefs.visitCount || 0) + 1;
  
  localStorage.setItem('userPreferences', JSON.stringify(updatedPrefs));
};

// Clear user preferences
export const clearPreferences = (): void => {
  localStorage.removeItem('userPreferences');
};

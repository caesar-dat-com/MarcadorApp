import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Match {
    id: string;
    date: string;
    winner: string;
    score: string;
    player1Name: string;
    player2Name: string;
}

const STORAGE_KEY = '@marcador_app_history';

export const StorageService = {
    saveMatch: async (matchData: Omit<Match, 'id' | 'date'>) => {
        try {
            const existingHistoryJson = await AsyncStorage.getItem(STORAGE_KEY);
            const history: Match[] = existingHistoryJson ? JSON.parse(existingHistoryJson) : [];

            const newMatch: Match = {
                id: Date.now().toString(),
                date: new Date().toLocaleDateString(),
                ...matchData,
            };

            const updatedHistory = [newMatch, ...history];
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
        } catch (error) {
            console.error('Error saving match:', error);
        }
    },

    getHistory: async (): Promise<Match[]> => {
        try {
            const historyJson = await AsyncStorage.getItem(STORAGE_KEY);
            return historyJson ? JSON.parse(historyJson) : [];
        } catch (error) {
            console.error('Error loading history:', error);
            return [];
        }
    },

    clearHistory: async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error('Error clearing history:', error);
        }
    },
};

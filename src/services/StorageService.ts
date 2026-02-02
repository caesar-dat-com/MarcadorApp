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
    saveMatch: async (matchData: Omit<Match, 'id' | 'date'>): Promise<boolean> => {
        try {
            const existingHistoryJson = localStorage.getItem(STORAGE_KEY);
            const history: Match[] = existingHistoryJson ? JSON.parse(existingHistoryJson) : [];

            const newMatch: Match = {
                id: Date.now().toString(),
                date: new Date().toLocaleDateString(),
                ...matchData,
            };

            const updatedHistory = [newMatch, ...history];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
            return true;
        } catch (error) {
            console.error('storage.saveMatch.failed', { error });
            return false;
        }
    },

    getHistory: async (): Promise<Match[]> => {
        try {
            const historyJson = localStorage.getItem(STORAGE_KEY);
            return historyJson ? JSON.parse(historyJson) : [];
        } catch (error) {
            console.error('Error loading history:', error);
            return [];
        }
    },

    clearHistory: async () => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error('Error clearing history:', error);
        }
    },
};

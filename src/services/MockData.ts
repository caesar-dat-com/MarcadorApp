export interface User {
    id: string;
    name: string;
    avatarUrl: string; // Placeholder string
    rank: string;
    level: number;
    stats: {
        matches: number;
        wins: number;
        winRate: string;
    };
}

export interface Booking {
    id: string;
    courtName: string;
    time: string;
    hostName: string;
    playersCurrent: number;
    playersMax: number;
    isChallengeable: boolean;
}

export const CURRENT_USER: User = {
    id: 'u1',
    name: 'CesarGamer',
    avatarUrl: 'https://ui-avatars.com/api/?name=Cesar+Gamer&background=0D8ABC&color=fff',
    rank: 'Diamond II',
    level: 42,
    stats: {
        matches: 128,
        wins: 84,
        winRate: '65%'
    }
};

export const MOCK_BOOKINGS: Booking[] = [
    {
        id: 'b1',
        courtName: 'Cancha Central',
        time: '18:00 - 19:30',
        hostName: 'Team Alpha',
        playersCurrent: 4,
        playersMax: 5, // "Faltan 1"
        isChallengeable: true
    },
    {
        id: 'b2',
        courtName: 'Cancha Norte',
        time: '19:30 - 21:00',
        hostName: 'Los Primos',
        playersCurrent: 10,
        playersMax: 10, // Full
        isChallengeable: true
    },
    {
        id: 'b3',
        courtName: 'Cancha Sur',
        time: '20:00 - 21:30',
        hostName: 'Novatos FC',
        playersCurrent: 2,
        playersMax: 5, // "Faltan 3"
        isChallengeable: false
    }
];

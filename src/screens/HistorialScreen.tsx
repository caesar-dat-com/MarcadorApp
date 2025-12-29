import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StorageService, Match } from '../services/StorageService';
import GlassContainer from '../components/GlassContainer';

const HistorialScreen = () => {
    const [matches, setMatches] = useState<Match[]>([]);

    const loadHistory = async () => {
        const history = await StorageService.getHistory();
        setMatches(history);
    };

    useFocusEffect(
        useCallback(() => {
            loadHistory();
        }, [])
    );

    const handleClearHistory = async () => {
        Alert.alert(
            'Borrar Historial',
            '¿Estás seguro de que quieres borrar todos los partidos?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Borrar',
                    style: 'destructive',
                    onPress: async () => {
                        await StorageService.clearHistory();
                        loadHistory();
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }: { item: Match }) => (
        <GlassContainer style={styles.card} intensity={15}>
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.score}>{item.score}</Text>
                </View>
                <Text style={styles.winner}>Ganador: {item.winner}</Text>
                <Text style={styles.matchDetails}>{item.player1Name} vs {item.player2Name}</Text>
            </View>
        </GlassContainer>
    );

    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay partidos registrados aún.</Text>
        </View>
    );

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Historial</Text>
                    {matches.length > 0 && (
                        <TouchableOpacity onPress={handleClearHistory} style={styles.clearButton}>
                            <Text style={styles.clearButtonText}>Borrar</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <FlatList
                    data={matches}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={renderEmptyComponent}
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent', // Show background
    },
    header: {
        padding: 20,
        paddingTop: 10,
        // No border for clean glass look
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 34,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    clearButton: {
        padding: 8,
        backgroundColor: 'rgba(255, 59, 48, 0.2)', // Red tint
        borderRadius: 12,
    },
    clearButtonText: {
        color: '#FF3B30',
        fontSize: 14,
        fontWeight: '600',
    },
    list: {
        padding: 16,
        paddingBottom: 100, // Space for tab bar
        flexGrow: 1,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    emptyText: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 18,
        fontStyle: 'italic',
    },
    card: {
        borderRadius: 20,
        marginBottom: 16,
        overflow: 'hidden',
    },
    cardContent: {
        padding: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
    },
    date: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    score: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '900',
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    winner: {
        color: '#30D158', // Green
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
    },
    matchDetails: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
    }
});

export default HistorialScreen;

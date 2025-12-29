import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import GlassContainer from '../components/GlassContainer';
import { CURRENT_USER } from '../services/MockData';

const ProfileScreen = () => {
    const user = CURRENT_USER;

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>

                    {/* Header Avatar */}
                    <View style={styles.avatarSection}>
                        <View style={styles.avatarContainer}>
                            <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
                        </View>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.userRank}>{user.rank} • Lvl {user.level}</Text>
                    </View>

                    {/* Stats Cards */}
                    <View style={styles.statsRow}>
                        <GlassContainer style={styles.statCard} intensity={25}>
                            <View style={styles.statContent}>
                                <Text style={styles.statValue}>{user.stats.wins}</Text>
                                <Text style={styles.statLabel}>VICTORIAS</Text>
                            </View>
                        </GlassContainer>
                        <GlassContainer style={styles.statCard} intensity={25}>
                            <View style={styles.statContent}>
                                <Text style={styles.statValue}>{user.stats.winRate}</Text>
                                <Text style={styles.statLabel}>WIN RATE</Text>
                            </View>
                        </GlassContainer>
                    </View>

                    {/* Detailed Stats / Bio */}
                    <GlassContainer style={styles.wideCard} intensity={15}>
                        <View style={styles.wideContent}>
                            <Text style={styles.sectionTitle}>Estadísticas de Temporada</Text>
                            <View style={styles.row}>
                                <Text style={styles.label}>Total Partidos</Text>
                                <Text style={styles.value}>{user.stats.matches}</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.row}>
                                <Text style={styles.label}>Racha Actual</Text>
                                <Text style={styles.value}>3 🔥</Text>
                            </View>
                        </View>
                    </GlassContainer>

                </ScrollView>
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
        backgroundColor: 'transparent',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
        alignItems: 'center',
    },
    avatarSection: {
        marginTop: 50,
        marginBottom: 40,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 0, // No heavy border
        marginBottom: 16,
        overflow: 'hidden',
        // Floating shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 15,
        backgroundColor: '#1C1C1E',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    userName: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 6,
        letterSpacing: 0.3,
    },
    userRank: {
        color: '#FFD60A', // Gold
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.5,
        backgroundColor: 'rgba(255, 214, 10, 0.15)',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        overflow: 'hidden',
    },
    statsRow: {
        flexDirection: 'row',
        gap: 16,
        width: '100%',
        marginBottom: 24,
    },
    statCard: {
        flex: 1,
        height: 140, // Taller cards
        borderRadius: 24,
    },
    statContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    statValue: {
        color: '#fff',
        fontSize: 38, // Huge
        fontWeight: '300', // Thin
        fontVariant: ['tabular-nums'],
    },
    statLabel: {
        color: '#0A84FF', // Accent Color
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 0.5,
        marginTop: 8,
        textTransform: 'uppercase',
    },
    wideCard: {
        width: '100%',
        borderRadius: 28,
        marginBottom: 24,
    },
    wideContent: {
        padding: 24,
    },
    sectionTitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        letterSpacing: 0.3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    label: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 17,
        fontWeight: '400',
    },
    value: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
        fontVariant: ['tabular-nums'],
    },
    divider: {
        height: 0.5, // Hairline
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginVertical: 4,
    },
});

export default ProfileScreen;

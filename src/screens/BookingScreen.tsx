import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import GlassContainer from '../components/GlassContainer';
import { MOCK_BOOKINGS, Booking } from '../services/MockData';

const BookingScreen = () => {
    const [bookings] = useState<Booking[]>(MOCK_BOOKINGS);

    const handleChallenge = (booking: Booking) => {
        Alert.alert(
            '🔥 RETADOR EN CAMINO',
            `Has retado a **${booking.hostName}** en la ${booking.courtName}.`,
            [{ text: '¡A DARLE!', onPress: () => console.log('Challenge Sent') }]
        );
    };

    const handleReserve = () => {
        Alert.alert('Reserva', 'Función de crear nueva reserva próximamente.');
    };

    const renderItem = ({ item }: { item: Booking }) => {
        const missing = item.playersMax - item.playersCurrent;
        const isFull = missing <= 0;

        return (
            <GlassContainer style={styles.card} intensity={20}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.courtName}>{item.courtName}</Text>
                        <View style={[styles.badge, isFull ? styles.badgeFull : styles.badgeOpen]}>
                            <Text style={styles.badgeText}>
                                {isFull ? 'LLENO' : `FALTAN ${missing}`}
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.hostName}>Host: {item.hostName}</Text>
                    <Text style={styles.time}>{item.time}</Text>

                    <View style={styles.actions}>
                        {item.isChallengeable && (
                            <TouchableOpacity
                                style={[styles.actionBtn, styles.btnChallenge]}
                                onPress={() => handleChallenge(item)}
                            >
                                <Text style={styles.btnText}>🔥 RETAR</Text>
                            </TouchableOpacity>
                        )}
                        {!isFull && (
                            <TouchableOpacity
                                style={[styles.actionBtn, styles.btnJoin]}
                                onPress={() => Alert.alert('Unirse', 'Te has unido al partido.')}
                            >
                                <Text style={styles.btnText}>UNIRSE</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </GlassContainer>
        );
    };

    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Canchas Activas</Text>
                    <TouchableOpacity style={styles.reserveBtn} onPress={handleReserve}>
                        <Text style={styles.reserveBtnText}>+ RESERVAR</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={bookings}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
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
        backgroundColor: 'transparent',
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    reserveBtn: {
        backgroundColor: '#30D158',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    reserveBtnText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 12,
    },
    list: {
        padding: 16,
        paddingBottom: 100,
    },
    card: {
        borderRadius: 20,
        marginBottom: 16,
    },
    cardContent: {
        padding: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    courtName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    badge: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    badgeFull: {
        backgroundColor: 'rgba(255, 69, 58, 0.3)', // Red
    },
    badgeOpen: {
        backgroundColor: 'rgba(10, 132, 255, 0.3)', // Blue
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '800',
    },
    hostName: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        marginBottom: 4,
    },
    time: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
        marginBottom: 20,
    },
    actions: {
        flexDirection: 'row',
        gap: 10,
    },
    actionBtn: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnChallenge: {
        backgroundColor: 'rgba(255, 69, 58, 0.2)', // Red Tint
        borderWidth: 1,
        borderColor: 'rgba(255, 69, 58, 0.5)',
    },
    btnJoin: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    btnText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
        textTransform: 'uppercase',
    },
});

export default BookingScreen;

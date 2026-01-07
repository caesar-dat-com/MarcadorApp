import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonCard } from '../components/CartoonCard';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonBadge } from '../components/CartoonBadge';
import { CartoonTheme as T } from '../theme/cartoonTheme';
import { CURRENT_USER } from '../services/MockData';

const ProfileScreen = () => {
    const user = CURRENT_USER;

    const handleEditProfile = () => {
        Alert.alert('Perfil', 'Próximamente podrás editar tus datos.');
    };

    return (
        <CartoonBackground>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Header Avatar Section */}
                <CartoonCard style={styles.headerCard}>
                    <View style={styles.avatarWrapper}>
                        <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
                    </View>
                    <Text style={styles.userName}>{user.name} 👤</Text>
                    <CartoonBadge text={`${user.rank} • Lvl ${user.level}`} tone="purple" />

                    <CartoonButton
                        title="EDITAR PERFIL"
                        leftEmoji="✏️"
                        variant="ghost"
                        onPress={handleEditProfile}
                        style={{ marginTop: T.spacing.md, width: '100%' }}
                    />
                </CartoonCard>

                {/* Stats Grid */}
                <View style={styles.statsRow}>
                    <CartoonCard style={styles.statCard}>
                        <Text style={styles.statValue}>{user.stats.wins}</Text>
                        <Text style={styles.statLabel}>VICTORIAS 🏆</Text>
                    </CartoonCard>
                    <CartoonCard style={styles.statCard}>
                        <Text style={styles.statValue}>{user.stats.winRate}</Text>
                        <Text style={styles.statLabel}>WIN RATE 📈</Text>
                    </CartoonCard>
                </View>

                {/* Detailed Stats */}
                <CartoonCard style={styles.detailsCard}>
                    <Text style={styles.sectionTitle}>TEMPORADA ACTUAL 🌟</Text>

                    <View style={styles.statLine}>
                        <Text style={styles.label}>Total Partidos</Text>
                        <Text style={styles.value}>{user.stats.matches}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.statLine}>
                        <Text style={styles.label}>Racha Actual</Text>
                        <Text style={styles.value}>3 🔥</Text>
                    </View>

                    <CartoonButton
                        title="VER LOGROS"
                        leftEmoji="🏅"
                        variant="blue"
                        onPress={() => Alert.alert('Logros', '¡Sigue jugando para desbloquear más!')}
                        style={{ marginTop: T.spacing.md }}
                    />
                </CartoonCard>

            </ScrollView>
        </CartoonBackground>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 110,
        gap: T.spacing.md,
    },
    headerCard: {
        alignItems: 'center',
        paddingVertical: T.spacing.xl,
        marginTop: T.spacing.md,
    },
    avatarWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: T.colors.bg,
        borderWidth: 4,
        borderColor: T.colors.border,
        marginBottom: T.spacing.md,
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    userName: {
        color: T.colors.text,
        fontSize: 26,
        fontWeight: '900',
        marginBottom: 8,
    },
    statsRow: {
        flexDirection: 'row',
        gap: T.spacing.md,
    },
    statCard: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: T.spacing.lg,
    },
    statValue: {
        color: T.colors.text,
        fontSize: 32,
        fontWeight: '900',
    },
    statLabel: {
        color: T.colors.muted,
        fontSize: 12,
        fontWeight: '800',
        marginTop: 4,
    },
    detailsCard: {
        padding: T.spacing.lg,
    },
    sectionTitle: {
        color: T.colors.text,
        fontSize: 18,
        fontWeight: '900',
        marginBottom: T.spacing.md,
    },
    statLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    label: {
        color: T.colors.muted,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 0,
    },
    value: {
        color: T.colors.text,
        fontSize: 16,
        fontWeight: '900',
    },
    divider: {
        height: 2,
        backgroundColor: T.colors.border,
        marginVertical: 4,
    },
});

export default ProfileScreen;

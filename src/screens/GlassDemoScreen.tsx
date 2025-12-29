import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LiquidBackground from '../components/LiquidBackground';
import GlassContainer from '../components/GlassContainer';
import GlowCard from '../components/GlowCard';
import Svg, { Path } from 'react-native-svg';

// Icons using Svg
const HomeIcon = () => (
    <Svg width="40" height="40" viewBox="0 0 24 24" fill="white">
        <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
);

const WifiIcon = () => (
    <Svg width="40" height="40" viewBox="0 0 24 24" fill="white">
        <Path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" opacity="0.3" />
        <Path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z" />
    </Svg>
);

const GlassDemoScreen = () => {
    return (
        <View style={styles.screen}>
            <LiquidBackground />
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.headerTitle}>Liquid Glass UI</Text>

                    {/* 1. Large Glass Container (Music Player style) */}
                    <GlassContainer style={styles.musicContainer} size="large">
                        <Text style={styles.sectionTitle}>Now Playing</Text>
                        <View style={styles.playerRow}>
                            <View style={styles.albumArt} />
                            <View>
                                <Text style={styles.songTitle}>All Of Me</Text>
                                <Text style={styles.artistName}>Nao</Text>
                            </View>
                        </View>
                    </GlassContainer>

                    {/* 2. Glow Cards Row */}
                    <Text style={styles.sectionTitle}>Interactive Cards</Text>
                    <View style={styles.cardsRow}>
                        <GlowCard title="Home" icon={<HomeIcon />} />
                        <GlowCard title="Wifi" icon={<WifiIcon />} />
                    </View>

                    {/* 3. Small Glass Containers */}
                    <View style={styles.row}>
                        <GlassContainer size="small" style={styles.smallBox}>
                            <Text style={styles.boxText}>Search</Text>
                        </GlassContainer>
                        <GlassContainer size="small" style={styles.smallBox}>
                            <Text style={styles.boxText}>Settings</Text>
                        </GlassContainer>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        gap: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'System', // iOS default, Android default sans-serif
    },
    sectionTitle: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        fontWeight: '600',
    },
    musicContainer: {
        marginBottom: 20,
    },
    playerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    albumArt: {
        width: 60,
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 12,
        marginRight: 16,
    },
    songTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    artistName: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },
    cardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    row: {
        flexDirection: 'row',
        gap: 16,
    },
    smallBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold',
    }

});

export default GlassDemoScreen;

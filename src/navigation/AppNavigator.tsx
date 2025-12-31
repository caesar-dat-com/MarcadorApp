import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// Native libraries removed for stability
// import { BlurView } from '@react-native-community/blur';
// import { Home, ClipboardList, User } from 'lucide-react-native';

// Import Screens
import MarcadorScreen from '../screens/MarcadorScreen';
import HistorialScreen from '../screens/HistorialScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingScreen from '../screens/BookingScreen';

const Tab = createBottomTabNavigator();

/**
 * Simulated Glass Tab Bar Background
 */
const GlassTabBarBackground = () => {
    return (
        <View style={styles.glassBackground} />
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                    tabBarBackground: () => <GlassTabBarBackground />,
                    tabBarActiveTintColor: '#0A84FF',
                    tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name="Marcador"
                    component={MarcadorScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>🏠</Text>,
                    }}
                />
                <Tab.Screen
                    name="Reservas"
                    component={BookingScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>📅</Text>,
                    }}
                />
                <Tab.Screen
                    name="Historial"
                    component={HistorialScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>📜</Text>,
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>👤</Text>,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: 'transparent',
        height: 70,
        borderTopWidth: 0,
        borderWidth: 0,
    },
    glassBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(20, 20, 20, 0.85)', // Darker for better contrast
        borderRadius: 35,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
});

export default AppNavigator;

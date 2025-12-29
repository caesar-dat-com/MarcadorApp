import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

import MarcadorScreen from '../screens/MarcadorScreen';
import HistorialScreen from '../screens/HistorialScreen';

const Tab = createBottomTabNavigator();

// Simple icon placeholder component since we don't have vector icons installed yet
const IconPlaceholder = ({ label, focused }: { label: string, focused: boolean }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
            color: focused ? '#007AFF' : '#888',
            fontSize: 16,
            fontWeight: focused ? 'bold' : 'normal'
        }}>
            {label === 'Marcador' ? '⏱️' : '📋'}
        </Text>
    </View>
);

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#121212',
                    borderTopColor: '#333',
                    height: 60,
                    paddingBottom: 5,
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#888',
                tabBarIcon: ({ focused }) => (
                    <IconPlaceholder label={route.name} focused={focused} />
                ),
            })}
        >
            <Tab.Screen name="Marcador" component={MarcadorScreen} />
            <Tab.Screen name="Historial" component={HistorialScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

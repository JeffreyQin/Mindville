import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Timer',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused? require('@/assets/img/navigation/timer_focused.png') : require('@/assets/img/navigation/timer.png')}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: 'Game',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused? require('@/assets/img/navigation/game_focused.png') : require('@/assets/img/navigation/game.png')}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused? require('@/assets/img/navigation/stats_focused.png') : require('@/assets/img/navigation/stats.png')}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
    </Tabs>
  );
}

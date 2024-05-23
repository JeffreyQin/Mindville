import { Image, StyleSheet, Platform, View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [timerPressed, setTimerPressed] = useState(false);

  const handleTimerPressed = () => {
    setTimerPressed(!timerPressed)
  }
  
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleTimerPressed}>
        <Image 
          source={timerPressed? require('@/assets/img/ui/timer_pause.png') : require('@/assets/img/ui/timer_start.png')}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

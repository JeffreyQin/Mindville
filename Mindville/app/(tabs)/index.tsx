import { Image, StyleSheet, Platform, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';


export default function HomeScreen() {
  const [timerPressed, setTimerPressed] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timerPressed) {
      intervalRef.current = setInterval(() => {
        setTime(currTime => currTime + 1000);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerPressed]);

  
  const handleTimerPressed = () => {
    setTimerPressed(!timerPressed);

    if (timerPressed) {
      setTime(0);
    }
  }

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={handleTimerPressed}>
        <Image
          source={timerPressed? require('@/assets/img/ui/timer_pause.png') : require('@/assets/img/ui/timer_start.png')}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text> </Text>
      <Text style={styles.timerCount}>
        {formatTime(time)}
      </Text>
    </View>
  );
}


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height
  },
  timerCount: {
    fontSize: 24,
    marginTop: 20
  }
});


const formatTime = (time) => {

  let sec = Math.floor((time / 1000) % 60);
  let min = Math.floor((time / (1000 * 60)) % 60);
  let hour = Math.floor((time / (1000 * 60 * 60)) % 24);
  
  let timeStr = '';

  if (hour == 0) {
    timeStr += '00';
  } else if (hour < 10) {
    timeStr += '0' + hour.toString();
  } else {
    timeStr += hour.toString();
  } 

  timeStr += ':';

  if (min == 0) {
    timeStr += '00';
  } else if (min < 10) {
    timeStr += '0' + min.toString();
  } else {
    timeStr += min.toString();
  }
  
  timeStr += ':';

  if (sec == 0) {
    timeStr += '00';
  } else if (sec < 10) {
    timeStr += '0' + sec.toString();
  } else {
    timeStr += sec.toString();
  }

  return timeStr;
}
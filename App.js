import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, Pressable, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width

const COLOR_BLUE = '#154360'
const COLOR_WHITE = '#ddd'

export default function App() {

  const [millis, setMillis] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const [laps, setLaps] = useState([])
  const [index, setIndex] = useState(0)
  const [flatListRef, setFlatListRef] = useState(0)

  const [isStart, setIsStart] = useState(false)

  let interval

  //---------------
  const handle_RESET = () => {

    setIsStart(false)

    let timer = setTimeout(() => {
      setMillis(0)
      setSeconds(0)
      setMinutes(0)
      setLaps([])
      setIndex(0)
    }, 10)

    console.log('::::RESET')
    return () => clearTimeout(timer)
  }
  //---------------
  const togglePlayPause = () => {

    setIsStart(isStart => !isStart)
    console.log(isStart ? '::::PAUSE' : '::::PLAY')
  }
  //---------------
  const handle_LAP = () => {
    setLaps(() => {

      setIndex(index => index + 1)
      return ([
        ...laps,
        {
          id: index,
          time: `#${(index + 1)}:  ${(minutes < 10) ? '0' + minutes : minutes}:${(seconds < 10) ? '0' + seconds : seconds},${millis}`
        }
      ])

    })
  }

  //---------------
  //:::::::::::::::
  useEffect(() => { // MILLIS INTERVAL
    if (isStart) {
      interval = setInterval(() => {

        if (millis >= 9) {

          setMillis(0)
          setSeconds(seconds => seconds + 1)
          if (seconds >= 59) {

            setSeconds(0)
            setMinutes(minutes => minutes + 1)
            return () => clearInterval(interval)

          }
        } else {
          setMillis(millis => millis + 1)
        }
        return () => clearInterval(interval)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isStart, millis, seconds])
  //:::::::::::::::
  useEffect(() => { // SCROLL
    if (isStart) {

      flatListRef.scrollToEnd({ animated: true, duration: 1000 })
      console.log('::::SCROLL')
    }
  }, [index])

  return (
    <View style={[
      { width: SCREEN_WIDTH, flex: 1 },
      { justifyContent: 'flex-start', alignItems: 'center' },
      { backgroundColor: COLOR_BLUE },
      { paddingVertical: 30 }

    ]}>

      {/* TITLE___________________________________________________________________________ */}
      <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 40 }} >STOPWATCH</Text>


      {/* CLOCK___________________________________________________________________________ */}
      <View style={[
        { width: SCREEN_WIDTH },
        // { backgroundColor: 'pink' },
        { justifyContent: 'center', alignItems: 'center' },
        { flexDirection: 'row', paddingBottom: 30 }
      ]}>

        <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 30 }}
        >{`${(minutes < 10) ? '0' + minutes : minutes} : `}</Text>

        <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 80 }}
        >{`${(seconds < 10) ? '0' + seconds : seconds}`}</Text>

        <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 30 }}
        >{` : ${millis}`}</Text>

      </View>


      {/* LAP_VIEW________________________________________________________________________ */}
      <ScrollView ref={(ref) => setFlatListRef(ref)}>
        {
          laps.map((item, index) => {
            return (
              <View key={index} style={[
                { width: SCREEN_WIDTH, height: 50 },
                { justifyContent: 'center', alignItems: 'center' },
                { backgroundColor: (index % 2) ? COLOR_BLUE : COLOR_WHITE },
              ]} >

                <Text style={[
                  { color: (index % 2) ? COLOR_WHITE : COLOR_BLUE },
                  { fontWeight: 'bold', fontSize: 20 }
                ]}>

                  {item.time}
                </Text>
              </View>
            )
          })
        }

      </ScrollView>


      {/* BUTTONS_________________________________________________________________________ */}
      <View style={[
        { width: SCREEN_WIDTH },
        { justifyContent: 'space-evenly', alignItems: 'center' },
        { flexDirection: 'row' },
        { paddingTop: 30 }
      ]} >

        <Pressable
          onPress={() => handle_RESET()}
          style={[
            { width: 75, height: 75 },
            { justifyContent: 'center', alignItems: 'center' },
            { backgroundColor: (isStart || millis != 0) ? COLOR_WHITE : COLOR_BLUE, borderRadius: 75 }

          ]} >

          <Text style={{ color: COLOR_BLUE, fontWeight: 'bold', fontSize: 20 }}>reset</Text>
        </Pressable>

        <Pressable
          onPress={() => togglePlayPause()}
          style={[
            { width: 75, height: 75 },
            { justifyContent: 'center', alignItems: 'center' },
            { backgroundColor: COLOR_WHITE, borderRadius: 75 }
          ]} >

          <Text style={{ color: COLOR_BLUE, fontWeight: 'bold', fontSize: 20 }}>{isStart ? 'pause' : 'play'}</Text>
        </Pressable>

        <Pressable
          onPress={() => isStart ? handle_LAP() : null}
          style={[
            { width: 75, height: 75 },
            { justifyContent: 'center', alignItems: 'center' },
            { backgroundColor: isStart ? COLOR_WHITE : COLOR_BLUE, borderRadius: 75 }
          ]} >

          <Text style={{ color: COLOR_BLUE, fontWeight: 'bold', fontSize: 20 }}>lap</Text>
        </Pressable>

      </View>


      <StatusBar style="auto" />
    </View >
  );
}


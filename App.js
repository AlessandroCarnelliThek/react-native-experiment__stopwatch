import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { Animated, Dimensions, Text, View, Pressable, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width

const COLOR_BLUE = '#154360'
const COLOR_WHITE = '#ddd'

export default function App() {

  const [tenths, setTenths] = useState(0)
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
      setTenths(0)
      setSeconds(0)
      setMinutes(0)
      setLaps([])
      setIndex(0)
    }, 10)

    console.log('::::RESET')
    return () => clearTimeout(timer)
  }
  //---------------
  const handle_PlayPause = () => {

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
          time: `#${(index + 1)}:  ${(minutes < 10) ? '0' + minutes : minutes}:${(seconds < 10) ? '0' + seconds : seconds},${tenths}`
        }
      ])

    })
  }

  //---------------
  //:::::::::::::::
  useEffect(() => { // MILLIS INTERVAL
    if (isStart) {
      interval = setInterval(() => {

        if (tenths >= 9) {

          setTenths(0)
          setSeconds(seconds => seconds + 1)
          if (seconds >= 59) {

            setSeconds(0)
            setMinutes(minutes => minutes + 1)
            return () => clearInterval(interval)

          }
        } else {
          setTenths(tenths => tenths + 1)
        }
        return () => clearInterval(interval)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isStart, tenths, seconds])
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
    ]}>


      {/* LAP_VIEW________________________________________________________________________ */}
      <ScrollView ref={(ref) => setFlatListRef(ref)}
        contentContainerStyle={[
          { justifyContent: 'flex-end', alignItems: 'center', },
          { flexGrow: 1 }
        ]}>

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
        { paddingVertical: 30 }
      ]} >

        <Pressable
          onPress={() => (isStart || tenths != 0 || seconds != 0 || minutes != 0) ? handle_RESET() : null}
          style={[
            { width: 75, height: 75 },
            { justifyContent: 'center', alignItems: 'center' },
            { backgroundColor: (isStart || tenths != 0 || seconds != 0 || minutes != 0) ? COLOR_WHITE : COLOR_BLUE, borderRadius: 75 }
          ]} >

          <Text style={{ color: COLOR_BLUE, fontWeight: 'bold', fontSize: 20 }}>reset</Text>
        </Pressable>

        <Pressable
          onPress={() => handle_PlayPause()}
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


      {/* CLOCK___________________________________________________________________________ */}
      <View style={[
        { width: SCREEN_WIDTH },
        { backgroundColor: '#154360dd' },
        { position: 'absolute', top: 0, left: 0, right: 0 },
        { justifyContent: 'center', alignItems: 'center' },
        { paddingVertical: 34 }
      ]}>

        <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 40 }} >S T O P W A T C H</Text>

        <View style={[
          { width: SCREEN_WIDTH },
          { justifyContent: 'center', alignItems: 'center' },
          { flexDirection: 'row' }
        ]}>

          <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 30 }}
          >{`${(minutes < 10) ? '0' + minutes : minutes} : `}</Text>

          <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 80 }}
          >{`${(seconds < 10) ? '0' + seconds : seconds}`}</Text>

          <Text style={{ color: COLOR_WHITE, fontWeight: 'bold', fontSize: 30 }}
          >{` : ${tenths}`}</Text>

        </View>
      </View>


      <StatusBar style='inverted' />
    </View >
  )
}


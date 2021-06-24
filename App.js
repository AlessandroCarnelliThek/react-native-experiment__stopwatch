/*                           `/sdNNNNmho-                             
                           `sNdo-`  `./yNd:                           
                          -mm/          .yMo                          
                         `dN-             yM/                         
                         -Mh              -Mh                         
                         .Md   --------.  :My                         
                          hM+  dNNNNNNNs `dN-                         
                          `sNs-:+MMMMy/-/mm:                          
             .`             -ymhoMMMMysmmo.            :.             
          ./hNd.              ./sMMMMd+:`            `sNNh+.          
         /mMMMMm-       `.-/+osydMMMMmhso+/-.`      `hMMMMMh`         
         `+NMMMMd- `-/shmNNMMMMMMMMMMMMMMMMNNmhs/-` sMMMMMy.          
           -dMMmdyymNMMMMMMMMNNmmmmmmmmNNMMMMMMMMNmyshmMd/`           
            `+ydNMMMMMMmdhyysyso.+ds`+yysssyhdmMMMMMMmds-             
           .omMMMMMmhysyyso+:-.` -+: `..-/+syysoydNMMMMMmo.           
         .sNMMMMNhssys+-`                   `.:oyyoshNMMMMms.         
       `oNMMMMmysyy/. `                        ``.+ys+ymMMMMm+`       
      -dMMMMNyshs- ./hd-                      -hy/.`:hy+sNMMMMd-      
     /NMMMMhohs. .smMMMN:                    :mMMMms.`:hy/hMMMMN+     
    oMMMMNsyh- .sNMMMMMMN/                  /NMMMMMMNs.`+d+oNMMMMo    
   oMMMMN+hs` /mMMMMMMMMMMo                oMMMMMMMMMMm/ .hs+NMMMMo   
  /MMMMN/ds  oMMMMMMMMMMMMMs`            `sMMMMMMMMMMMMMo `yy/NMMMM/  
 .NMMMM+hy  sMMMMMMMMMMMMMMMy`          `yMMMMMMMMMMMMMMMs `hs+MMMMN` 
 sMMMMyod` +MMMMMMMMMMMMMMMMMd.        .dMMMMMMMMMMMMMMMMM+ .m:yMMMMs 
`MMMMN-N- .NMMMMMMMMMMMMMMMMMMh`      `hMMMMMMMMMMMMMMMMMMN. +d.NMMMN`
/MMMMhoh  sMMMMMMMMMMMMMMMMMN+``:oyyo:``+NMMMMMMMMMMMMMMMMMs `N:hMMMM:
sMMMMs+:  mMMMMMMMMMMMMMMMMN- /mMMMMMMm/ -NMMMMMMMMMMMMMMMMm  /-sMMMMo
yMMMMooy-`NNNNNNNNNNNNNNNNNs .MMMMMMMMMM. sNNNNNNNNNNNNNNNNN`+y:sMMMMy
yMMMMo+o. `````````````````  .MMMMMMMMMM.  ````````````````` :o-sMMMMs
oMMMMso+                      /NMMMMMMN/                      +/yMMMMo
/MMMMd+d                       `/syys/`                      .N:dMMMM:
`NMMMM:N:                     .s+:--:+s.                     sd-MMMMN 
 sMMMMyom`                   -mMMMMMMMMm-                   -N-hMMMM+ 
 `mMMMMohh`                 :NMMMMMMMMMMN:                 .m+oMMMMm` 
  -NMMMM+hy`               +NMMMMMMMMMMMMN+               .ds+MMMMN-  
   /MMMMNoyh.             oMMMMMMMMMMMMMMMMo             :mo+MMMMM/   
    /NMMMMsod:          `yMMMMMMMMMMMMMMMMMMy`         `od+sMMMMN/    
     :mMMMMdsyy-       `yMMMMMMMMMMMMMMMMMMMMy`      `/dyomMMMMm:     
      .yMMMMMdsyy:`   `hMMMMMMMMMMMMMMMMMMMMMMh`   `/hyodMMMMMy.      
        /dMMMMMdsyyo-``:ohmNMMMMMMMMMMMMMMNmhs:``:syssdMMMMMd/        
         `+dMMMMMmhsyys/-..-:+osyhhhhyso+:-..-+sysoymMMMMMd+`         
           `/hNMMMMMmhssssso+/:. :s/ `-:/+sssssshmMMMMMNh/`           
             `-sdNMMMMMNmdhysss+-+ds.+yyssyhdmNMMMMMNdo-`             
                `-ohmMMMMMMMMMNNmmmNNNNMMMMMMMMMNmh+-`                
                    .:+ydmNNMMMMMMMMMMMMMMNNmhs+-`                    
                         `.-:/+oosssooo+/:-.`                         
                             
                         
----------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                                                                      
   /ssso.oosso+ -osso- .ssos/`+s `ss``s+  :ss` -ossso:`/sss+ +s` -s-  
  -Nd+//`..Nd..:Ny..sM:-My-yM:/M/+NN+/M/ .mhNs `./Mo.`sM+`.: hM//sM/  
  `:+smN: `Nd  /Mo` oM/-Mdsy+  ddNosmmd  hMshM/  :M+  hN- `. hM//sM/  
  -yyyhs`  hy   +hyyh+ .d+     :dd``dd: :d/..yh` -d/  .shyyy`sd` /d:  
                                                                      
----------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM





      .++/    .+++++/.  :+++++:`                                                                    
     `dMNM/   /MNsoyNN: hMmoodMd.                                                                   
     sMh+MN.  /MN:.+NM+ hMm.-sMN.                                                                   
    /MMs+mMd` /MMdhhy/` hMNhhhs-                                                                    
   .mMyooomMo /MN-``    hMd```                                                                      
   -++`   :++ -++`      :+/    
                                                                         
----------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import LapList from './components/LapList'
import Clock from './components/Clock'
import ControlPanel from './components/ControlPanel'


const COLOR_DARK = '#111'
const COLOR_LIGHT = '#FFE400'

const PAGE_GAP = 30

export default function App() {


  const [startTime, setStartTime] = useState(null)
  const [stopTime, setStopTime] = useState(null)

  const [millis, setMillis] = useState(0)

  const [laps, setLaps] = useState([])
  const [index, setIndex] = useState(0)

  const [isStart, setIsStart] = useState(false)
  const [isReset, setIsReset] = useState(false)

  let interval


  //-------------------------------------------
  const handle_Reset = () => {

    setIsStart(false)
    setIsReset(true)
    console.log('::::RESET')
  }
  //-------------------------------------------
  const handle_PlayPause = () => {

    if (isStart) {
      console.log('::::PAUSE')
    } else {

      if (startTime) {
        setStartTime(startTime + (Date.now() - stopTime))
      } else {
        setStartTime(Date.now())
      }
      console.log('::::PLAY')

    }
    setIsStart(isStart => !isStart)
  }
  //-------------------------------------------
  const handle_AddLap = () => {

    setIndex(index => index + 1)
    setLaps([
      ...laps,
      {
        id: index,
        time: millis
      }
    ])
    console.log('::::NEW LAP')
  }

  //:::::::::::::::
  useEffect(() => {

    if (isStart) {
      interval = setInterval(() => setMillis(Date.now() - startTime), 1)

    } else {
      setStopTime(Date.now())
    }

    if (isReset) {
      setStartTime(null)
      setStopTime(null)
      setMillis(0)
      setIsReset(false)
      setLaps([])
    }

    return () => clearInterval(interval)
  }, [isStart, isReset])
  //:::::::::::::::

  return (
    <View style={[
      { flex: 1, backgroundColor: COLOR_DARK, },
      { alignItems: 'center', justifyContent: 'center', },
      { paddingTop: PAGE_GAP },
    ]}>


      <LapList laps={laps} index={index} isStart={isStart} />

      <Clock millis={millis} />

      <ControlPanel
        millis={millis}
        isStart={isStart}
        onPressReset={() => (millis != 0) ? handle_Reset() : null}
        onPressPlayPause={() => handle_PlayPause()}
        onPressAddLap={() => isStart ? handle_AddLap() : null}
      />


      <StatusBar style='inverted' />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLOR_DARK,
    alignItems: 'center', justifyContent: 'center',
    paddingTop: PAGE_GAP
  },

});
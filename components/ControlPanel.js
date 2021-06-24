/*
                                       ```                                                          
    ohs                       .hh:     yh+         .ss`                                             
    yMd     .ssyys/  :so+syo. -NM/     oy/ `/ssss:.yMNso.                                           
    yMd     .++oyMM: oMm::hMd`-NM/     dMo sMmo++/`oMN/:`                                           
    yMd`    smd++NM/ oMd  oMm`-NM/     dMo -oyhmNy :MN.                                             
    yNNdhhh-sNmssmN/ oMNshmd/ .mNdhhhy hNo shyydms .mNhy.                                           
    .......` .-.`..` oMd.-.`   ....... ..` `.--..   `.-.                                            
                     -+/                                      

--------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/


import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
//-------------------------------------------
const GAP = 30


/*--------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/


const ControlPanel = ({ color_light, color_dark, millis, isStart, onPressReset, onPressPlayPause, onPressAddLap }) => {
    return (
        <View style={styles.controlPanel}>

            <Pressable style={[
                styles.btn,
                { backgroundColor: (millis != 0) ? color_light : color_dark, },
            ]} onPressIn={onPressReset} >
                <Text style={{ color: color_dark, fontWeight: 'bold', fontSize: 20 }}>{(millis != 0) ? 'RESET' : ''}</Text>
            </Pressable>

            <Pressable style={[
                styles.btn,
                { backgroundColor: color_light },
            ]} onPressIn={onPressPlayPause} >
                <Text style={{ color: color_dark, fontWeight: 'bold', fontSize: 20 }}>{isStart ? 'PAUSE' : 'PLAY'}</Text>
            </Pressable>

            <Pressable onPressIn={onPressAddLap}
                style={[
                    styles.btn,
                    { backgroundColor: isStart ? color_light : color_dark },
                ]} >
                <Text style={{ color: color_dark, fontWeight: 'bold', fontSize: 20 }}>{isStart ? 'LAP' : ''}</Text>
            </Pressable>

        </View>
    )
}

export default ControlPanel


const styles = StyleSheet.create({

    controlPanel: {
        flexDirection: 'row',
        paddingVertical: GAP,
    },
    btn: {
        width: 90, height: 50,
        justifyContent: 'center', alignItems: 'center',

        marginHorizontal: 5
    },

});
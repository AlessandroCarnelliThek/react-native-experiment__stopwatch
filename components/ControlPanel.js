/*


CONTROL PANEL

                                                                         
----------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
import React, { useEffect, useState } from 'react';
import { StyleSheet, Pressable, Dimensions, Text, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width

const COLOR_DARK = '#111'
const COLOR_LIGHT = '#FFE400'


const GAP = 30
const PAGE_GAP = 30

//magic function
const msToTime = (s) => {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    // var hrs = (s - mins) / 60;

    return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
    // return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}

const ControlPanel = React.memo(({ millis, isStart, onPressReset, onPressPlayPause, onPressAddLap }) => {

    return (
        <View style={styles.controlPanel}>

            <Pressable style={[
                styles.btn,
                { backgroundColor: (millis != 0) ? COLOR_LIGHT : COLOR_DARK, },
            ]} onPress={onPressReset} >
                <Text style={styles.btn_text}>{(millis != 0) ? 'RESET' : ''}</Text>
            </Pressable>

            <Pressable style={[
                styles.btn,
                { backgroundColor: COLOR_LIGHT },
            ]} onPress={onPressPlayPause} >
                <Text style={styles.btn_text}>{isStart ? 'PAUSE' : 'PLAY'}</Text>
            </Pressable>

            <Pressable onPress={onPressAddLap}
                style={[
                    styles.btn,
                    { backgroundColor: isStart ? COLOR_LIGHT : COLOR_DARK },
                ]} >
                <Text style={styles.btn_text}>{isStart ? 'LAP' : ''}</Text>
            </Pressable>

        </View>

    )
})
export default ControlPanel


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLOR_DARK,
        alignItems: 'center', justifyContent: 'center',
        paddingTop: PAGE_GAP
    },
    clock: {
        color: COLOR_LIGHT, fontWeight: '100', fontSize: 60
    },
    controlPanel: {
        flexDirection: 'row',
        paddingVertical: GAP,
    },
    btn: {
        width: 90, height: 50,
        justifyContent: 'center', alignItems: 'center',

        marginHorizontal: 5
    },
    btn_text: {
        color: COLOR_DARK,
        fontWeight: 'bold',
        fontSize: 20,
    }
});
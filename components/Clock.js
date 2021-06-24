/*


CLOCK

                                                                         
----------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, ScrollView } from 'react-native';

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

const Clock = React.memo(({ millis }) => {

    return (
        <View style={[
            { width: SCREEN_WIDTH },
            { backgroundColor: '#111111cc' },
            { justifyContent: 'center', alignItems: 'center' },
            { paddingVertical: GAP * 2 },
            { position: 'absolute', top: 0, left: 0, right: 0 }
        ]}>
            <Text style={[
                { color: COLOR_LIGHT, fontWeight: '100', fontSize: 60 }
            ]}>
                {msToTime(millis)}
            </Text>
        </View>
    )
})
export default Clock
/*

      `````  `--                   .-`                                                              
    .sdNmmmd`-MN.    ``       ``   dMo                                                              
   `dMh.  `/`-MN. -ydddh+` .shddh+ dMo`+dy.                                                         
   -MM+      -MN..NM+ `mMs`mMs``.- dMhdMy`                                                          
   `dMd:``-o`-MN..NM/ `dMs`NMo` `- dMdsMm-                                                          
    `+hmmmdy`-md. :ymdmdo` -yddddo hm+ /dd:    

    
--------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/


import React from 'react';
import { Dimensions, Text, View } from 'react-native';
//-------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
//-------------------------------------------
const GAP = 30
//-------------------------------------------
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


/*--------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/


const Clock = ({ color, millis }) => {

    return (
        <View style={[
            { width: SCREEN_WIDTH },
            { backgroundColor: '#111111cc' },
            { justifyContent: 'center', alignItems: 'center' },
            { paddingVertical: GAP * 2 },
            { position: 'absolute', top: 0, left: 0, right: 0 }
        ]}>
            <Text style={[
                { color: color, fontWeight: '100', fontSize: 60 }
            ]}>
                {msToTime(millis)}
            </Text>
        </View>
    )
}
export default Clock
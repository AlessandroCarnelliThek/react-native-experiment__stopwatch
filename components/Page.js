/*

    .::::-.                                                                                         
    yMNyhmNh` ..--.`   `.-....   `---.                                                              
    yMd``oMM. yyyhmd: -hmhyhNh `sdyshmo                                                             
    yMNhhdh/ `oyssNMs hMd` oMd +MNssymm.                                                            
    yMd..`   oMm/:dMy oNN+/hMd :NNo/:/s`                                                            
    +so      .oys+os/ `+sysdMh  -+syys+                                                             
                      `hhyhdy-                 

--------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/


import React from 'react';
import { Dimensions, View } from 'react-native';
//-------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width


/*--------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/


const Page = ({ children, color, }) => {
    return (
        <View style={[
            { flex: 1, width: SCREEN_WIDTH, backgroundColor: color, },
            { alignItems: 'center', justifyContent: 'center' },
        ]}>
            {children}
        </View>
    )
}
export default Page
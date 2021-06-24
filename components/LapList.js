/*


ddy`     +mm:          `sy+   /hdddhy` +ys`                           
MMd`     :yy- `+syyss/`sNMmss.`.hMM:` +mMNys: .+sssys:  +ys+shy+:oyhy:
MMd`     +MM: oMMyo++:`-NMd-.`  hMM-  .hMN:-`-mMh++hMN: hMN/-oMMy::mMN
MMm.```` +MM: -/osyNNh``mMh`    hMM-   yMN.  /MMh////o- hMN` :NMo  hMM
NNmmmmmh./NN: oddddmd+  omNdh-+dmNNmh. :dNmh+ /ymmdddh- yNm` -mN+  yNN

                                                                         
----------------------------------------------------------------------
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width

const COLOR_DARK = '#111'
const COLOR_LIGHT = '#FFE400'


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

const LapList = React.memo(({ laps, index, isStart }) => {

    const [flatListRef, setFlatListRef] = useState(0)
    //:::::::::::::::
    useEffect(() => { // SCROLL
        if (isStart) {
            flatListRef.scrollToEnd({ animated: true, duration: 1000 })
            // console.log('::::SCROLL')
        }
    }, [index])
    //:::::::::::::::

    return (
        <ScrollView ref={(ref) => setFlatListRef(ref)}
            contentContainerStyle={[
                { justifyContent: 'flex-end', alignItems: 'center', },
                { flexGrow: 1 },
                // { backgroundColor: 'pink' }
            ]}>

            {
                laps.map((item, index) => {
                    return (
                        <View key={index} style={[
                            { width: SCREEN_WIDTH, height: 50 },
                            { justifyContent: 'center', alignItems: 'center' },
                            { backgroundColor: (index % 2) ? COLOR_DARK : COLOR_LIGHT },
                        ]} >

                            <Text style={[
                                { color: (index % 2) ? COLOR_LIGHT : COLOR_DARK },
                                { fontWeight: 'bold', fontSize: 20 }
                            ]}>

                                {`#${index + 1}:  ${msToTime(item.time)}`}
                            </Text>
                        </View>
                    )
                })
            }

        </ScrollView>
    )
})
export default LapList
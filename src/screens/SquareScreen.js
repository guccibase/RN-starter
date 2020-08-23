import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const INCREEMENT = 20
const SquareScreen = () => {


    const reducer = (state, action) => {

        switch (action.type) {
            case 'change_red':
                return state.red + action.payLoad > 255 || state.red + action.payLoad < 0 ?
                    state : { ...state, red: state.red + action.payLoad }

            case 'change_blue':
                return state.blue + action.payLoad > 255 || state.blue + action.payLoad < 0 ?
                    state : { ...state, blue: state.blue + action.payLoad }


            case 'change_green':
                return state.green + action.payLoad > 255 || state.green + action.payLoad < 0 ?
                    state : { ...state, green: state.green + action.payLoad }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })



    return <View>
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_red', payLoad: INCREEMENT })}
            onDecrease={() => dispatch({ type: 'change_red', payLoad: -1 * INCREEMENT })}
            color="Red" />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_blue', payLoad: INCREEMENT })}
            onDecrease={() => dispatch({ type: 'change_blue', payLoad: -1 * INCREEMENT })}
            color="blue" />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_green', payLoad: INCREEMENT })}
            onDecrease={() => dispatch({ type: 'change_green', payLoad: -1 * INCREEMENT })}
            color="green" />
        <View style={{ height: 200, width: 200, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }} />
    </View>
}

const style = StyleSheet.create({})


export default SquareScreen;
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDecay, withRepeat, withSpring, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import IncreaseCircle from "./IncreaseCircle";
import { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const width = Dimensions.get('window').width
const MoveLeft = () => {
    const translateX = useSharedValue<number>(0);
    const linear = useSharedValue<number>(0);
    const pressed=useSharedValue<boolean>(false);
    const offset= useSharedValue<number>(0);

    const pan= Gesture.Pan()
                .onBegin(()=>{
                    pressed.value=true;
                })
                .onChange((event)=>{
                    // offset.value= event.translationX // for moving the any direction and will back to position
                    offset.value += event.changeX
                })
                .onFinalize((event)=>{
                    // offset.value= withSpring(0) // moving back to actual place
                    offset.value= withDecay({
                        velocity: event.velocityX,
                        rubberBandEffect:true,
                        clamp: [-width, width]
                    })
                    pressed.value=false
                })
    
    const animatedCircleStyle=useAnimatedStyle(()=>({
        transform:[{translateX: offset.value}, {scale: withTiming(pressed.value ? 1.2 : 1)}],
        backgroundColor: pressed.value ? 'rgba(101, 222, 91, 1)' : 'rgba(178, 138, 17, 1)'
    }))
    const handlePress = () => {
        translateX.value += 30;
    }
    const animationStyles = useAnimatedStyle(() => (
        {
            transform: [
                { translateX: withSpring(translateX.value * 2) }
            ]
        }
    ))
    const animatedLinear = useAnimatedStyle(() => ({
        transform: [{ translateX: linear.value }]
    }))

    useEffect(() => {
        linear.value = withRepeat(
            withTiming(width - 60, {
                duration: 2000,
                easing: Easing.linear
            }
            ),
            -1,
            true
        )
    }, [])

    return (
        <SafeAreaView>
            <Animated.View style={[styles.container, animationStyles]} />
            <Animated.View style={styles.subContainer}>
                <TouchableOpacity onPress={handlePress}>
                    <Text>Click me!</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.dot, animatedLinear]} />
            <IncreaseCircle />
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.dot, animatedCircleStyle]}/>
            </GestureDetector>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#EAD',
        marginBottom: 50
    },
    subContainer: {
        // borderWidth:1,
        marginVertical: 10,
        padding: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: 'rgba(161, 245, 190, 1)',
    },
    dot: {
        height: 40,
        width: 40,
        backgroundColor: 'rgba(233, 32, 32, 0.5)',
        marginTop: 10,
        borderRadius: 20
    }
})

export default MoveLeft;
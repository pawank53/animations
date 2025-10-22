import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import IncreaseCircle from "./IncreaseCircle";
import { useEffect } from "react";

const width = Dimensions.get('window').width
const MoveLeft = () => {
    const translateX = useSharedValue<number>(0);
    const linear = useSharedValue<number>(0);
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
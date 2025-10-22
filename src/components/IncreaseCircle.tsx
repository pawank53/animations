import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Animated, {useAnimatedProps, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
import { Circle, Svg } from "react-native-svg"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const IncreaseCircle = () => {
    const r = useSharedValue<number>(10);
    const handlePress = () => {
        r.value += 10;
    };
    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value),
    }));
    return (
        <View >
            <Svg style={styles.svg}>
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    fill="#b58df1"
                    animatedProps={animatedProps}
                />
            </Svg>
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    svg: {
        height: 100,
        // width: '100%'
    },
    btn: {
        marginVertical: 10,
        padding: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: 'rgba(161, 245, 190, 1)',
    }
})
export default IncreaseCircle
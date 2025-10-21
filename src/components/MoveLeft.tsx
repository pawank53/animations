import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const MoveLeft = () => {
    const translateX=useSharedValue<number>(0);
    const handlePress= ()=>{
        translateX.value +=30;
    }
    const animationStyles=useAnimatedStyle(()=>(
        {transform:[
            {translateX:withSpring(translateX.value*2)}
        ]}
    ))
    return (
        <SafeAreaView>
            <Animated.View style={[styles.container, animationStyles]}/>
            <Animated.View style={styles.subContainer}>
                <TouchableOpacity onPress={handlePress}>
                    <Text>Click me!</Text>
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        height:100,
        width:100,
        borderRadius:50,
        padding:10,
        backgroundColor:'#EAD',
        marginBottom:50
    },
    subContainer:{
        // borderWidth:1,
        marginVertical:10,
        padding:10,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:'rgba(161, 245, 190, 1)',
    }
})

export default MoveLeft;
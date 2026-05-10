import AnimationHeader from '@/components/AnimationHeader';
import { PRIMARY_GREEN, PRIMARY_GREY_BG } from '@/constants/color';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

export default function AnimatedSplashScreen() {
    const loaderAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(loaderAnim, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    }, []);

    const loaderWidth = loaderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <AnimationHeader />

            <View style={styles.loadingWrapper}>
                <Text style={styles.loadingText}>Loading Resources...</Text>

                <View style={styles.track}>
                    <Animated.View style={[styles.loader, { width: loaderWidth }]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_GREY_BG,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loadingWrapper: {
        position: 'absolute',
        bottom: 80,
        width: '60%',
        alignItems: 'center',
    },

    loadingText: {
        fontSize: 14,
        color: '#707070',
        marginBottom: 12,
        fontWeight: '500',
        letterSpacing: 0.5,
    },

    track: {
        width: '100%',
        height: 4,
        backgroundColor: '#E0E0E0',
        borderRadius: 2,
        overflow: 'hidden',
    },

    loader: {
        height: '100%',
        backgroundColor: PRIMARY_GREEN,
        borderRadius: 2,
    },
});
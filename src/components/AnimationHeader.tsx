import { PRIMARY_GREEN } from '@/constants/color';
import { StyleSheet, View } from 'react-native';

export default function AnimationHeader() {
    return (
        <View style={styles.logoContainer}>
            <View style={[styles.pill, styles.pillVertical, { top: -5 }]} />
            <View style={[styles.pill, styles.pillHorizontal, { left: -5 }]} />
            <View style={[styles.pill, styles.pillHorizontal, { right: -5 }]} />
            <View style={[styles.pill, styles.pillVertical, { bottom: -5 }]} />
        </View>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: 80,
        height: 80,
        marginBottom: 32,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pill: {
        backgroundColor: PRIMARY_GREEN,
        position: 'absolute',
        borderRadius: 8,
    },
    pillVertical: {
        width: 22,
        height: 34,
        left: 29,
    },
    pillHorizontal: {
        width: 34,
        height: 22,
        top: 29,
    },

});
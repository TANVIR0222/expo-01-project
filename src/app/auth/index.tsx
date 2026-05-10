import AnimationHeader from '@/components/AnimationHeader';
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, LIGHT_GREEN_BG, PRIMARY_GREEN } from '../../constants/color';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    {/* Animated Logo Component */}
                    <AnimationHeader />

                    {/* Header Text */}
                    <Text style={styles.title}>Sign In</Text>
                    <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>

                    {/* Form Section */}
                    <View style={styles.formContainer}>

                        {/* Email Input */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={[
                                styles.inputShadow,
                                isEmailFocused && styles.inputShadowFocused
                            ]}>
                                <View style={[
                                    styles.inputContainer,
                                    isEmailFocused && styles.inputContainerFocused,
                                ]}>
                                    <Feather name="mail" size={20} color={COLORS.textDark} style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder="Enter your email..."
                                        placeholderTextColor={COLORS.iconSub}
                                        onFocus={() => setIsEmailFocused(true)}
                                        onBlur={() => setIsEmailFocused(false)}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Password Input */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={[
                                styles.inputShadow,
                                isPasswordFocused && styles.inputShadowFocused
                            ]}>
                                <View style={[
                                    styles.inputContainer,
                                    isPasswordFocused && styles.inputContainerFocused,
                                ]}>
                                    <Feather name="lock" size={20} color={COLORS.textDark} style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        value={password}
                                        onChangeText={setPassword}
                                        placeholder="Enter your password..."
                                        placeholderTextColor={COLORS.iconSub}
                                        secureTextEntry={!showPassword}
                                        onFocus={() => setIsPasswordFocused(true)}
                                        onBlur={() => setIsPasswordFocused(false)}
                                    />
                                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                        <Feather
                                            name={showPassword ? "eye" : "eye-off"}
                                            size={20}
                                            color={COLORS.iconSub}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* Sign In Button with Shadow */}
                        <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
                            <Text style={styles.signInButtonText}>Sign In</Text>
                            <Feather name="arrow-right" size={20} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    {/* Social Logins */}
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="facebook" size={22} color={COLORS.textDark} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <AntDesign name="google" size={22} color={COLORS.textDark} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Entypo name="instagram" size={22} color={COLORS.textDark} />
                        </TouchableOpacity>
                    </View>

                    {/* Footer Section */}
                    <View style={styles.footerContainer}>
                        <View style={styles.signupRow}>
                            <Text style={styles.footerText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => router.push('/auth/signup')}>
                                <Text style={styles.greenText}>Sign Up.</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.greenText}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 8,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 15,
        color: '#707070',
        marginBottom: 40,
    },
    formContainer: {
        width: '100%',
    },
    inputGroup: {
        marginBottom: 22,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: 10,
        marginLeft: 4,
    },


    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 20,
        paddingHorizontal: 18,
        height: 58,
    },
    inputContainerFocused: {
        borderColor: PRIMARY_GREEN,
        backgroundColor: LIGHT_GREEN_BG,
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1A1A1A',
    },

    signInButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 40,
        marginBottom: 40,
    },
    socialButton: {
        width: 54,
        height: 54,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        // Minimal shadow for social buttons
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    footerContainer: {
        alignItems: 'center',
    },
    signupRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    footerText: {
        color: '#707070',
        fontSize: 14,
    },
    greenText: {
        color: PRIMARY_GREEN,
        fontSize: 14,
        fontWeight: '700',
    },
    forgotPassword: {
        padding: 4,
    },
    // Input container er shadow
    inputShadow: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,

        // iOS Shadow: Khub halka black shadow jeta depth create korbe
        shadowColor: COLORS.primaryGreen,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.09,
        shadowRadius: 4.65,

        // Android Shadow
        elevation: 4,
    },

    // Jokhon focus hobe, tokhon green glow shadow
    inputShadowFocused: {
        shadowColor: PRIMARY_GREEN,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
    },

    // Sign In Button er jonno ektu heavy shadow
    signInButton: {
        backgroundColor: PRIMARY_GREEN,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 58,
        borderRadius: 20,
        marginTop: 10,
        gap: 8,

        // Button Shadow: Eiti button-ke "floating" look dibe
        shadowColor: PRIMARY_GREEN,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 10,
    },
});
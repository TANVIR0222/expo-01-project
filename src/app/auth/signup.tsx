import AnimationHeader from '@/components/AnimationHeader';
import { COLORS, LIGHT_GREEN_BG, PRIMARY_GREEN } from '@/constants/color';
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
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

export default function SignUpScreen() {
    // Input States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Focus States
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // Visibility States
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirm, setHideConfirm] = useState(true);

    const isMismatch = password !== "" && confirmPassword !== "" && password !== confirmPassword;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <AnimationHeader />

                <Text style={styles.title}>Sign Up For Free</Text>
                <Text style={styles.subtitle}>Sign up in 1 minute for free!</Text>

                <View style={styles.formContainer}>
                    {/* Email Field */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email Address</Text>
                        <View style={[
                            styles.inputShadow,
                            focusedField === 'email' && styles.inputShadowFocused
                        ]}>
                            <View style={[
                                styles.inputContainer,
                                focusedField === 'email' && styles.inputContainerFocused
                            ]}>
                                <Feather name="mail" size={20} color={COLORS.iconDark} style={styles.leftIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email..."
                                    value={email}
                                    onChangeText={setEmail}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    autoCapitalize="none"
                                    placeholderTextColor={COLORS.iconSub}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Password Field */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={[
                            styles.inputShadow,
                            focusedField === 'password' && styles.inputShadowFocused,
                            isMismatch && styles.errorShadow
                        ]}>
                            <View style={[
                                styles.inputContainer,
                                focusedField === 'password' && styles.inputContainerFocused,
                                isMismatch && styles.inputError
                            ]}>
                                <Feather name="lock" size={20} color={COLORS.iconDark} style={styles.leftIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    value={password}
                                    secureTextEntry={hidePassword}
                                    onChangeText={setPassword}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholderTextColor={COLORS.iconSub}
                                />
                                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                    <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={20} color={COLORS.iconSub} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Password Confirmation */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password Confirmation</Text>
                        <View style={[
                            styles.inputShadow,
                            focusedField === 'confirm' && styles.inputShadowFocused,
                            isMismatch && styles.errorShadow
                        ]}>
                            <View style={[
                                styles.inputContainer,
                                focusedField === 'confirm' && styles.inputContainerFocused,
                                isMismatch && styles.inputError
                            ]}>
                                <Feather name="lock" size={20} color={COLORS.iconDark} style={styles.leftIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    secureTextEntry={hideConfirm}
                                    onChangeText={setConfirmPassword}
                                    onFocus={() => setFocusedField('confirm')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholderTextColor={COLORS.iconSub}
                                />
                                <TouchableOpacity onPress={() => setHideConfirm(!hideConfirm)}>
                                    <Entypo name={hideConfirm ? 'eye-with-line' : 'eye'} size={20} color={COLORS.iconSub} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {isMismatch && (
                        <View style={styles.errorContainer}>
                            <MaterialIcons name="error" size={20} color={COLORS.errorRed} style={styles.errorIcon} />
                            <Text style={styles.errorText}>ERROR: Password do not match!</Text>
                        </View>
                    )}

                    <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
                        <Text style={styles.submitButtonText}>Sign Up</Text>
                        <Feather name="arrow-right" size={20} color={COLORS.white} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Sign In.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 28,
        paddingTop: 30,
        paddingBottom: 40,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: COLORS.textDark,
        marginBottom: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 15,
        color: COLORS.textSub,
        marginBottom: 35,
        textAlign: 'center'
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
        color: COLORS.textDark,
        marginBottom: 10,
        marginLeft: 4,
    },
    inputShadow: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        // Default Shadow
        shadowColor: COLORS.primaryGreen,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.09,
        shadowRadius: 4.65,
        elevation: 4,
    },
    inputShadowFocused: {
        shadowColor: PRIMARY_GREEN,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
    },
    errorShadow: {
        shadowColor: COLORS.errorRed,
        shadowOpacity: 0.15,
        elevation: 2,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 58,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 20,
    },
    inputContainerFocused: {
        borderColor: PRIMARY_GREEN,
        backgroundColor: LIGHT_GREEN_BG,
    },
    inputError: {
        borderColor: COLORS.errorBorder,
        backgroundColor: COLORS.errorBg
    },
    leftIcon: { marginRight: 12 },
    input: {
        flex: 1,
        height: '100%',
        color: COLORS.textDark,
        fontSize: 15,
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.errorBg,
        borderWidth: 1,
        borderColor: COLORS.errorBorder,
        borderRadius: 20,
        padding: 16,
        marginBottom: 25,
    },
    errorIcon: { marginRight: 10 },
    errorText: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.errorRed
    },
    submitButton: {
        backgroundColor: PRIMARY_GREEN,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 58,
        borderRadius: 20,
        marginTop: 10,
        gap: 8,
        // Premium Button Shadow
        shadowColor: PRIMARY_GREEN,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 10,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.white,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    footerText: {
        fontSize: 14,
        color: COLORS.textSub
    },
    footerLink: {
        color: COLORS.primaryGreen,
        fontWeight: '700',
    },
});
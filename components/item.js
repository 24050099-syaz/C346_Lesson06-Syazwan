import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Item({ index, question, selectedValue, onValueChange }) {

    const renderPicker = () => {
        if (!question.options || question.options.length === 0) return null;

        return (
            <Picker
                selectedValue={selectedValue}
                onValueChange={(value) => onValueChange(index, value)}
                style={styles.picker}
            >
                <Picker.Item label="Select an item..." value={null} />
                {question.options.map((opt, i) => (
                    <Picker.Item key={i} label={opt} value={opt} />
                ))}
            </Picker>
        );
    };


    return (
        <View style={styles.card}>
            {question.type === 'image' && question.image ? (
                <>
                    <Image source={question.image} style={styles.image} />
                </>
            ) : null}

            <Text style={styles.question}>{question.questionText}</Text>

            {question.type === 'image' && renderPicker()}

            {question.type === 'mcq' && renderPicker()}

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 8,
        elevation: 1,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        borderRadius: 6,
        marginBottom: 10,
    },
    question: {
        fontSize: 15,
        marginBottom: 8,
        color: '#222',
        textAlign: 'left',
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
});

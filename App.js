import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import Item from './components/item';

export default function App() {
    const questions = [
        {
            type: 'image',
            image: require('./img/silenthillf.jpg'),
            options: ['Phasmophobia', 'Dead by Daylight', 'Silent Hill F'],
            answer: 'Silent Hill F',
            questionText: 'Which video game is this character from?',
        },
        {
            type: 'image',
            image: require('./img/phasmo.jpg'),
            options: ['Phasmophobia', "Five Nights At Freddy's", 'Undertale'],
            answer: 'Phasmophobia',
            questionText: 'Which video game is this screenshot taken from?',
        },
        {
            type: 'image',
            image: require('./img/eldenring.jpg'),
            options: ['Sekiro', 'Black Myth: Wukong', 'Elden Ring'],
            answer: 'Elden Ring',
            questionText: 'Which video game is this screenshot taken from?',
        },

        {
            type: 'mcq',
            options: ['Call Of Duty', 'Apex Legends', 'Valorant'],
            answer: 'Apex Legends',
            questionText: 'Which game does the term "supergliding" come from?',
        },

        {
            type: 'image',
            image: require('./img/hsr.jpg'),
            options: ['True', 'False'],
            answer: 'True',
            questionText: 'Is the screenshot above from a Hoyoverse game?',
        },

        {
            type: 'image',
            image: require('./img/leon.jpg'),
            options: ['Leon Scott Kennedy', 'Chris Redfield', 'Jill Valentine'],
            answer: 'Leon Scott Kennedy',
            questionText: 'What is the full name of the character shown in the image above',
        },
    ];


    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    const submitAnswers = () => {
        let score = 0;
        questions.forEach((q, i) => {
            if (answers[i] === q.answer) score++;
        });
        Alert.alert(`You have ${score} correct answer${score !== 1 ? 's' : ''}!`);
    };

    return (
        <ScrollView style={styles.container}>
            {questions.map((q, index) => (
                <Item
                    key={index}
                    index={index}
                    question={q}
                    selectedValue={answers[index]}
                    onValueChange={handleAnswerChange}
                />
            ))}

            <TouchableOpacity style={styles.button} onPress={submitAnswers}>
                <Text style={styles.buttonText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, View, Text } from 'react-native';
import { Button } from 'react-native';

const DT = ({datetime, setDate}) => {
    // const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        console.log(currentDate);
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />

            <Text>selected: {datetime.toLocaleString()}</Text>

            {true && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={datetime}
                    mode={'datetime'}
                    onChange={onChange}
                    is24Hour
                />
            )}
        </View>
    )
}

export default DT;
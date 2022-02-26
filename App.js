import { useState } from 'react';
import { Text, TextInput, Button, ScrollView, View, Modal, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import StyleSheet from './Styles';
import Styles from './Styles';

export default function App() {
  
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [bac, setBac] = useState(0);
  const [colour, setColour] = useState('green')
  
  const [modalVisible, setModalVisible] = useState(false)

  function close() {
    setModalVisible(false);
  }

  const times = Array();
  const bottlenum = Array();
  let i = 1;
  while (i <= 20) {
    times.push({label: `${i} hours`, value: i});
    bottlenum.push({label: `${i} bottles`, value: i});
    i++;
  };
  
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];
  function calculate() {
    if (weight == '') {
      setModalVisible(true)
      return
    };
    
    let result;
    let colourpicker;
    let litres = bottles*0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight/10;
    let gremaining = Math.max(grams - burning * time, 0);
    if (gender === 'male') {
      result = (gremaining / (weight*0.7))
    } else {
      result = (gremaining / (weight*0.6))
    }
    if (result < 0.22) {
      colourpicker = 'green';
    } else if (result < 1.22) {
      colourpicker = 'yellow';
    } else {
      colourpicker = 'red';
    };
    setColour(colourpicker)
    setBac(result)
  };



  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Alcometer</Text>
      <Modal 
        visible={modalVisible}
        onRequestClose={close}
      >
        <View style={StyleSheet.modal} >
          <Text>Please enter weight</Text>
          <Pressable onPress={() => {
          setModalVisible(false);
        }}> 
          <Text style={StyleSheet.close}>Close</Text>
        </Pressable>
        </View>
      </Modal>
      <ScrollView>
        <Text style={StyleSheet.label}>Weight</Text>
        <TextInput 
          value={weight}
          onChangeText={text => setWeight(text)}
          keyboardType='number-pad'
          placeholder='Weight in kilograms'
        />
        <Text style={StyleSheet.label}>Bottles</Text>
        <Picker
          selectedValue={bottles}
          onValueChange={(itemValue) => setBottles(itemValue)}
        >
          {bottlenum.map((bottles) => (
            <Picker.Item label={bottles.label} value={bottles.value}/>
          ))}
        </Picker>
        <Text style={StyleSheet.label}>Time</Text>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue) => setTime(itemValue)}
        >
          {times.map((time) => (
            <Picker.Item label={time.label} value={time.value}/>
          ))}
        </Picker>
        <Text style={StyleSheet.label}>Gender</Text>
        <RadioForm style={StyleSheet.radiobtns}
          initial={0}
          radio_props={genders}
          onPress={(value) => setGender(value)}
        />
        <Text style={[StyleSheet.result,{color:colour}]}>{bac.toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>
      </ScrollView> 
    </View>

  );
};

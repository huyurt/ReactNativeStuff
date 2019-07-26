import React, {Component} from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from "./common";

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Ad Soyad"
                        placeholder="Çalışanın Adı Soyadı"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Telefon"
                        placeholder="Çalışanın Telefonu"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerText}>Mesai</Text>
                    <Picker
                        style={{flex: 2}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label='Pazartesi' value='Pazartesi'/>
                        <Picker.Item label='Salı' value='Salı'/>
                        <Picker.Item label='Çarşamba' value='Çarşamba'/>
                        <Picker.Item label='Perşembe' value='Perşembe'/>
                        <Picker.Item label='Cuma' value='Cuma'/>
                        <Picker.Item label='Cumartesi' value='Cumartesi'/>
                        <Picker.Item label='Pazar' value='Pazar'/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerText: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
        alignSelf: 'center'
    }
});

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);

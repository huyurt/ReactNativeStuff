import React, {Component} from 'react';
import {StyleSheet, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from "../actions";
import {Card, CardSection, Input, Button} from "./common";

class EmpCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Pazartesi'});
    }

    render() {
        return (
            <Card>
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

                <CardSection>
                    <Button onPress={this.onButtonPress().bind(this)}>
                        Ekle
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

const styles = StyleSheet.create({
    pickerText: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
        alignSelf: 'center'
    }
});

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate
})(EmpCreate);

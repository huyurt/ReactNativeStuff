import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from "react-native-communications";
import EmployeeForm from "./EmpForm";
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from "./common";

class EmployeeEdit extends Component {
    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.employee.item, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.item.uid});
    }

    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Mesai gününüz ${shift} olarak ayarlandı, bilginize.`)
    }

    onAccept() {
        const {uid} = this.props.employee.item;
        this.props.employeeDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Değişikliği Kaydet
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Çalışanı Bilgilendir
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Çalışanı Sil
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Çalışanı silmek istediğinize emin misiniz?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);

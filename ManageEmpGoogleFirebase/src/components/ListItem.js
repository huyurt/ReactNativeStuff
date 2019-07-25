import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {CardSection} from "./common";

class ListItem extends Component {
    render() {
        const {name} = this.props.employee.item;
        return (
            <CardSection>
                <Text style={styles.title}>
                    {name}
                </Text>
            </CardSection>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;

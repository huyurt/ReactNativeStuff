import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {CardSection} from "./common";

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {this.props.library.item.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;

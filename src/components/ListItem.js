import React, {Component} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const {id, title} = this.props.library.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default connect(null, actions)(ListItem);

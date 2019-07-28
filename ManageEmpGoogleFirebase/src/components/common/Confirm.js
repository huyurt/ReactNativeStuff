import React from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import PropTypes from "prop-types";
import {CardSection} from "./CardSection";
import {Button} from "./Button";

const Confirm = props => {
    return (
        <Modal
            visible={props.visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}
        >
            <View style={styles.container}>
                <CardSection style={styles.cardSection}>
                    <Text style={styles.text}>
                        {props.children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={props.onAccept}>Yes</Button>
                    <Button onPress={props.onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    cardSection: {
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    }
});

Confirm.propTypes = {
    children: PropTypes.string.isRequired,
    visible: PropTypes.string.isRequired,
    onAccept: PropTypes.func.isRequired,
    onDecline: PropTypes.func.isRequired
};

export {Confirm};

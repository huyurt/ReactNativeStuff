import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from "./common";

class EmpCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Ad Soyad"
                        placeholder="Çalışanın Adı Soyadı"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Telefon"
                        placeholder="Çalışanın Telefonu"
                    />
                </CardSection>
                <CardSection></CardSection>
                <CardSection>
                    <Button>
                        Ekle
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmpCreate;

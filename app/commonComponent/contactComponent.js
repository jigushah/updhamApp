import React from 'react';
import {Image, View} from 'react-native'
import { Text, Left, Right, Body } from 'native-base';

const contactPerson =[{title:"પ્રશાંત મહેતા",number:"૯૮૭૯૪ ૨૦૧૨૦",align:"left"},{title:"તુષાર મહેતા",number:"૯૮૭૯૮ ૮૦૮૮૦",align:"center"},{title:"હિરેન ગઢેચા",number:"૯૮૭૯૬ ૯૬૧૯૬",align:"right"}]

class ContactNumberComponent extends React.Component {
  render() {
    let { title } = this.props;
    return (
    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      {contactPerson.map((contact,i)=>{
          return(<View key={i} style={{ height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor:'transparent', padding:10 }}>
          <Text style={{ color: 'red', fontSize: 17 }}>{contact.title}</Text>
          <Text style={{ color: 'red', fontSize: 15 }}>{contact.number}</Text>
          </View>)
        })}
    </View>
    );
  }
}

export default ContactNumberComponent
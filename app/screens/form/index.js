import { Formik } from 'formik';
import React from 'react';
import {ActivityIndicator, Button, Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Container from '../../commonComponent/containerComponent';
import { FormFieldError, FormFieldInput, FormFieldTitle } from '../../commonComponent/formFieldTitle';
import { RadioComponent, RadioComponentShreeman, RadioComponentMulVidhi, RadioComponentDisease } from '../../commonComponent/radioComponent';
import { submitForm } from '../../actions/formAction'
import { connect } from 'react-redux';
import ContactNumberComponent from '../../commonComponent/contactComponent';

const avatar = require('../../images/avatar.png');
const {width} = Dimensions.get('window');

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  address: yup.string().required().label('Address'),
  mobile_number: yup.number().required().label('Mobile Number'),
  phone_number: yup.number().required().label('Phone Number'),
  name_of_relative: yup.string().required().label('Name of relatives'),
  ritauls: yup.string().required().label('Rituals'),
  type: yup.string().required().label('Type'),
  image: yup.string().required().label('Image'),
  is_shreeman: yup.string().required().label('Shreeman'),
  area: yup.string().required().label('Area'),
  city: yup.string().required().label('City'),
  age: yup.number().required().label('Age')
});

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contct: '-: સંપર્ક :-'
    }
  }

  static navigationOptions = {
    title: 'આવેદન પત્ર',
  };
  render() {
    return (
      <Container title='આવેદન પત્ર'>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{ 
            name: '',
            address:'',
            mobile_number:'',
            phone_number:'',
            type:'',
            age:'',
            name_of_relative:'',
            ritauls:'',
            image:'',
            is_shreeman:'',
            area:'',
            city:'',
             diseasesRequired:'' 
            }}
            onSubmit={(values, actions) => {
              // alert(JSON.stringify(values));
              if(values.diseasesRequired === "No"){
                values.diseases = values.diseasesRequired
              }
              this.props.submitForm(values)
                .then(res => {
                  alert('Form submitted successfully')
                  actions.resetForm({})
                  actions.setSubmitting(false);
                }).catch(err => {
                  actions.setSubmitting(false);
                })
            }}
            validationSchema={validationSchema}
          >
            {formikProps => (
              <View style={{ padding: 15 }}>
                <View style={{paddingBottom: 10, justifyContent:'center', alignItems:'center'}}>
                  <Image resizeMode={'contain'} style={{width: width * 0.98,height: width * 0.50, marginTop: 10,}}
                         source={require('../../images/splash.png')}/>
                </View>
                <View style={{paddingBottom: 10, justifyContent:'center', alignItems:'center'}}>
                  <FormFieldTitle title={'નોંધ: આવેદન પત્ર English માં ભરવું.'} />
                </View>

                <RadioComponentShreeman currentSelected={formikProps.values.is_shreeman || ''} onSelect={formikProps.handleChange('is_shreeman')} />
                {formikProps.touched.is_shreeman && <FormFieldError error={formikProps.errors.is_shreeman} />}
                <FormFieldTitle title={'નામ :'} />
                <FormFieldInput value={formikProps.values.name} onChangeTextInput={formikProps.handleChange('name')} />
                {formikProps.touched.name && <FormFieldError error={formikProps.errors.name} />}

                <FormFieldTitle title={'પત્ર વ્યવહારનું સરનામું :'} />
                <FormFieldInput value={formikProps.values.address} onChangeTextInput={formikProps.handleChange('address') } />
                {formikProps.touched.address  && <FormFieldError error={formikProps.errors.address} />}

                <FormFieldTitle title={'વિસ્તાર :'} />
                <FormFieldInput value={formikProps.values.area} onChangeTextInput={formikProps.handleChange('area') } />
                {formikProps.touched.area  && <FormFieldError error={formikProps.errors.area} />}

                <FormFieldTitle title={'શહેર :'} />
                <FormFieldInput value={formikProps.values.city} onChangeTextInput={formikProps.handleChange('city') } />
                {formikProps.touched.city  && <FormFieldError error={formikProps.errors.city} />}

                <FormFieldTitle title={'મો.નં. :'} />
                <FormFieldInput keyboardType={'phone-pad'} value={formikProps.values.mobile_number} onChangeTextInput={formikProps.handleChange('mobile_number')} />
                {formikProps.touched.mobile_number && <FormFieldError error={formikProps.errors.mobile_number} />}

                <FormFieldTitle title={'ફોન નં. :'} />
                <FormFieldInput keyboardType={'phone-pad'} value={formikProps.values.phone_number} onChangeTextInput={formikProps.handleChange('phone_number')} />
                {formikProps.touched.phone_number && <FormFieldError error={formikProps.errors.phone_number} />}

                <FormFieldTitle title={'ઉંમર :'} />
                <FormFieldInput value={formikProps.values.age} onChangeTextInput={formikProps.handleChange('age') } />
                {formikProps.touched.age  && <FormFieldError error={formikProps.errors.age} />}

                <FormFieldTitle title={'ઉપધાન તપમાં તમારા ઘરમાંથી કોઈ સંબંધી સાથે કરવાના હોય તો તેમનું નામ :'} />
                <FormFieldInput value={formikProps.values.name_of_relative} onChangeTextInput={formikProps.handleChange('name_of_relative')} />
                {formikProps.touched.name_of_relative && <FormFieldError error={formikProps.errors.name_of_relative} />}

                <FormFieldTitle title={'તમારે કયું ઉપધાન તપ કરવું છે ?'} />
                <RadioComponent currentSelected={formikProps.values.type || ''} onSelect={formikProps.handleChange('type')} />
                {formikProps.touched.type && <FormFieldError error={formikProps.errors.type} />}

                <FormFieldTitle title={'આપશ્રી મૂલવિધિથી ઉપધાન કરવા ઉત્સુક છો ?'} />
                {/* <FormFieldInput value={formikProps.values.ritauls} onChangeTextInput={formikProps.handleChange('ritauls')} /> */}
                <RadioComponentMulVidhi currentSelected={formikProps.values.ritauls || ''} onSelect={formikProps.handleChange('ritauls')} />
                {formikProps.touched.ritauls && <FormFieldError error={formikProps.errors.ritauls} />}

                <FormFieldTitle title={'કોઈ બિમારી હોય તો તે જાણકારી આપશો'} />
                <RadioComponentDisease currentSelected={formikProps.values.diseasesRequired||''} onSelect={formikProps.handleChange('diseasesRequired')} />
                {formikProps.values.diseasesRequired==="Yes" && <FormFieldInput value={formikProps.values.diseases} onChangeTextInput={formikProps.handleChange('diseases')} />}
                <FormFieldError error={formikProps.errors.diseases} />
                <TouchableOpacity onPress={() => {
                  ImagePicker.showImagePicker(options, (response) => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else {
                      debugger;
                      formikProps.setFieldValue('image', response)
                    }
                  });
                }}>
                  <FormFieldTitle title={"Upload ફોટો"}/>
                {
                  formikProps.values.image ?
                  <Image source={{ uri:formikProps.values.image.uri }} style={{ height: 100, width: 200 }} />
                  :
                  <Image source={avatar} style={{ height: 100, width: 100 }} resizeMode={"contain"}/>
                }
                </TouchableOpacity>
                {formikProps.touched.image && <FormFieldError error={formikProps.errors.image} />}
                
                <FormFieldTitle title={'ઈ-મેઇલ :'} />
                <FormFieldInput value={formikProps.values.email} onChangeTextInput={formikProps.handleChange('email')} />
                {formikProps.touched.email && <FormFieldError error={formikProps.errors.email} />}


                <FormFieldTitle title={'હું ઉપધાન તપના બધા નિયમોનું પાલન કરીશ અને ગુરૂની આજ્ઞાનું પાલન કરીશ.'} />
                {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity style={{
                        borderColor: 'rgb(251,216,84)', padding: 10,
                        borderWidth: 2, borderRadius: 5
                      }}
                        onPress={formikProps.handleSubmit}>
                        <Text>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  )}
              </View>
            )}
          </Formik>
          <Text style={{color: 'red', fontSize: 17, textAlign: 'center', justifyContent: 'center'}}>{this.state.contct}</Text>
          <ContactNumberComponent />
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = {
  submitForm
};

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen)
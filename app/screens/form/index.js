import { Formik } from 'formik';
import React from 'react';
import { ActivityIndicator, Button, Image, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Container from '../../commonComponent/containerComponent';
import { FormFieldError, FormFieldInput, FormFieldTitle } from '../../commonComponent/formFieldTitle';
import RadioComponent from '../../commonComponent/radioComponent';
import { submitForm } from '../../actions/formAction'
import { connect } from 'react-redux';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  address: yup.string().required().label('Address'),
  mobile_number: yup.number().required().label('Mobile Number'),
  phone_number: yup.number().required().label('Phone Number'),
  name_of_relative: yup.string().required().label('Name of relatives'),
  ritauls: yup.string().required().label('ritauls'),
  type:yup.string().required().label('Type'),
  image:yup.string().required().label('Image')
});

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class FormScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  
  render() {
    return (
      <Container title='Form'>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, actions) => {
              // alert(JSON.stringify(values));
                this.props.submitForm(values)
                .then(res => {
                  alert('user created sucessfully')
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
                <FormFieldTitle title={'નામ : શ્રીમાન/શ્રીમતી'} />
                <FormFieldInput value={formikProps.values.name} onChangeTextInput={formikProps.handleChange('name')} />
                <FormFieldError error={formikProps.errors.name}/>

                <FormFieldTitle title={'પત્ર વ્યવહારનું સરનામું :'} />
                <FormFieldInput value={formikProps.values.address} onChangeTextInput={formikProps.handleChange('address')} />
                <FormFieldError error={formikProps.errors.address} />

                <FormFieldTitle title={'મો.નં. :'} />
                <FormFieldInput keyboardType={'phone-pad'} value={formikProps.values.mobile_number} onChangeTextInput={formikProps.handleChange('mobile_number')} />
                <FormFieldError error={formikProps.errors.mobile_number} />

                <FormFieldTitle title={'ફોન નં. :'} />
                <FormFieldInput keyboardType={'phone-pad'} value={formikProps.values.phone_number} onChangeTextInput={formikProps.handleChange('phone_number')} />
                <FormFieldError error={formikProps.errors.phone_number} />

                <FormFieldTitle title={'ઉપધાન તપમાં તમારા ઘરમાંથી કોઈ સંબંધી સાથે કરવાના હોય તો તેમનું નામ :'} />
                <FormFieldInput value={formikProps.values.name_of_relative} onChangeTextInput={formikProps.handleChange('name_of_relative')} />
                <FormFieldError error={formikProps.errors.name_of_relative} />

                <FormFieldTitle title={'તમારે કયું ઉપધાન તપ કરવું છે ?'} />
                <RadioComponent currentSelected={formikProps.values.type || ''} onSelect={formikProps.handleChange('type')}/>
                <FormFieldError error={formikProps.errors.type} />
                
                <FormFieldTitle title={'આપશ્રી મૂલવિધિથી ઉપધાન કરવા ઉત્સુક છો ?'} />
                <FormFieldInput value={formikProps.values.rituals} onChangeTextInput={formikProps.handleChange('ritauls')} />
                <FormFieldError error={formikProps.errors.rituals} />

                <FormFieldTitle title={'કોઈ બિમારી હોય તો તે જાણકારી આપશો'} />
                <FormFieldInput value={formikProps.values.diseases} onChangeTextInput={formikProps.handleChange('diseases')} />
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
                  <Text>Upload ફોટો</Text>
                </TouchableOpacity>
                <Image source={{ uri:formikProps.values.image? formikProps.values.image.uri:''}} style={{height:100, width:100}} />
                <FormFieldError error={formikProps.errors.image} />

                <FormFieldTitle title={'હું ઉપધાન તપના બધા નિયમોનું પાલન કરીશ અને ગુરૂની આજ્ઞાનું પાલન કરીશ.'} />
                {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                  <View style={{alignItems:'center'}}> 
                    <TouchableOpacity style={{borderColor:'rgb(251,216,84)', padding:10,
                    borderWidth:2,borderRadius:5}} 
                    onPress={formikProps.handleSubmit}>
                      <Text>Submit</Text>
                    </TouchableOpacity>
                    </View>
                  )}
              </View>
            )}
          </Formik>
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
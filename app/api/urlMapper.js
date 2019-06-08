const BASE_URL = 'http://127.0.0.1:8000/';//'https://updham.herokuapp.com'; 
const S3_MEDIA_URL = 'https://ykjs.s3-ap-northeast-1.amazonaws.com'
const USER = 'users/'
const MEDIA = 'upload-media/'

export default {
    BASE_URL,
    S3_MEDIA_URL,
    submitForm: `${BASE_URL}/${USER}`,
    getDocument: `${BASE_URL}/${MEDIA}`
}
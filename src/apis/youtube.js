import axios from 'axios';

const KEY = 'AIzaSyAvkBKPRtEUtN3L4LKyZUC-vENf6-R0arA';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


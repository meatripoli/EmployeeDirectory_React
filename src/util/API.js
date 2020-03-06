import axios from 'axios';

export default {
    top50Results: function(url) {
        return axios.get(url);
    }
};
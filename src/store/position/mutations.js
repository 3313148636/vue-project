
import { CHANGE_CITY, SAVE_INFOR, ALL_INFOR } from './mutation-type'
import _ from 'lodash'

export default {
    [CHANGE_CITY]: (state, payload) => {
        state.city = payload.city;
        if(payload.cities) state.cities = payload.cities;

        var arr = JSON.parse(localStorage.getItem('nowcity'));

        var nowcity = arr ? arr : [];
        
        if(!_.find(nowcity, payload.city)){
            nowcity.unshift(payload.city)
            if(nowcity.length > 3) nowcity.pop();
            localStorage.nowcity = JSON.stringify(nowcity);
            state.nowcity = nowcity;
        }
    },

    [SAVE_INFOR]: (state, payload) => {
        state.info = payload.infor;
    },

    [ALL_INFOR]: (state, payload) => {
        state.allinfo = payload.allinfo;
    }
}
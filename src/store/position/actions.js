
import http from '@util/axios'
import { CHANGE_CITY } from './mutation-type'

export default {
    async getCurrentPosition(context){
        let cityId = 1;
        let cityName = '北京';

        //获取城市信息
        let citys = await http({
            url: '/static/mock/city.json'
        })
        //定位当前城市
        let result = await http({
            url: '/bd/location/ip',
            params: {
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        })

        //如果定位成功
        if( result.status == 0 ){
            cityName = result.content.address.replace('市', '');
            for(var i=0, len = citys.data.length; i<len; i++){
                if(citys.data[i].nm == cityName){
                    cityId = citys.data[i].id;
                    break;
                }
            }
        }

        localStorage.setItem('city', JSON.stringify({cityId, cityName}));
        localStorage.setItem('cities', JSON.stringify(citys));
        
        context.commit({
            type: CHANGE_CITY,
            city: {cityId, cityName},
            cities: citys
        })
    }
}
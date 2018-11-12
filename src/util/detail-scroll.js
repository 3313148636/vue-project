const scroll = (that) => {
    var flag = true;
    window.addEventListener('scroll', async function(){
        var app_h = document.getElementById('app').offsetHeight;
        var appheader_h = document.getElementsByClassName('app-header')[0].offsetHeight;
        var scrolltop = document.documentElement.scrollTop;
        if(app_h+appheader_h < 2919){
            return false;
        }else{
            if(app_h+appheader_h - 672 <= scrolltop){
                if(flag){
                    flag = false;
                    var result = await that.$refs.fun.getdataildata();
                    if(result){
                        flag = true;
                    }
                    if(result.length< 20){
                        flag = false;
                    }
                }
            }
        }
    })
}

export default scroll
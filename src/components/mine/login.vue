
<template>
    <div class="login">
        <header class="login-header">
            <ul class="login-header-ul">
                <li class="login-header-li active">
                    <span>美团账号登录</span>
                </li>
                <li class="login-header-li">
                    <span>手机验证登录</span>
                </li>
            </ul>
        </header>
        <div class="mt-account">
            <form action="" class="login_form" id='login_form'>
                <div class="acc_pho_ema _input">
                    <input type="text" placeholder="账户名/手机号/Email" required>
                </div>
                <div class="password _input">
                    <input type="password" placeholder="请输入您的密码">
                </div>
            </form>
        </div>
        <div class="submit">
            <input type="submit" value="登录" form='login_form'>
        </div>
        <div class="regist_password">
            <span>立即注册</span>
            <span>找回密码</span>
        </div>
        <div class="tel">
            © 猫眼电影 客服电话：<span>400-670-5335</span>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        
        },
        created(){
            this.$emit('update:headertitle', '猫眼电影');
        }
    }
</script> 

<style lang="scss">
    .login{
        background-color: #f8f8f8;
        padding-top: 1.373334rem;
        height: 17.786667rem;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        .login-header{
            background: #fff;
            overflow: hidden;
            text-align: center;
            height: 1.12rem;
            .login-header-ul{
                padding-left: .266667rem;
                padding-right: .266667rem;
                border-bottom: .106667rem solid #d6d6d6;
                height: 1.12rem;
                display: flex;
                color: #333;
                .login-header-li{
                    line-height: 1.013334rem;
                    font-size: .373334rem;
                    position: relative;
                }
                .active{
                    color:#df2d2d; 
                    &:after{
                        content: '';
                        position: absolute;
                        display: block;
                        height: .106667rem;
                        background: #df2d2d;
                        width: 100%;
                    }
                }
            }
        }
        .mt-account{
            background: #fff;
            height: 2.293334rem;
            padding: 0 .266667rem;
            .login_form{
                height: 100%;
                ._input{
                    height: 50%;
                    input{
                        margin: .2rem 0;
                        width: 100%;
                        height: .8rem;
                        border-radius: .08rem;
                        border: none;
                        outline: none;
                        color: #333;
                        font-size: 15px;
                    }
                    input:focus{
                        background: #ececec;
                        caret-color: rgba($color: #000000, $alpha: 0.3);
                    }
                }
                .acc_pho_ema{
                    border-bottom: 1px solid #d6d6d6;
                }
            }
        }
        .submit{
            height: 2rem;
            padding: .373334rem .266667rem;
            input{
                height: 100%;
                width: 100%;
                background: #df2d2d;
                border: none;
                border-radius: .08rem;
                cursor: pointer;
                color: #fff;
                font-size: .533334rem;
            }
        }
        .regist_password{
            height: .373334rem;
            padding: 0 .266667rem;
            font-size: .373334rem;
            line-height: .373334rem;
            color: #df2d2d;
            display: flex;
            span:nth-of-type(2){
                text-align: right;
            }
        }
        .tel{
            height: .773334rem;
            padding-top: .4rem;
            font-size: .373334rem;
            line-height: .373334rem;
            text-align: center;
            color: #333;
            span{
                color: #df2d2d;
            }
        }
    }
</style>

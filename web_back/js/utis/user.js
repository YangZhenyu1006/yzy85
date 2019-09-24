var user ={
    /**
     * 
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    login:function(userName,password,callBack){
        //ajax请求
        $.post(URLIST.user_login,{
            user_name : userName,
            password : password
        },
        function(y){
            // y是响应体，是由、$.post决定的
            callBack(y);
        });
    },
    /**
     * 用户退出
     * @param {*} callBack 
     */
    logout:function(callBack){
       $.post(URLIST.user_logout,function(y){
        callBack(y)
       }) ;
    },
    
    getInfo:function(callBack){
        $.get(URLIST.user_getInfo,function(res){
        callBack(res);
        });
    },

    editInfo:function(fd,callBack){
        $.ajax({
            type:'post',
            data:fd,
            url:URLIST.user_editInfo,
            contentType:false,
            processData:false,
            success:function(res){
                callBack(res);
            }
        });
    }
};
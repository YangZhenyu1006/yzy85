/**
 * 文章类别
 */
var category = {
    show:function(callBack){
        $.get("http://localhost:8000/admin/category_search",function(res){
            callBack(res);
        });
    },
    add:function(name,slug,callBack){
        $.post("http://localhost:8000/admin/category_add",{name:name,slug:slug},function(res){
            callBack(res);
        });
    },
    del:function(){

    },
    edit:function(){

    }
}
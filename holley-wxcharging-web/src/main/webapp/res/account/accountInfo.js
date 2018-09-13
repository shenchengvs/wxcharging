
 $(function() {

     FastClick.attach(document.body);
     var storage= window.localStorage;
     storage = storage ? storage : [];

     var flag='- -';
     $.showLoading('Loading');
     console.log(storage);
     var imgIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=';
     if(storage.getItem('headimgurl')===null){//若本地缓存是没有
    	 $.hideLoading();
    	 $.toast('获取用户头像失败','cancel',function() {
    		 $('.head-imgurl').prop('src',imgIcon);
         });
     }else{
    	 $('.head-imgurl').prop('src',(storage.getItem('headimgurl')===null)?imgIcon:storage.getItem('headimgurl'));
    	 $.hideLoading();
     }
     
     $('.nick-name').text((storage.getItem('nickname')===null)?flag:storage.getItem('nickname'))
     $('.user-city').text((storage.getItem('city')===null)?flag:storage.getItem('city'));
//     $.hideLoading();
    
   





 })
var curDataLength,// 当前招聘栏目数据长度
    curDataArr,// 当前招聘栏目
    curPage = 1,// 当前页码
    pageLen = 0,// 页数
    pagerWidth = 0,// 翻页栏宽度
    ID = 'worker';// 默认招聘栏目
// 获取特定页数据
var getDateOfPage = function(){
    var cnt = 10 * (curPage - 1);// 根据页数标记数据的开始
    $('.list_content').each(function(){// 遍历所有列表行
        $(this).find('li').each(function(){// 把每一列表行的数据遍历放到网页中
            if(curDataArr[cnt]){// 有数据放 无数据让列表行消失
                $(this).show()
                        .text(curDataArr[cnt][$(this).index()]);
            }else{
                $(this).hide()
                        .text('');
            }
        });
        cnt++;
    });
};
// AJAX异步获取数据函数
var ajaxGetData = function(ID){ // 根据招聘栏目的ID取出Ajax获取的对应数据
    $.ajax({
        type: 'GET',
        url: 'http://localhost/wp-debang/src/data/data.txt',
        success: function(data){
            curDataArr = (JSON.parse(data))[ID];// 保存对应的数据集合
            curDataLength = curDataArr.length;// 对应数据集合的长度
            pageLen = Math.ceil(curDataLength / 10);// 根据集合长度计算总页数
            var circLen = (pageLen > 5) ? 5 : pageLen;// 页面应该显示的页数, 迭代次数
            $('.pager_cell').remove();// 刷新翻页栏
            $('.pager_prev,.pager_next').hide(); 

            if(pageLen >= 2){// 页数大于二才创建翻页栏
                for(var i = 0; i < circLen; i++){// 创建DOM节点插入DOM树
                    $('<li class="pager_cell">' + (i + 1) + '</li>').insertBefore('.pager_next');
                }
                $('.pager_next').show();// 显示下一页
                pagerWidth = circLen * $('.pager_cell').outerWidth() + $('.pager_next').outerWidth();// 更新翻页栏宽度
                $('.pager>ul').width(pagerWidth);
                $('.pager_cell').eq(curPage - 1).addClass('pager_choose');// 默认选中页
            }
            getDateOfPage();//更新页内容
        }
    });
};
// 翻页功能
$('.pager>ul').on('click','li',function(){
    $(this).trigger('changepage');
    $('.pager>ul').trigger('changewidth');
}).on('changewidth',function(){// 自定义翻页组件宽度改变事件
    var wid = 0;
    $('.pager>ul').find('.pager_cell').each(function(){
        wid += $(this).outerWidth();
    });
    if($('.pager_prev').is(':visible')){
        wid += $('.pager_prev').outerWidth();
    }
    if($('.pager_next').is(':visible')){
        wid += $('.pager_next').outerWidth();
    }// 计算翻页组件宽度
    if(wid != pagerWidth){// 如果组件宽度改变,改变父节点宽度,实现翻页组件的居中,宽度自适应
        pagerWidth = wid;
        $(this).width(pagerWidth);
    }
}).on('changepage','li',function(){// 自定义翻页事件

    if($(this).hasClass('pager_prev')){// 通过点击判断新的当前页
        curPage--;
    }else if($(this).hasClass('pager_next')){
        curPage++;
    }else{
        curPage = $(this).text();
    }

    if(curPage > 2 && curPage < pageLen - 1){// 中间的页数产生居中的翻页效果
        $('.pager_cell').each(function(index){
            $(this).text(curPage - 2 + index);
        });
    }else if(curPage <= 2){
        $('.pager_cell').each(function(index){
            $(this).text(1 + index);
        });
    }else {
        $('.pager_cell').each(function(index){
            $(this).text(pageLen - 4 + index);
        });
    }
    $('.pager_cell:contains(' + curPage + ')').addClass('pager_choose')// 修改当前页的高亮显示
        .siblings().removeClass('pager_choose');

    if(curPage > 1){// 实现首页和尾页对应没有上一页和下一页
        $('.pager>ul').find('.pager_prev').show();
    }else{
        $('.pager>ul').find('.pager_prev').hide();            
    }
    if(curPage < pageLen){
        $('.pager>ul').find('.pager_next').show();
    }else{
        $('.pager>ul').find('.pager_next').hide();            
    }
    
    getDateOfPage();// 翻页后改变列表数据
});
// AJAX获取数据
ajaxGetData(ID);
// 关键字输入框聚焦失焦处理
$(".keyword").on('focus', function(){
    if($(this).val() === this.defaultValue){
        $(this).val('');
    }
}).on('blur', function(){
    if($(this).val() === ""){
        $(this).val(this.defaultValue);
    }
});
// 职位选择动态样式处理
$('.page_nav').on('click','li:not(".nav_choose")',function(e){// 选择不同的招聘栏获取不同数据
    pagerWidth = 0;
    curPage = 1;
    $('.pager>ul').trigger('changewidth');
    $(e.target).addClass('nav_choose')
        .siblings().removeClass('nav_choose');
    ID = this.id;
    ajaxGetData(ID);
});
// 城市选择框首字母选择动态样式处理
$('.city_titile').on('mouseover', 'li', function(){
    var i = $(this).index();
    if(!$(this).hasClass('ct_active')){
        $(this).addClass('ct_active')
            .siblings().removeClass('ct_active')
            .parent().siblings().eq(i).addClass('cd_active')
            .siblings().filter('.city_detail').removeClass('cd_active');
    }
});
// 选择城市处理
$('.city_detail').on('click', 'li', function(){
    $(this).parents('.city').siblings('.position').val($(this).text());// 选择城市后改变输入框中城市名
})
// 鼠标悬浮出现城市选择框处理
$('.shadow').on('mouseover', function(){
    $('.city').show()
    .on('mouseover',function(){// 鼠标悬浮输入框后可以在出现的城市选择框中继续操作
        $(this).show();
    })
    .on('mouseout',function(){
        $(this).hide();
    });
}).on('mouseout', function(){
    $('.city').hide();
});
<template>
    <div class="content-wrap">
        <div class="android-content">
            <div class="element">
                <div class="version-date">2019-12-04</div>
                <div class="info-wrap">
                    <div class="bg-circle">
                        <span class="circle"></span>
                    </div>
                    <div class="text-wrap">
                        <p class="info-title">哔哩哔哩动画<span>android</span>5.51.1</p>
                        <div id="update" v-for="item in items" :key="item.id">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="element">
                <div class="version-date">2019-11-28</div>
                <div class="info-wrap">
                    <div class="bg-circle">
                        <span class="circle"></span>
                    </div>
                    <div class="text-wrap">
                        <p class="info-title">哔哩哔哩动画<span>android</span>5.51.0</p>
                        <div id="update" v-for="item in items" :key="item.id">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="element">
                <div class="version-date">2019-11-15</div>
                <div class="info-wrap">
                    <div class="bg-circle">
                        <span class="circle"></span>
                    </div>
                    <div class="text-wrap">
                        <p class="info-title">哔哩哔哩动画<span>android</span>5.50.0</p>
                        <div id="update" v-for="todo in todos" :key="todo.id">
                            {{ todo.title }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="element">
                <div class="version-date">2019-10-17</div>
                <div class="info-wrap">
                    <div class="bg-circle">
                        <span class="circle"></span>
                    </div>
                    <div class="text-wrap">
                        <p class="info-title">哔哩哔哩动画<span>android</span>5.49.0</p>
                        <div id="update" v-for="val in vals" :key="val.id">
                            {{ val.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.content-wrap .element {
    margin-left: 50px;
    display: table;
}
.content-wrap .version-date {
    float: left;
    color: #6d757a;
    margin-top: 5px;
}

.content-wrap .info-wrap {
    float: left;
    position: relative;
    min-height: 100px;
    margin-left: 40px;
    border-left: 1px solid #e5e9ef;
}
.content-wrap .bg-circle {
    width: 27px;
    height: 27px;
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 0;
    left: -14px;
}
.content-wrap .circle {
    width: 19px;
    height: 19px;
    display: inline-block;
    margin-top: 3px;
    border: 1px solid #e5e9ef;
    border-radius: 20px;
}

.content-wrap .text-wrap {
    color: #6d757a;
    line-height: 28px;
    margin-left: 40px;
    padding-bottom: 40px;
}
.content-wrap .info-title {
    font-size: 16px;
    font-weight: bold;
    color: #6d757a;
    margin-bottom: 15px;
}
.content-wrap .info-title span {
    margin: 0 10px;
}
</style>


<script>
export default {
    name:'update',
    data(){
        return{
            items:[
                {title:"-动态发布支持@自动识别，召唤好友更轻松"},
                {title:"-空间主页新增追漫模块，漫画更新先知道"},
                {title:"-移动投稿文字模板分类展示，找到心仪字幕更快捷"}
            ],
            todos:[
                {title:"-bilibili移动宝藏卡上线，刷番看剧全免流"},
                {title:"-手机投稿编辑器大升级，新添变焦、旋转功能等你来拍"}
            ],
            vals:[
                {title:"-账号支持短信登录，忘记密码也不怕"},
                {title:"-频道全新升级！快来看看B站都攒了哪些好视频？"},
                {title:"-互动视频选项皮肤可选择，选项样式不再千篇一律"},
                {title:"-拍摄页面大升级，界面简洁更美观！"}
            ]
        }
    }
}
</script>
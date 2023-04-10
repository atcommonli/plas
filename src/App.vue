<template>
  <div>  
    <div v-for="(item,index) in dataList"  @click="add(index)" class="title" :class="{ 'active': num == index }"> 
        {{ item.name }}
    </div>
    <!-- <div v-for="(item,index) in contentList"  class="content" :class="{ 'con-active': num == index }"> 
        {{ item.name }}
    </div> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            dataList: [
                    { id: 1, name: '早饭' },
                    { id: 2, name: '午饭' },
                    { id: 3, name: '晚饭' }
                ],
                contentList: [
                    { id: 1, name: '豆浆、青椒鸡蛋、宫保鸡丁' },
                    { id: 2, name: '米饭、麻辣羊肉、酸辣土豆丝' },
                    { id: 3, name: '鱼香肉丝、孜然羊肉' }
                ],
                num: 0 // 默认索引值为0 即“早饭”为默认选中的选项卡
        }
    },
    methods:{
        add(index){
            this.num = index
        }
    }

}

</script>

<style>
.title {
            flex: 1;
            text-align: center;
            height: 30px;
            line-height: 30px;
            border-bottom: 1px solid #D0D0D0;
            border-right: 1px solid #D0D0D0;
            cursor: pointer;
            background: pink;
        }
.content{
 display: none;
}
.active{
    color: #FFF;
    background: #5C7AE5;
}
.con-active{
    display: block;
}
</style>
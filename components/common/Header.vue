<template>
  <div class="head">
    <img src="~/assets/cnodejs.svg" title="cnodejs.svg">
    <el-button class="dialogBtn" type="text" @click="dialogVisible=true">关于</el-button>

    <el-dialog title="Nuxt重写CnodeJS社区" :visible.sync="dialogVisible" size="tiny" >
        <div class="dialogDiv">
            <span><strong>作者：</strong><a href="" target='_bank'>Cathy</a></span><br>
            <span><strong>技术栈: </strong></span>
            <ul>
                <li>Vue</li>
                <li>Nuxt</li>
                <li>Vue-router</li>
                <li>Axios</li>
                <li>Element</li>
                <li>CnodeJS API</li>
            </ul>
        </div> 
    </el-dialog>
  </div> 
</template>

<script>
export default {
  data() {
      return {
        dialogVisible: false
      };
    },
   
};
</script>
<style lang="scss">
@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-chalk/index.css");
.head {
  background: #444;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 120px;
    height: 100%;
    margin-left: 45px;
  }
  .dialogBtn {
    float: right;
    margin-right: 45px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    letter-spacing: 2px;
    padding-top: 3px;
  }
}
</style>

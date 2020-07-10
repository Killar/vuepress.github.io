---
title: 主页
date: 2020-06-25
author: baiyang
location: Beijing
---

<script>
  export default {
    data() {
      return {
        url: '/assets/img/blog/333.jpg',
        srcList: [
          '/vuepress.github.io/assets/img/blog/333.jpg'
        ]
      }
    }
  }
</script>

#

<div class="demo-image__preview" style="text-align: center;">
  <el-image 
    style="width: 500px; height: 300px"
    :src="$withBase(url)" 
    :preview-src-list="srcList">
  </el-image>
</div>

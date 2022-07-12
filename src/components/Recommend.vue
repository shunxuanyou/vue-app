<template>
  <div class="recommend">
    <h6>Recommend</h6>
    <ul>
      <li v-for="(item, index) in recommends" :key="index">
        <img :src="item['im:image'][1]['label']" loading="lazy"/>
        <div class="ellipsis">{{item['im:name']['label']}}</div>
        <div class="tag">{{item['category']['attributes']['label']}}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IEntry } from '@/types/home'
export default defineComponent({
  name: 'RecommendPage',
  props: {
    recommends: {
      type: Array as PropType<IEntry[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.recommend {
    border-top: 2px solid #f4f4f4;
    border-bottom: 2px solid #f4f4f4;
    padding: 8px 0;
     overflow: hidden;
    h6 {
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        padding: 0 7px;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        padding-right: 7px;
        scroll-behavior: smooth;
        li {
            width: 89px;
            padding: 0 7px;

            img {
              border-radius: 15px;
            }
            .ellipsis {
              font-size: 14px;
            }
            .tag {
                font-size: 12px;
                color: rgb(201, 201, 201);
                text-align: center;
            }
        }
    }
}
</style>

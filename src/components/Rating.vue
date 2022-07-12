<template>
  <div class="star">
    <span v-for="(item,index) in result" class="star-item" :key="index" :class="item"></span>
    <span class="count">({{userRatingCountForCurrentVersion}})</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RatingComponent',
  props: {
    trackContentRating: {
      type: Number,
      default: 0
    },
    userRatingCountForCurrentVersion: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const compRating = () => {
      const CLASS_ON = 'on'
      const CLASS_HALF = 'half'
      const CLASS_OFF = 'off'
      const result = []
      const scoreInt = Math.floor(props.trackContentRating)
      // 全星向上取整
      for (let i = 0; i < scoreInt; i++) {
        result.push(CLASS_ON)
      }
      // 在数组result添加0或1个'half'
      // 不精确所以乘10，大于5，原来只要大于0.5
      if ((5 - scoreInt) * 10 >= 5) {
        result.push(CLASS_HALF)
      }
      // 在数组result添加n个'off'
      // 数组不满5自动补
      while (result.length < 5) {
        result.push(CLASS_OFF)
      }
      return result
    }
    return {
      result: compRating()
    }
  }
})
</script>

<style lang="less" scoped>
.star {
  .star-item {
    width:14px;
    height:14px;
    display: inline-block;
    background-size:14px 14px;
    &.on {
      background-image: url('./images/star_on.png');
    }

    &.half {
        background-image: url('./images/star_half.png');
    }

    &.off {
        background-image: url('./images/star_off.png');
    }
  }
  .count {
    font-size: 12px;
    color: #c9c9c9;
  }
}

</style>

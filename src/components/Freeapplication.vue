<template>
  <div  v-if="freeapplications.length">
    <div class="application-card" v-for="(item, index) in freeapplications" :key="index">
      <div class="application-card__header">
        <div class="application-card__header__index">
          {{index + 1}}
        </div>
        <a class="application-card__header__thumb">
          <img :src="item['im:image'][0]['label']" class="van-image__img" style="object-fit: cover;" loading="lazy">
        </a>
        <div class="application-card__header__content">
            <div class="application-card__header__content__title ellipsis">{{item['im:name']['label']}}</div>
            <div class="application-card__header__content__desc">{{item['category']['attributes']['label']}}</div>
            <RatingComponent :trackContentRating="freeapplicationInfo[index].averageUserRating" :userRatingCountForCurrentVersion="freeapplicationInfo[index].userRatingCountForCurrentVersion"/>
      </div>
      </div>
    </div>
  </div>
  <div class="loading" v-else-if="!freeapplications.length && keyword.length">
    暂无结果
  </div>
  <div class="loading" v-else>
    loading...
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IEntry, IResults } from '@/types/home'
import RatingComponent from '@/components/Rating.vue'
export default defineComponent({
  name: 'FreeappLication',
  components: {
    RatingComponent
  },
  props: {
    keyword: {
      type: String as PropType<string>,
      default: ''
    },
    freeapplications: {
      type: Array as PropType<IEntry[]>,
      default: () => []
    },
    freeapplicationInfo: {
      type: Array as PropType<IResults[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.application-card {
    box-sizing: border-box;
    scroll-behavior: smooth;
    &__header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &__index {
        width: 48px;
        color: #A3A3A3;
        text-align: center;
        font-size: 12px;
      }
      &__thumb {
          width: 72px;
          height: 88px;
          line-height: 88px;
          img {
            width: 53px;
            height: 53px;
            vertical-align: middle;
          }
      }
      &__content {
          &__title {
            width: 186px;
            max-height: 32px;
            font-size: 14px;
          }
          &__desc {
            font-size: 12px;
            color: #c9c9c9;
          }
      }
    }
    &::after {
      content: '';
      border-bottom: 1px solid #F6F6F6;
      position: absolute;
      left: 16px;
      right: 0;
    }
}
// .application-card:nth-child(odd) .application-card__header__thumb img {
// }
.application-card:nth-child(even) .application-card__header__thumb img {
    border-radius: 50%;
}
.loading {
  text-align: center;
  height: 30px;
  line-height: 20px;
  font-size: 12px;
}
</style>

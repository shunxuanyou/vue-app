<template>
  <HeadSearch v-model="keyword" />
  <RecommendPage :recommends="recommends"/>
  <FreeappLication :keyword="keyword" :freeapplications="freeapplications" :freeapplicationInfo="freeapplicationInfo"/>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'
import { IEntry, IResults } from '@/types/home'
import * as fetch from '@/http/api/test'

import HeadSearch from '@/components/HeadSearch.vue'
import RecommendPage from '@/components/Recommend.vue'
import FreeappLication from '@/components/Freeapplication.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeadSearch,
    RecommendPage,
    FreeappLication
  },
  setup () {
    const state = reactive({
      keyword: '',
      recommends: [] as IEntry[],
      freeapplications: [] as IEntry[],
      freeapplicationsCopy: [] as IEntry[],
      freeapplicationInfo: [] as IResults[]
    })
    async function getData () {
      {
        // 获取推荐列表
        const res = await fetch.fetchRecommends(10)
        state.recommends = res.data?.feed.entry || []
      }

      {
        // 获取下载量最多的免费app列表
        const res = await fetch.fetchFreeapplications(100)
        const ids = res.data?.feed.entry.map((item: IEntry) => {
          return item.id.attributes['im:id'] || ''
        })
        // 根据id获取app的其他信息
        const resInfo = await fetch.fetchLookup(ids!.join(','))
        state.freeapplications = state.freeapplicationsCopy = res.data?.feed.entry || []
        state.freeapplicationInfo = resInfo.data?.results || []
      }
    }
    onMounted(() => {
      getData()
    })
    // 过滤条件
    const filterCriteria = (_: IEntry, newValue: string) => {
      const critetia = [_['im:name'].label, _['im:artist'].label, _.summary.label].join(',')
      return critetia.includes(newValue)
    }
    // 监听输入框的变化，更新搜索结果
    watch(() => state.keyword, (newValue, oldValue) => {
      if (newValue.trim() !== oldValue.trim()) {
        state.freeapplications = state.freeapplicationsCopy.filter((_: IEntry) => {
          return filterCriteria(_, newValue.trim())
        })
      } else {
        state.freeapplications = state.freeapplicationsCopy
      }
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style>
</style>

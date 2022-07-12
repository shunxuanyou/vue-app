<template>
 <div class="search-inset">
  <div class="search-inset-cell">
    <div class="search-inset-cell__label">
      <label id="" for="">
        <span class="iconfont">&#xe651;</span>
      </label>
    </div>
    <div class="search-inset-cell__value">
      <div class="search-inset-cell__value__body">
        <input type="text" placeholder="Search..." :value="modelValue" @input="updateValue">
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeadSearch',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup (props, context) {
    const updateValue = (e: Event) => {
      context.emit('update:modelValue', (e.target as HTMLInputElement).value)
    }
    return {
      updateValue
    }
  }
})
</script>

<style lang="less" scoped>
.search-inset {
   background-color: #fff;
    position: sticky;
    top: 0px;
    z-index: 1;
    overflow: hidden;
    &-cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 10px;
        background-color: rgb(244, 244, 244);
        height: 40px;
        border-radius: 25px;
        line-height: 56px;
        &__label {
            flex: 0 0 auto;
            padding: 0 0 0 12px;
            font-size: 14px;
            color: #333;
            line-height: 40px;
        }
        &__value {
            flex: 1;
            &:first-child {
                padding-left: 16px;
            }
            &__body {
                display: flex;
                align-items: center;
                height: 100%;
                &:first-child {
                    padding: 0 16px;
                }
                input {
                    display: block;
                    box-sizing: border-box;
                    width: 100%;
                    min-width: 0;
                    margin: 0;
                    padding: 0;
                    line-height: inherit;
                    text-align: left;
                    background-color: transparent;
                    border: 0;
                    resize: none;
                    user-select: auto;
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>

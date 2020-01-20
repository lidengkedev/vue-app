<template>
    <div v-click-outside="toggleVisible" class="select-warpper">
        <div :class="{'select-inner': true, 'is-focus': showSelectOption}">
            <input
                v-bind="$attrs" 
                type="text" 
                :value="currentValue"
                readonly 
                class="input" 
                :placeholder="placeholder" 
                @input="input" 
                @focus="focus" 
                @change="change">
            <!-- <svg-icon icon-class="arrow-down-fill" class-name="icon-arrow"></svg-icon> -->
        </div>
        <transition>
            <ul v-show="showSelectOption" class="option-warpper">
                <li v-for="(item, index) in options" :key="index" class="option-inner" @click="handleChange(item.value, item.label)">{{ item.label }}</li>
                <li v-if="options.length === 0" class="option-inner" @click="handleEmpty">暂无数据</li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { ClickOutside } from '../../../directives/index'
export default {
    name: 'LSelect',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        options: {
            type: Array,
            default: function() {
                return []
            }
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data() {
        return {
            showSelectOption: false,
            currentValue: ''
        }
    },
    directives: {
        ClickOutside
    },
    watch: {
      value(newvalue, oldvalue) {
        console.log([newvalue, oldvalue])
      }
    },
    methods: {
        input(e) {
            this.$emit('input', e.target.value)
        },
        focus(e) {
            this.showSelectOption = true
            this.$emit('on-focus', e.target.value)
        },
        change(e) {
            if (e.target.value === this.currentValue) return
            this.$emit('on-change', this.currentValue)
        },
        toggleVisible() {
            this.showSelectOption = false
        },
        handleChange(value, label) {
            this.currentValue = label
            this.$emit('on-change', value, label)
            this.showSelectOption = false
        },
        handleEmpty() {
            this.showSelectOption = false
        }
    }
}
</script>

<style lang="scss" scoped>
$-input-font-size: 16px;
$-input-font-color: #808080;
$-input-font-family: '微软雅黑';
$-border-color: #ccc;
$-input-background-color: transparent;
$-input-height: 30px;

.select-warpper {
    position: relative;
    display: inline-block;
}
// select
.select-inner {
    position: relative;
    .input {
        padding-left: 9px;
        height: $-input-height;
        border: 1px solid $-border-color;
        border-radius: 0;
        font-family: $-input-font-family;
        font-size: $-input-font-size;
        color: $-input-font-color;
        background-color: $-input-background-color;
        outline: none;
        box-sizing: border-box;
        transition-duration: 0.3s;
        &:focus {
            border-color: #5a9df7;
        }
    }
    .icon-arrow {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
        color: #808080;
        transition-duration: 0.3s;
    }
    &.is-focus {
        .icon-arrow {
            transform: rotate(180deg);
        }
    }
}
// option
.option-warpper {
    position: absolute;
    left: 0;
    top: $-input-height;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 200px;
    border: 1px solid $-border-color;
    z-index: 10;
    background-color: #FFF;
    .option-inner {
        padding: 10px;
        display: block;
        font-family: $-input-font-family;
        font-size: 14px;
        color: $-input-font-color;
        cursor: pointer;
        &:hover {
            background-color: #f5f7fa;
        }
    }
}
.v-enter-active,
.v-leave-active {
    transform-origin: top center;
    transition: transform 0.3s;
}
.v-enter,
.v-leave-to {
    transform: scaleY(0);
}
.v-enter-to,
.v-leave {
    transform: scaleY(1);
}
</style>

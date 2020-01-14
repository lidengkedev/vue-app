# v-click-outside

自定义指令：当鼠标触发目标元素以外的区域时触发

## 用法

```html
<div v-click-outside="toggleVisible"></div>
```

```javascript
import { ClickOutside } from '@/directives'
export default {
    directives: {
        ClickOutside
    },
    methods: {
        toggleVisibel() {
            // do something
            // ...
        }
    }
}
```
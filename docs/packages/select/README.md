> iview 中 select 组件渲染后的DOM结构如下：

```html
<div class="ivu-select ivu-select-visible ivu-select-single ivu-select-default" style="width: 200px;">
  <div tabindex="0" class="ivu-select-selection">
    <input type="hidden" value="New York">
    <div class="">
      <span class="ivu-select-selected-value">New York</span>
      <i class="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow"></i>
    </div>
  </div>
  <div class="ivu-select-dropdown" style="min-width: 200px; position: absolute; will-change: top, left; transform-origin: center top; top: 52px; left: 20px;" x-placement="bottom-start">
    <ul class="ivu-select-not-found" style="display: none;">
      <li>无匹配数据</li>
    </ul>
    <ul class="ivu-select-dropdown-list">
      <li class="ivu-select-item ivu-select-item-selected ivu-select-item-focus">New York</li>
      <li class="ivu-select-item">London</li>
      <li class="ivu-select-item">Sydney</li>
      <li class="ivu-select-item">Ottawa</li>
      <li class="ivu-select-item">Paris</li>
      <li class="ivu-select-item">Canberra</li>
    </ul>
    <ul class="ivu-select-loading" style="display: none;">加载中</ul>
  </div>
</div>
```
```css
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.ivu-select {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  color: #515a6e;
  font-size: 14px;
  line-height: normal;
}
.ivu-select-visible .ivu-select-selection {
  border-color: #57a3f3;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
.ivu-select-single .ivu-select-selection {
  height: 32px;
  position: relative;
}
.ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 24px;
}
.ivu-icon {
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: optimizeLegibility;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: -.125em;
  text-align: center;
}
.ivu-select-arrow {
  position: absolute;
  top: 50%;
  right: 8px;
  line-height: 1;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 14px;
  color: #808695;
  transition: all .2s ease-in-out;
}
.ivu-select-visible .ivu-select-arrow {
  -webkit-transform: translateY(-50%) rotate(180deg);
  transform: translateY(-50%) rotate(180deg);
  display: inline-block;
}
.ivu-select-dropdown {
  width: inherit;
  max-height: 200px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  position: absolute;
  z-index: 900;
}
.ivu-select .ivu-select-dropdown {
  width: auto;
}
.ivu-select-not-found {
  text-align: center;
  color: #c5c8ce;
}
.ivu-article .ivu-select ul {
  padding-left: 0!important;
  list-style-type: none;
}
.ivu-article .ivu-select ul {
  padding-left: 0!important;
  list-style-type: none;
}
.ivu-article .ivu-select li {
  margin-bottom: 0;
}
.ivu-article li:not([class^=ivu-]) {
  margin-bottom: 5px;
  font-size: 14px;
}
.ivu-select-not-found li:not([class^=ivu-]) {
  margin-bottom: 0;
}
.ivu-select-item-selected, .ivu-select-item-selected:hover {
  color: #2d8cf0;
}
.ivu-select-item-focus, .ivu-select-item:hover {
  background: #f3f3f3;
}
.ivu-select-item {
  margin: 0;
  line-height: normal;
  padding: 7px 16px;
  clear: both;
  color: #515a6e;
  font-size: 14px!important;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  transition: background .2s ease-in-out;
}
.ivu-select-loading {
  text-align: center;
  color: #c5c8ce;
}
```
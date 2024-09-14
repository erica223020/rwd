# 響應式網頁設計-三角香氛
### 嘗試以香氛作為主題，製作一個香氛的形象網站
&nbsp;


#  歷史版本
* 1.0
    * 新增:建立`index.html`
* 1.1
    * 新增:建立`README.md`
* 1.2
    * 新增:建立`style.css`
* 2.0
    * 刪除:`style.css`。新增：建立`main.scss`，並大幅更改整體佈局
* 2.1
    * 新增:將重複性header與footer以`header.js`、`footer.js`的方式導入
* 2.1.1
    * 修正：`_layout.scss`、`_base.scss`內部微小bug
* 2.1.2
    * 新增： `_layout.scss` hover效果
* 2.2
    * 新增： `_index.scss`，修正：`_variables.scss`
* 3.0
    * 新增： 首頁手機版型、首頁平板版型
* 3.1
    * 修正`_index.scss`、`_base.scss`、`_layout.scss`、`index.html`手機版型造成的版型問題


&nbsp;
# 軟體使用
* 設計圖繪製使用 : AdobeXD (線上標示文件設計稿：https://reurl.cc/6ZnddM)
* 程式設計 ： VSCode
* 圖片編輯 ： Adobe Photoshop

&nbsp;
# 參考資料
* HANSCHIU 品牌官方網站
* medskin 品牌官方網站
* 六角西餐廳

&nbsp;
## 遇到問題

* 1.標題有超過兩行字的時候，可以第二行使用span 然後設定display:block屬性來換行
* 2.text-align:適用於「 block container 」
* 3.menu右側會空一大格
    * 已解決 要連a連結一起隱藏，不能夠只隱藏logo

* toggleClass一直失敗，沒辦法讓他點一下出現
    * 已解決 在上一層toggleClass就好，一開始設定body太遠了

* header的menu會被圖片蓋到
    * 已解決，使用 z-index: 決定元素重疊時的上下層;

* input內部無法加入圖示
    * 已解決 ，在外部新增div將input以及圖示包起來

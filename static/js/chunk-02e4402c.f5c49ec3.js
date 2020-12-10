(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02e4402c"],{3065:function(e,r,t){},"4ef7":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"user-container"},[t("h3",[e._v("Router view - 商品管理")]),t("el-form",{ref:"form",staticClass:"demo-form",attrs:{model:e.form,rules:e.rules,"label-width":"100px","label-position":"left"}},[t("el-form-item",{attrs:{label:"商品名稱",prop:"productName"}},[t("el-input",{model:{value:e.form.productName,callback:function(r){e.$set(e.form,"productName",r)},expression:"form.productName"}})],1),t("el-form-item",{attrs:{label:"商品售價",prop:"productPrice"}},[t("el-input",{model:{value:e.form.productPrice,callback:function(r){e.$set(e.form,"productPrice",r)},expression:"form.productPrice"}})],1),t("el-form-item",{attrs:{label:"商品狀況",prop:"productCondition"}},[t("el-checkbox-group",{attrs:{max:2},model:{value:e.form.productCondition,callback:function(r){e.$set(e.form,"productCondition",r)},expression:"form.productCondition"}},[t("el-checkbox",{attrs:{label:1}},[e._v("全新")]),t("el-checkbox",{attrs:{label:2}},[e._v("拆檢")]),t("el-checkbox",{attrs:{label:3}},[e._v("拆擺")]),t("el-checkbox",{attrs:{label:4}},[e._v("有損")]),t("el-checkbox",{attrs:{label:5}},[e._v("無損")])],1)],1),t("el-form-item",{attrs:{label:"現貨/轉單",prop:"name"}},[t("el-radio",{attrs:{label:1},model:{value:e.form.isSpot,callback:function(r){e.$set(e.form,"isSpot",r)},expression:"form.isSpot"}},[e._v("現貨")]),t("el-radio",{attrs:{label:0},model:{value:e.form.isSpot,callback:function(r){e.$set(e.form,"isSpot",r)},expression:"form.isSpot"}},[e._v("轉單")])],1),t("el-form-item",{attrs:{label:"商品分類",prop:"region"}},[t("el-select",{attrs:{placeholder:"選擇性別"},model:{value:e.form.categoryId,callback:function(r){e.$set(e.form,"categoryId",r)},expression:"form.categoryId"}},[t("el-option",{attrs:{label:"",value:"shanghai"}}),t("el-option",{attrs:{label:"男",value:"shanghai"}}),t("el-option",{attrs:{label:"女",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"工作室",prop:"name"}},[t("el-input",{model:{value:e.form.productStudio,callback:function(r){e.$set(e.form,"productStudio",r)},expression:"form.productStudio"}})],1),t("el-form-item",{attrs:{label:"商品尺寸",prop:"region"}},[t("div",{staticClass:"size-form-item"},[t("el-input",{attrs:{placeholder:"高"},model:{value:e.form.productHeight,callback:function(r){e.$set(e.form,"productHeight",r)},expression:"form.productHeight"}}),t("el-input",{attrs:{placeholder:"寬"},model:{value:e.form.productWidth,callback:function(r){e.$set(e.form,"productWidth",r)},expression:"form.productWidth"}}),t("el-input",{attrs:{placeholder:"深"},model:{value:e.form.productDepth,callback:function(r){e.$set(e.form,"productDepth",r)},expression:"form.productDepth"}}),t("span",[e._v("(cm)")])],1)]),t("el-form-item",{attrs:{label:"交易方式",prop:"name"}},[t("el-radio",{attrs:{label:1},model:{value:e.form.tradeType,callback:function(r){e.$set(e.form,"tradeType",r)},expression:"form.tradeType"}},[e._v("面交")]),t("el-radio",{attrs:{label:2},model:{value:e.form.tradeType,callback:function(r){e.$set(e.form,"tradeType",r)},expression:"form.tradeType"}},[e._v("宅配")]),t("el-radio",{attrs:{label:3},model:{value:e.form.tradeType,callback:function(r){e.$set(e.form,"tradeType",r)},expression:"form.tradeType"}},[e._v("面交、宅配")])],1),t("el-form-item",{attrs:{label:"商品所在地",prop:"name"}},[t("el-select",{attrs:{placeholder:"選擇性別"},model:{value:e.form.productArea,callback:function(r){e.$set(e.form,"productArea",r)},expression:"form.productArea"}},[t("el-option",{attrs:{label:"",value:"shanghai"}}),t("el-option",{attrs:{label:"男",value:"shanghai"}}),t("el-option",{attrs:{label:"女",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"商品描述",prop:"productDescription"}},[t("el-input",{attrs:{type:"textarea",placeholder:"請輸入商品描述",rows:3},model:{value:e.form.productDescription,callback:function(r){e.$set(e.form,"productDescription",r)},expression:"form.productDescription"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("form")}}},[e._v("上架商品")])],1)],1)],1)},a=[],l={name:"ProdManage",components:{},data:function(){return{form:{productName:"集美殿堂 《航海王》正版授權：四皇共鳴——凱多",productArea:"台中、彰化",productStudio:"集美殿堂",productCondition:[1],productDescription:"原創設計手工軟陶耳環 設計靈感源於令人著迷的立體雕塑，同時結合波浪邊營造柔和美感，完美打造成極富雕塑感的耳飾。 而且深綠拼上象牙石紋，充分塑造出柔美和諧的色調！完美呈現出優雅與個性的一面。",productPrice:32150,productHeight:"20.5",productWidth:"19",productDepth:"17",categoryId:1,tradeType:1,isSpot:1},rules:{productName:[{required:!0,message:"請輸入商品名稱",trigger:"blur"}],productPrice:[{required:!0,message:"請輸入商品售價",trigger:"blur"}],productCondition:[{required:!0,message:"請輸入商品狀況",trigger:"blur"}],name:[{required:!0,message:"請輸入暱稱",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},computed:{},created:function(){},mounted:function(){},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))}}},i=l,c=(t("d704"),t("2877")),s=Object(c["a"])(i,o,a,!1,null,"931d45b6",null);r["default"]=s.exports},d704:function(e,r,t){"use strict";t("3065")}}]);
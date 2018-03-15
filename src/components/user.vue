<template lang="pug">
  #shop
    .shop-head
      div.prof-head-wrap
        div.col-1-4
          img(:src="profileImg").prof-img
        
        div.col-3-4
          h1 おかえりなさい、
            span {{username}}さん!
          p(title="ひとこと").quote 人生マジきついわ、食ってないとやってらんね
          span.small.note-your-page ここはあなたのページです。

    main
      
</template>

<script>
export default {
  data () {
    return {
      username: "不完全燃焼 太郎",
      profileImg: "http://data5.onnada.com/character_image/201707/thumb_1988331734_a0d340d4_8298EC98A429.png"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* eslint-disable */
@import "../partial/components";
@import "../partial/option";

.shop-head{
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  padding: 2em 0;
  background-color: #f3f3f3;
  @media screen and (max-width: $break-medium){
    height: auto;
  }
  
  h1{
    font-weight: 500;
    font-size: 1.6em;
    margin: 0;
    vertical-align: baseline;
    
    span{
      @media screen and (max-width: $break-small){
        &:before{
          content: "\A";
          white-space: pre;
        }
      }
    }
  }
  
  .note-your-page{
    position: absolute;
    right: 0;
    bottom: 0;
    right: 1em;
  }
  
  *{
    font-family: $base-font;
    vertical-align: top;
    color: #111;
  }
  
  .prof-head-wrap{
    display: block;
    height: 100%;
    margin: 0 auto;
    max-width: $break-large;
  }
  
  [class*="col-"]{
    position: relative;
    box-sizing: border-box;
    padding: 3em 0 0 0;
    height: 100%;
    
    @media screen and (max-width: $break-medium){
      padding: 2em;
      width: 100%;
      height: auto;
    }
  }
  
  .prof-img{
    position: absolute;
    border-radius: 100%;
    height: 180px;
    width: 180px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;

    @media screen and (max-width: $break-large){
      height: 140px;
      width: 140px;
    }
    
    @media screen and (max-width: $break-medium){
      position: relative;
      display: block;
      transform: none;
      left: auto;
      top: auto;
      margin: 0 auto;
      height: 200px;
      width: 200px;
    }
  }
}

main{
  position: relative;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: $break-large;
  padding: 40px;

  @media screen and (max-width: $break-large){
    padding: 40px 20px;

  *{
    font-family: $base-font;
    vertical-align: top;
    color: #111;
  }

  h1{
    margin: 1em 0;
    font-size: 1.3em;
    font-weight: 300;
    @media screen and (max-width: $break-small){
      margin: 2em 0 0.4em 0;
    }
  }

  h3{
    margin: 0.6em 0 1.2em 0;
    font-size: 1.1em;
    font-weight: 300;
    @media screen and (max-width: $break-small){
      margin: 0.4em 0;

    }
  }

  a{
    margin: 0.6em 0 1.2em 0;
    font-size: 1.1;
    font-weight: 300;
  }

  span{
    display: block;
    font-size: 1em;
    margin-top: 1.4em;
    font-weight: bold;
    @media screen and (max-width: $break-small){
      font-size: 0.8em;
      }
    }
  }
}
</style>

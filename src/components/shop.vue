<template lang="pug">
  #shop
    .shop-head
    main
      h1 店舗情報
      .col-3-10
        span 種類
        h3 イタリアン
        span シェフ
        h3 Pantheon
        span ウェブサイト
        a(:href="shopURL") {{shopURL}}
      .map.col-7-10
        span.blockify お店の場所
        img(src='https://placehold.jp/600x350.png')
      h1 このお店での投稿
      .article-wrapper.col-1-2
        .article
          span Restaurant de Grand Skyfall
          .image-wrapper
            img.col-1-2(src='https://placehold.jp/180x120.png')
            img.col-1-2(src='https://placehold.jp/180x120.png')
      .article-wrapper.col-1-2
        .article
          span Restaurant de Grand Skyfall
          .image-wrapper
            img.col-1-2(src='https://placehold.jp/180x120.png')
            img.col-1-2(src='https://placehold.jp/180x120.png')
      .article-wrapper.col-1-2
        .article
          span Restaurant de Grand Skyfall
          .image-wrapper
            img.col-1-2(src='https://placehold.jp/180x120.png')
            img.col-1-2(src='https://placehold.jp/180x120.png')
      .article-wrapper.col-1-2
        .article
          span Restaurant de Grand Skyfall
          .image-wrapper
            img.col-1-2(src='https://placehold.jp/180x120.png')
            img.col-1-2(src='https://placehold.jp/180x120.png')
      .article-wrapper.col-1-2
        .article
          span Restaurant de Grand Skyfall
          .image-wrapper
            img.col-1-2(src='https://placehold.jp/180x120.png')
            img.col-1-2(src='https://placehold.jp/180x120.png')
</template>

<script>
export default {
  data () {
    return {
      shopURL: "https://example.com"
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
  background-color: #f3f3f3;
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

    [class*="-10"]{
      width: 100%;
    }

    [class*="-2"]{
      .image-wrapper{
        img:first-child{
          width: 100%;
        }
        img:last-child{
          display: none;
        }
      }
    }
  }

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

  .map{
    position: relative;

    img{
      width: 100%;
      object-fit: cover;
    }
  }
  
  .col-3-10{
    box-sizing: border-box;
    padding-right: 2em !important;
  }

  .article-wrapper{
    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $break-small){
      width: 100%;
    }

    .article{
      box-shadow: 2px 2px 4px #cecece;
      height: 100%;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;

      span{
        font-weight: 300;
        margin: 0;
      }

      .image-wrapper{
        width: 100%;
        height: calc(100% - 1em);

        img{
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>

<template lang="pug">
  #top
    main
      .article-container.col-7-10
        .article
          .images.col-4-10
            img(src='https://placehold.jp/240x150.png')
            img(src='https://placehold.jp/240x150.png')
          .description.col-6-10
            img.profile-img(src='https://placehold.jp/64x64.png')
            h2 Xeonia Pantheon
            span Restaurant de grand skyfall
            p
              | 落ち着ける雰囲気でデートや一対一のお食事にとても適していると思います。
              br
              br
              | 今回はボジョレー・ヌーヴォーとマリネサラダを頂きましたが、とても美味しく、言葉も出ませんでした。
              br
              br
              | とてもおすすめします。
        .article
          .images.col-4-10
            img(src='https://placehold.jp/240x150.png')
            img(src='https://placehold.jp/240x150.png')
          .description.col-6-10
            img.profile-img(src='https://placehold.jp/64x64.png')
            h2 Xeonia Pantheon
            span Restaurant de grand skyfall
            p
              | 落ち着ける雰囲気でデートや一対一のお食事にとても適していると思います。
              br
              br
              | 今回はボジョレー・ヌーヴォーとマリネサラダを頂きましたが、とても美味しく、言葉も出ませんでした。
              br
              br
              | とてもおすすめします。
        .article
          .images.col-4-10
            img(src='https://placehold.jp/240x150.png')
            img(src='https://placehold.jp/240x150.png')
          .description.col-6-10
            img.profile-img(src='https://placehold.jp/64x64.png')
            h2 Xeonia Pantheon
            span Restaurant de grand skyfall
            p
              | 落ち着ける雰囲気でデートや一対一のお食事にとても適していると思います。
              br
              br
              | 今回はボジョレー・ヌーヴォーとマリネサラダを頂きましたが、とても美味しく、言葉も出ませんでした。
              br
              br
              | とてもおすすめします。
        .article
          .images.col-4-10
            img(src='https://placehold.jp/240x150.png')
            img(src='https://placehold.jp/240x150.png')
          .description.col-6-10
            img.profile-img(src='https://placehold.jp/64x64.png')
            h2 Xeonia Pantheon
            span Restaurant de grand skyfall
            p
              | 落ち着ける雰囲気でデートや一対一のお食事にとても適していると思います。
              br
              br
              | 今回はボジョレー・ヌーヴォーとマリネサラダを頂きましたが、とても美味しく、言葉も出ませんでした。
              br
              br
              | とてもおすすめします。
      .sidebar.col-3-10
        .user-profile
          img.profile-img(src='https://placehold.jp/64x64.png')
          h2 Hirokazu Degawa
        hr
        span.subtitle おすすめのシェフ
        .user-profile
          img.profile-img(src='https://placehold.jp/64x64.png')
          h2 Hirokazu Degawa
        .user-profile
          img.profile-img(src='https://placehold.jp/64x64.png')
          h2 Hirokazu Degawa
        .user-profile
          img.profile-img(src='https://placehold.jp/64x64.png')
          h2 Hirokazu Degawa
        .user-profile
          img.profile-img(src='https://placehold.jp/64x64.png')
          h2 Hirokazu Degawa
        hr
        span.information
          a(href='https://service.chefdeli.jp') Chefdeliについて
          | ・
          a(href='#') ブログ
          | ・
          a(href='#') 開発言語
          | ・
          a(href='#') 開発者
          | ・
          a(href='#') 求人

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* eslint-disable */
@import "../partial/components";
@import "../partial/option";

main{
  position: relative;
  display: block;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 40px 30px;
  max-width: $break-large;

  *{
    font-family: $base-font;
    color: #111;
  }

  @media screen and (max-width: $break-large){

    @media screen and (max-width: $break-small){
      padding: 40px 20px 30px 20px;
    }

    .article-container{
      width: 100% !important;
    }

    .sidebar{
      display: none;
    }

  }

  .article-container{
    *{
      vertical-align: top;
    }

    .article{
      box-shadow: 0px 5px 7px rgba(117, 117, 117, 0.26);
      box-sizing: border-box;
      margin-bottom: 40px;
      padding: 20px;
      width: 100%;

      @media screen and (max-width: $break-medium){
        .images{
          display: block;
          width: 100%;
          img{
            width: 50% !important;
          }
        }

        .description{
          display: block;
          width: 100%;
          padding: 20px 0 0 0 !important;
        }
      }

      @media screen and (max-width: $break-small){
        .images{
          img:first-child{
            width: 100% !important;
          }

          img:last-child{
            display: none;
          }
        }
      }

      .images{
        img{
          display: inline-block;
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
      }

      .description{
        box-sizing: border-box;
        padding-left: 30px;

        img{
          height: 64px;
          width: 64px;
          object-fit: cover;
        }

        h2{
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          padding-left: 10px;
          font-weight: 300;
          font-size: 1.4em;
          margin: 0;
          line-height: 64px;
        }

        span{
          display: block;
          margin: 10px 0 20px 0;
          color: #757575;
          font-weight: 200;
          font-size: 0.9em;
        }

        p{
          line-height: 1.7em;
          font-size: 0.9em;

          br{
            margin: 1em 0;
            height: 0 !important;
            width: 0 !important;
          }
        }
      }
    }
  }

  .sidebar{
    position: fixed;
    vertical-align: top;
    box-sizing: border-box;
    padding-left: 30px;

    *{
      vertical-align: top;
    }

    .user-profile{
      margin-bottom: 20px;

      img{
        height: 64px;
        width: 64px;
        object-fit: cover;
      }

      h2{
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        padding-left: 10px;
        font-weight: 300;
        font-size: 1.1em;
        margin: 0;
        line-height: 64px;
      }
    }

    hr{
      border: none;
      height: 1px;
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
      padding: 0 10%;
      background-color: #e8e8e8;
    }

    .subtitle{
      display: block;
      margin: 20px 0 20px 0;
      font-weight: bold;
      font-size: 0.8em;
    }

    .information{
      color: #555;
      font-size: 0.7em;

      a{
        text-decoration: none;
      }
    }
  }
}
</style>

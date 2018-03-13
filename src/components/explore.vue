<template lang="pug">
  main
    .article-wrapper
      .article
        span Restaurante de Grand Skyfall
        img(src='https://placehold.jp/180x120.png')
        img(src='https://placehold.jp/180x120.png')
    .article-wrapper
      .article
        span Restaurante de Grand Skyfall
        img(src='https://placehold.jp/180x120.png')
        img(src='https://placehold.jp/180x120.png')
    .article-wrapper
      .article
        span Restaurante de Grand Skyfall
        img(src='https://placehold.jp/180x120.png')
        img(src='https://placehold.jp/180x120.png')
    .article-wrapper
      .article
        span Restaurante de Grand Skyfall
        img(src='https://placehold.jp/180x120.png')
        img(src='https://placehold.jp/180x120.png')
    .article-wrapper
      .article
        span Restaurante de Grand Skyfall
        img(src='https://placehold.jp/180x120.png')
        img(src='https://placehold.jp/180x120.png')
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
  max-width: $break-large;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 40px 20px 30px 20px;

  .article-wrapper{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px;
    width: 50%;

    @media screen and (max-width: $break-small){
      width: 100%;
    }

    .article{
      position: relative;
      box-sizing: border-box;
      padding: 20px;
      box-shadow: 0 5px 7px rgba(117,117,117,0.26);
      width: 100%;

      span{
        color: #555555;
        font-size: 0.9em;

      }

      img{
        position: relative;
        width: 50%;
        object-fit: cover;
        margin-top: 1em;
        vertical-align: top;
        @media screen and (max-width: $break-medium){
          width: 100%;
          margin: 0;
        }

        @media screen and (max-width: $break-small){
          width: 100%;

          &:last-child{
            display: none;
          }
        }
      }
    }
  }
}
</style>
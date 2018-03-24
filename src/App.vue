<template lang="pug">
  div#app
    div.error
      h2 アクセス過剰
      p サーバーに大きな負荷がかかっているため、サービスを一時停止しています。
      p 申し訳ございません。

    header.shadow
      div.logo-wrapper
        img(src="./images/chefdeli-logo.svg")
      div.search-wrapper
        i search
        form
          input(placeholder="シェフ・お店の名前" spellcheck=false)
      ul
        router-link(to='/'): li(@click="closeDropdown") Home
        router-link(to='/explore'): li(@click="closeDropdown") Explore
        span(@click="toggleDropdown"): li.dropdown More

      div(:class="{visible: dropdown}").menu
        router-link(to='/user'): p(@click="closeDropdown") Profile
        router-link(to='/shop'): p(@click="closeDropdown") Chef
        hr
        p(@click="" v-if="loginStatus === true") Logout
        p(@click="openLoginForm" v-else) Login

    router-view
      
</template>

<script>
export default {
  data : function() {
    return{
      dropdown: false,
      loginStatus: false
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.path !== from.path) {
        NProgress.start();
        NProgress.done();
      }
    }
  },
  methods: {
    toggleDropdown: function(){
      this.dropdown = !this.dropdown;
    },

    closeDropdown: function(){
      this.dropdown = false;
    },

    openLoginForm: function(){
      alert("logout");
    }
  }
}

</script>

<style lang="scss">
/* eslint-disable */
@import "partial/components";
@import "partial/option";
@import "partial/baloon";

body{
  margin: 0;
}

header{
  position: relative;
  box-sizing: border-box;
  height: 80px;
  width: 100%;
  z-index: 1;
  background-color: #ffffff;

  .menu{
    display: none;
    z-index: 1;
    content: "";
    right: 0px;
    position: absolute;
    top: 100%;
    width: 330px;
    padding: 15px;
    font-family: 'Josefin Sans', sans-serif;
    background-color: #ffffff;
    border-radius: 0 0 0 5px;
    box-sizing: border-box;
    box-shadow: -3px 3px 3px rgba(117, 117, 117, 0.26);

    @media screen and (max-width: $break-small){
      width: 100%;
    }

    hr{
      border: none;
      height: 1px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10%;
      background-color: #e8e8e8;
    }

    a{
      text-decoration: none;
    }

    p{
      cursor: pointer;
      box-sizing: border-box;
      margin: 0px;
      padding: 1rem;
      border-radius: 5px;

      @media screen and (max-width: $break-small){
        padding: 1em 1rem;
      }

      &:hover{
        background-color: #f3f3f3;
      }
    }
  }

  *{
    vertical-align: top;
    user-select: none;
    color: #111111;
  }

  .logo-wrapper{
    display: inline-block;
    height: 100%;
    width: 15%;
    box-sizing: border-box;
    padding: 25px 0 25px 20px;
    text-align: left;
    
    img{
      height: 30px;
      width: 90%;
      object-fit: contain;
    }
  }

  .search-wrapper{
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 0 20px 20px;
    width: 60%;

    i{
      position: absolute;
      font-size: 1.2em;
      line-height: 38px;
      padding: 2px 10px 0 10px;
      cursor: pointer;
    }

    input{
      display: inline-block;
      height: 40px;
      outline: none;
      padding: 0 10px 0 35px;
      box-sizing: border-box;
      font-size: 0.9em;
      line-height: 100px;
      background-color: #f3f3f3;
      border: none;
      width: 100%;
      border-radius: 5px;
      user-select: all;
      
      &:placeholder-shown{
        color: #95989A;
      }
    }
  }

  ul{
    display: inline-flex;
    justify-content: space-around;
    font-family: 'Josefin Sans', sans-serif;
    padding: 0px;
    margin: 0px;
    width: 25%;

    a, span{
      text-decoration: none;
      line-height: 80px;
      cursor: pointer;
      
      li{
        list-style: none;
        
      }
    }
  }

  @media screen and (max-width: $break-large){
    .search-wrapper{
      display: none;
    }

    .logo-wrapper{
      width: 30%;
    }

    ul{
      float: right;
      width: 40%;
    }

    @media screen and (max-width: $break-small){
      padding: 0 10px;
      
      .logo-wrapper{
        width: 40%;
        padding-left: 0;
      }

       ul{
        float: right;
        width: 60%;
      } 
    }
  }
}

.error{
  position: fixed;
  left: 50%;
  top: 50%;
  box-sizing: border-box;
  padding: 1em;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  background-color: #ffdcdc;
  box-shadow: 1px 1px 5px #cccccc;
  z-index: 100;
  border-radius: 8px;
  border: solid 2px #ffbebe;
  color: #212121;
  animation: blinkBorder 2s ease-in-out infinite;
  
  @media screen and (max-width: $break-small){
    width: 350px;
  }
  
  &:before{
    content: "warning";
    font-family: "Material icons";
    padding: 5px;
    font-size: 2em;
    color: #212121;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0 0 5px 0;
    background-color: #ffbebe;
    animation: blink 2s ease-in-out infinite;
  }
  
  h2{
    text-align: center;
    
    font-size: 1.4em;
    margin: 0 auto;
  }
}
  
@keyframes blinkBorder{
  0%{border-color: #ffbebe}
  50%{border-color: #ff7575}
  100%{border-color: #ffbebe}
}
  
@keyframes blink{
  0%{background-color: #ffbebe}
  50%{background-color: #ff7575}
  100%{background-color: #ffbebe}
}
</style>

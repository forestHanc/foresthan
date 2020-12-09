<template>
  <div id="app">
    <!-- 头部 -->
    <div id="nav">
      <div id="nav_title">
        <!-- <img src="#"> -->
        <h1>foresthan</h1>
      </div>
      <div id="nav_router">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/todo">Todo</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/GIT">GIT</router-link>
      </div>
    </div>
    <!-- router对象 -->
    <div id="container">
      <div id='flex_minheight'><router-view/></div>
    </div>
    <!-- 备案及版权信息 -->
    <div id="copy_right">
      <p>Designed By foresthan</p>
      <a href="https://beian.miit.gov.cn">苏ICP备19074142号</a>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  /* background-image: url('./assets/snowFores.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 15px;
  border-bottom: 1px solid black;
  line-height: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav_title{
  float: left;
  padding: 0;
  color: #42b983;
}

#nav_router{
  float: right;
}

#container{
  background-color: #fff;
}

#flex_minheight{
  min-height: 900px;
}

#copy_right{
  text-align: center;
  background-color: #575757;
  color: #bcbcbc;
  align-self: center;
  padding: 40px;
  width: 100%;
  margin-top: 15px;
}
#copy_right a{
  color: #bcbcbc;
  text-decoration: none;
}

</style>

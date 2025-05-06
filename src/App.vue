<template>
  <div class="app">
    <div class="headline">
      <!-- Logo -->
      <div class="logo-container">
        <img src="@/assets/logoNew.png" alt="Logo" class="logo" />
      </div>

      <div class="allQuali">
        <div class="qualification">
          <span>博士学位授予单位</span>
          <span>博士后科研流动站</span>
        </div>

        <div class="split-line"></div>

        <div class="qualification">
          <span>重庆市“一流学科”建设高校</span>
          <span>艺术类博士点数量中西部第一</span>
        </div>
      </div>
    </div>
    <div class="headline">
      <div class="btnGroups">
        <div class="buttonGroup">
          <span class="buttonGroupTitle">博士招生</span>
          <a
            href="https://www.scfai.edu.cn/zsb/info/1073/3486.htm"
            class="nav-link"
            >博士招生章程</a
          >
          <a
            href="https://www.scfai.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1268132975&wbfileid=F0E655D1F7A18EFB4133480DEC5153F3"
            class="nav-link"
            >博士招生专业目录</a
          >
          <a
            href="https://book.yunzhan365.com/zrprt/nsgr/mobile/index.html"
            class="nav-link"
            >博士招生专业简介</a
          >
        </div>

        <div class="buttonGroup">
          <span class="buttonGroupTitle">硕士招生</span>
          <a
            href="https://www.scfai.edu.cn/zsb/info/1001/3384.htm"
            class="nav-link"
            >硕士招生章程</a
          >
          <a
            href="https://www.scfai.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1268132975&wbfileid=7D8A3AE95C2924DDA642841A200B041A"
            class="nav-link"
            >硕士招生专业目录</a
          >
          <a
            href="https://book.yunzhan365.com/zrprt/ofrn/mobile/index.html"
            class="nav-link"
            >硕士招生专业简介</a
          >
          <a
            href="https://www.scfai.edu.cn/zsb/info/1001/3383.htm"
            class="nav-link"
            >接收硕士推免生</a
          >
        </div>
      </div>

      <div class="qrCodes">
        <div class="qrCodePack">
          <div class="logo-container">
            <img src="@/assets/招生处官网.png" alt="Logo" class="qrCodeImg" />
          </div>

          <div class="qrCodeName">
            <span>四川美术学院招生处官网</span>
          </div>
        </div>

        <div class="qrCodePack">
          <div class="logo-container">
            <img src="@/assets/招生处公众号.png" alt="Logo" class="qrCodeImg" />
          </div>

          <div class="qrCodeName">
            <span>川美招生微信公众号</span>
          </div>
        </div>
      </div>
    </div>
    <div class="safe-container">
      <Carousel v-bind="config">
        <CarouselComponent />
      </Carousel>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "./components/CarouselComponent.vue";

export default {
  name: "App",
  components: {
    CarouselComponent,
  },
};
</script>

<style scoped>
.app {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  max-width: 1440px;
  margin: 0 auto;
}

.headline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px;
}

.qualification {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: gray;
  font-size: 16px;
}

.allQuali {
  display: flex;
  flex-direction: row;
  margin: 20px 40px;
}

.split-line {
  display: inline-block;
  width: 2px;
  height: 52px;
  background: #ccc;
  margin: 2px 18px;
}

.qrCodes {
  display: flex;
  flex-direction: row;
}

.qrCodePack {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrCodeImg {
  max-width: 80px;
}

.qrCodeName {
  color: gray;
  font-size: 10px;
  align-content: center;
}

.btnGroups {
  display: flex;
  flex-direction: column;
}
.buttonGroup {
  display: flex;
  flex-direction: row;
  margin: 16px 20px;
  justify-content: left;
}

.buttonGroupTitle {
  font-size: 18px;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid #666;
  padding-bottom: 1px;
  margin: 0 20px;
}

.logo-container {
  margin: 0 40px;
}

.logo {
  max-width: 400px;
}

.nav-link {
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: gray;
}

.nav-link:hover {
  color: #782c2e;
}

.carousel-container {
  margin-top: 30px;
}

.safe-container {
  position: relative;
  margin-top: 10px; /* 根据你的 logo 高度调整 */
  z-index: 1; /* 建立新层叠上下文 */
}
</style>

<!-- <style>
  body {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  }
  </style> -->

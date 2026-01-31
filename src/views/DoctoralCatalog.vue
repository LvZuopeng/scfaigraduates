<template>
  <div class="pdf-container">
    <div class="header">
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </div>
    <iframe src="/files/附件1—四川美术学院2026年博士研究生招生专业目录.pdf" width="100%" height="100%">
    </iframe>
  </div>
</template>

<style scoped>
.pdf-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
.header {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}
.back-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.back-link:hover {
  color: #782c2e;
}
iframe {
  flex: 1;
  border: none;
}
</style>

<template>
  <div>
    <img :class="['preview-image', `preview-image--${imageName}`]" :src="image">
    <div class="preview-popup">
      <div class="preview-content">
        <img style="height: auto;" src="https://cache.amap.com/ecology/tool/antmove/web/assets/qr/qr.jpg">
        <p>支付宝扫码体验</p>
      </div>
    </div>
  </div>
</template>

<script>
const PREFIX = 'https://cache.amap.com/ecology/tool/antmove/web/assets/dashboard.png';
const MAP = {
  index: 'index-20190715.png',
  transition: 'transition-20180821.png'
};

export default {
  computed: {
    imageName() {
      return location.hash.slice(1);
    },
    image() {
      return PREFIX;  // + (MAP[this.imageName] || MAP.index);
    }
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  color: #333;
  line-height: 1;
  background-color: #f2f3f5;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei',
    Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.preview {
  &-image {
    width: 100%;
    display: block;

    &--transition {
      margin-top: -62px;
    }
  }

  &-popup {
    opacity: 0;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .95);
    transition: .3s;
    text-align: center;

    &:hover {
      opacity: 1;
    }
  }

  &-content {
    left: 0;
    top: 50%;
    width: 100%;
    height: 200px;
    position: absolute;
    text-align: center;
    transform: translateY(-60%);
    user-select: none;

    img {
      width: 180px;
      height: 180px;
      margin-bottom: 15px;
      display: inline-block;
    }

    p {
      margin: 0;
      color: #34495e;
      line-height: 1.5;
      font-size: 16px;
    }
  }
}
</style>

<template>
  <div>
    <div v-if="layoutType === 'float'" class="float-box">
      <div class="leftbox">
        left
      </div>
      <div class="rightbox">
        right
      </div>
      <div class="centerbox">
        <div style="width: 100px;overflow: hidden;">123</div>
      </div>
    </div>

    <div v-if="layoutType === 'flex'" class="flexbox">
        <div class="left">left</div>
        <div class="center">flexbox</div>
        <div class="right">right</div>
    </div>

    <div v-if="layoutType === 'position'" class="position-box">
      <div class="left">left</div>
      <div class="center">position</div>
      <div class="right">right</div>
    </div>

    <div v-if="layoutType === 'table'" class="table-cell">
      <div class="left">left</div>
      <div class="center">table</div>
      <div class="right">right</div>
    </div>

    <div v-if="layoutType === 'grid'" class="grid-box">
      <div class="left">left</div>
      <div class="center">grid</div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {

    }
  },
  props: {
    layoutType: {
      type: String,
      default: 'float'
    }
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
</style>

<style lang="less" scoped>
// float
.float-box .leftbox {
  float: left;
  width: 200px;
  background: yellow;
}

.float-box .centerbox {
  background: red;
  overflow: hidden;
}

.float-box .rightbox {
  float: right;
  width: 200px;
  background: rgb(117, 117, 119);

}

.float-box >div {
}

.float-box {
  overflow: hidden;
}

// flex
.flexbox {
  display: flex;

  .left {
    width: 200px;
    background: yellow;
  }

  .center {
    flex: 1;
    background: red;
  }

  .right {
    width: 200px;
    flex: 0 1 200px;
    background: #757577;
  }
}

// position
.position-box {
  position: relative;
  width: 100%;

  .left {
    position: absolute;
    left: 0;
    width: 200px;
    background: yellow;
  }

  .center {
    position: absolute;
    left: 200px;
    right: 200px;
    background: red;
  }

  .right {
    position: absolute;
    right: 0;
    width: 200px;
    background: #757577;
  }

}

// table
.table-cell  {
  display: table;
  width: 100%;
  >div {
    display: table-cell;
  }
  .left {
    background: yellow;
    width: 200px;
  }

  .center {
    background: red;
  }

  .right {
    background: #757577;
    width: 200px;
  }
}

// grid
.grid-box {
  display: grid;
  width: 100%;
  grid-template-columns: 200px auto 200px;
  grid-template-rows: auto;

  .left {
    background: yellow;
    /* width: 200px; */

  }

  .center {
    background: red;
  }

  .right {
    background: #757577;
    /* width: 200px; */
  }
}

</style>


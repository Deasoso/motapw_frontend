<template>
  <div class="contain">
    <div class="onepair">
      <div class="select">
        <select>
          <option>综合排序</option>
          <option>With options</option>
        </select>
      </div>
      <div class="select">
        <select>
          <option>新人向</option>
          <option>With options</option>
        </select>
      </div>
      <div class="select">
        <select>
          <option>全部合集</option>
          <option>With options</option>
        </select>
      </div>
      <input class="input is-rounded" type="text" placeholder="搜索">
      <a class="is-pulled-right button is-success">
        更新时间：2018-07-31 22:30:01
      </a>
    </div>
    <hr>
    <div class="level">
      <div class="level-left">
        <div class="select onepair level-item">
          <select>
            <option>每页20个</option>
            <option>With options</option>
          </select>
        </div>
        <div class="pages onepair level-item">
          <nav class="pagination" role="navigation" aria-label="pagination">
            <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
              <li>
                <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 2">2</a>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 3">3</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="level-right">
        <a class="is-pulled-right button onepair level-item is-info">
          网站数据
        </a>
        <a class="is-pulled-right button onepair level-item">
          榜单排名
        </a>
        <a class="is-pulled-right button onepair level-item">
          提交记录
        </a>
      </div>
    </div class="onepair">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box" style="cursor:pointer;">
            <div class="level">
              <div class="level-left">
                <div class="level-item subtitle">
                  51层魔塔 [
                  <span class="tag is-info">
                    ⑨
                  </span>评论]
                </div>
              </div>
              <a class="level-right">
                <div class="level-item">
                  统计信息
                </div>
              </a>
            </div>
            <div class="control">
              <textarea class="textarea" type="text" readonly>
已有13038(7402)人次游戏，451(358)人次通关。
Normal End：已有411(331)人次通关。
当前MAX为28796，最早由 真魔 于2018-05-09 20:28:20打出。 
True End：已有40(27)人次通关。
当前MAX为18666，最早由 真魔 于2018-05-17 13:17:28打出。
              </textarea>
            </div>
            经典的51层魔塔H5复刻版，快来回忆童年吧！
            <div>Oz & Kenichi/数码宝贝51
              <div class="is-pulled-right">
                <span class="tag is-success">
                  新人向
                </span>
                <span class="tag is-warning">
                  高层塔
                </span>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Two</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Three</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'community',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.contain{
  padding-left: 30px;
  padding-right: 30px;
}
.onepair{
  margin-left:5px;
  margin-right:5px;
  margin-top:5px;
  margin-bottom:5px;
}
.input{
  width: 20%;
}
.box{
  width: 20%;
}
.pullright{
  float:right;
}
</style>

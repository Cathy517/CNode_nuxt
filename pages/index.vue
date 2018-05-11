<template>
  <div class="topicList" >
    <div class="cell">
      <a href="">
        <img src="" alt="">
      </a>
      <div class="topicList_title">
        <span class="topicList_tab"></span>
      </div>
     
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getTopicListData"])
  },
  computed: {
    ...mapState({
      typicListJson: state => state.topic.topicList
    })
  },
  mounted() {
    this.getTopicListData({ limit: 80 });
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

import SocketInstance from "@/im-server/socket-instance";
import { ServeGetUserSetting } from "@/api/user";

export default {
  created() {
    // 判断用户是否登录
    
  },
  methods: {
    // 页面初始化设置
    initialize() {
      SocketInstance.connect();
    },

    // 加载用户相关设置信息，更新本地缓存
    loadUserSetting() {
      ServeGetUserSetting().then(async ({ code, result }) => {
        // 如果result有值说明用户创建成功
        if (result) {
          this.$store.commit("UPDATE_USER_INFO", {
            id: result.id,
            face: result.face,
            name: result.name,
          });
          if (this.$route.query.id) {
            await this.createTalk(this.$route.query.id);
          } else {
            await this.loadChatList();
          }
        } else if (code === 200 && !result) {
          setTimeout(() => {
            this.loadUserSetting();
          }, 2000);
        }
      });
    },

    reload() {
      this.$root.$children[0].refreshView();
    },
  },
};

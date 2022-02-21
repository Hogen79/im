import SocketInstance from '@/im-server/socket-instance'
import { ServeGetUserSetting } from '@/api/user'

export default {
  created() {
    // 判断用户是否登录
    if (this.$store.getters.loginStatus) {
      this.initialize()
    }
  },
  methods: {
    // 页面初始化设置
    initialize() {
      SocketInstance.connect()
      this.loadUserSetting()
    },

    // 加载用户相关设置信息，更新本地缓存
    loadUserSetting() {
      ServeGetUserSetting().then(({ code, result }) => {
        console.error("---------------------")
        console.error(result)
        console.error("---------------------")
        if (code === 200) {
          this.$store.commit('UPDATE_USER_INFO', {
            id: result.id,
            face: result.face,
            name: result.name
          })
        }
      })
    },

    reload() {
      this.$root.$children[0].refreshView()
    },
  },
}

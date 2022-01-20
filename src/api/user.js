import { get } from "@/utils/request";

// 获取用户相关设置信息
export const ServeGetUserSetting = () => {
  return get("/lili/imUser");
};

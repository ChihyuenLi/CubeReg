// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const { nickName, avatarUrl } = event.userInfo;

  console.log('用户昵称：', nickName)
  console.log('用户头像：', avatarUrl)
  
  return {
    userId: wxContext.OPENID,
    userName:nickName,
    userAvatar:avatarUrl,
  }
}
//将时间转换成形如刚刚、x分钟前、x小时前、x天前、x月前、x年前的字符串
const convert = (time) => {
    let diff = Date.now() - new Date(time);
    let d = new Date(diff);
    return diff <= 60000 ? '刚刚' :  //60秒内
        diff <= 3600000 ? `${parseInt(diff / 60000)}分钟前` :  //60分钟内
        diff <= 86400000 ? `${parseInt(diff / 3600000)}小时前` :  //24小时内
        d.getFullYear() > 1970 ? `${d.getFullYear() - 1970}年前` :
        d.getMonth() ? `${d.getMonth()}个月前` : `${d.getDate() - 1}天前`;
}

export default convert;
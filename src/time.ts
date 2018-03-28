// 对分钟向下取整后的时间戳，单位秒。
function minuteFloor(date: Date) {
    return Math.floor(+date / 1000) - date.getSeconds();
}

export {
    minuteFloor
}
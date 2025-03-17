# lunar [![License](https://img.shields.io/badge/license-MIT-4EB1BA.svg?style=flat-square)](https://github.com/nathando91/am-lich/blob/master/LICENSE)

lunar là một công cụ tính lịch không có phụ thuộc bên thứ ba hỗ trợ lịch dương (Gregorian), lịch âm (âm lịch, lịch Hoàng Đạo cổ), lịch Phật giáo và lịch Đạo giáo. Hỗ trợ các tính năng về cung hoàng đạo, ngày Julian, can chi, con giáp, tiết khí, ngày lễ, Bách Kỵ Bảng của Bành Tổ, việc nên làm và kiêng kỵ hàng ngày, phương vị thần tài (Thần Tài/Phúc Thần/Tài Thần/Dương Quý Thần/Âm Quý Thần), phương vị Thai Thần, xung sát, Nạp Âm, sao, Bát Tự, Ngũ Hành, Thập Thần, Thập Nhị Kiến Trừ, Thanh Long và mười hai thần khác, Hoàng Đạo cát hung, v.v.

[English](https://github.com/nathando91/am-lich/blob/master/README_EN.md) | [Tiếng Việt](https://github.com/nathando91/am-lich/blob/master/README_VI.md)

## Ví dụ

    // cài đặt
    npm init -y
    npm i typescript -D
    npm i ts-node -D
    npm i lunar-typescript
     
    // test.ts
    import {Solar} from 'lunar-typescript';
    // import {Solar, Lunar, HolidayUtil} from 'lunar-typescript';
     
    const solar = Solar.fromYmd(1986, 5, 29);
    console.log(solar.toFullString());
    console.log(solar.getLunar().toFullString());
     
    // chạy
    ts-node test.ts

Kết quả:

    1986-05-29 00:00:00 星期四 双子座
    一九八六年四月廿一 丙寅(虎)年 癸巳(蛇)月 癸酉(鸡)日 子(鼠)时 纳音[炉中火 长流水 剑锋金 桑柘木] 星期四 北方玄武 星宿[斗木獬](吉) 彭祖百忌[癸不词讼理弱敌强 酉不会客醉坐颠狂] 喜神方位[巽](东南) 阳贵神方位[巽](东南) 阴贵神方位[震](正东) 福神方位[兑](正西) 财神方位[离](正南) 冲[(丁卯)兔] 煞[东]

## Tài liệu

Vui lòng truy cập [https://6tail.cn/calendar/api.html](https://6tail.cn/calendar/api.html "https://6tail.cn/calendar/api.html")

## Lịch sử Star

[![Star History Chart](https://api.star-history.com/svg?repos=6tail/lunar-typescript&type=Date)](https://star-history.com/#6tail/lunar-typescript&Date)
# am-lich

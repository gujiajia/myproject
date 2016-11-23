$('.login.page').hide(); //隐藏登录界面
// 登录界面
class Login {
    //登录界面元素
    $el = $('.login.page');
    //验证登录名
    $uername = this.$el.find('#username');
    $tree = $('.trunk,.trunk div')
    carouselId: number;
    backgroundImages = [`1214905.jpg`
        , '1214907.jpg',
        `1214909.jpg`,
        `1214911.jpg`];
    //构建器，会在new的时候运行
    constructor() {
        this.$el.fadeIn(10000);
        //fadeIn淡入 fadeOut淡出
        this.carouseLBackground();
        //树自动修改颜色
        this.carouselTreeColor();
    }
    carouselTreeColor() {
        setInterval(() => {
            var [r, g, b] = [parseInt(Math.random() * 10 + ''), parseInt(Math.random() * 10 + ''), parseInt(Math.random() * 10 + '')];
            this.$tree.css('background', `#${r}${g}${b}`);
        }, 3000)
    }

    //登录界面 检查用户名
    checkUsername() {
        var username = this.$uername.val()
        if (/^1[3-9]\d{9}$/.test(username)) {

        } else {
            alert(`error:${username}`)
        }
    }
    carouseLBackground() {  //轮播背景
        //当前轮播的下标
        var index = 0;
        this.carouselId = setInterval(() => {
            this.$el.fadeOut(10000, () => {
                this.$el.css('backgroundImage', `url(${this.backgroundImages[index]})`);
                index = index == this.backgroundImages.length - 1 ? 0 : ++index;
                this.$el.fadeIn(7000);
            });

        }, 10000);
    }
}
var loginPage = new Login();
// loginPage.checkUsername();
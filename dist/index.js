$('.login.page').hide(); //隐藏登录界面
// 登录界面
var Login = (function () {
    //构建器，会在new的时候运行
    function Login() {
        //登录界面元素
        this.$el = $('.login.page');
        //验证登录名
        this.$uername = this.$el.find('#username');
        this.$tree = $('.trunk,.trunk div');
        this.backgroundImages = ["1214905.jpg",
            '1214907.jpg',
            "1214909.jpg",
            "1214911.jpg"];
        this.$el.fadeIn(10000);
        //fadeIn淡入 fadeOut淡出
        this.carouseLBackground();
        //树自动修改颜色
        this.carouselTreeColor();
    }
    Login.prototype.carouselTreeColor = function () {
        var _this = this;
        setInterval(function () {
            var _a = [parseInt(Math.random() * 10 + ''), parseInt(Math.random() * 10 + ''), parseInt(Math.random() * 10 + '')], r = _a[0], g = _a[1], b = _a[2];
            _this.$tree.css('background', "#" + r + g + b);
        }, 3000);
    };
    //登录界面 检查用户名
    Login.prototype.checkUsername = function () {
        var username = this.$uername.val();
        if (/^1[3-9]\d{9}$/.test(username)) {
        }
        else {
            alert("error:" + username);
        }
    };
    Login.prototype.carouseLBackground = function () {
        var _this = this;
        //当前轮播的下标
        var index = 0;
        this.carouselId = setInterval(function () {
            _this.$el.fadeOut(10000, function () {
                _this.$el.css('backgroundImage', "url(" + _this.backgroundImages[index] + ")");
                index = index == _this.backgroundImages.length - 1 ? 0 : ++index;
                _this.$el.fadeIn(7000);
            });
        }, 10000);
    };
    return Login;
}());
var loginPage = new Login();
// loginPage.checkUsername(); 
//# sourceMappingURL=index.js.map
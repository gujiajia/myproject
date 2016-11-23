// 所有页面隐藏
$('.page').hide();
/**
 * 登陆界面
 *
 *
 */
var LoginPage = (function () {
    function LoginPage() {
        var _this = this;
        this.backgroundImages = ["https://www.lawyered.in/static/all_images/banner_images/banner_home1.4d06f0909844.jpg",
            '//blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
            "http://www.webhek.com/misc-res/unitethelovers/content/image/bg.jpg"
        ];
        this.$el = $('.login.page');
        this.$username = this.$el.find('.username');
        this.$password = this.$el.find('.password');
        this.$username.val('13212780816');
        this.$el.fadeIn(5000, function () {
            _this.$username.focus();
            _this.carouselBackground();
        });
    }
    LoginPage.prototype.login = function () {
        if (this.checkUsername() && this.$password.val()) {
            this.destory();
            this.$el.fadeOut();
            $('.home.page').fadeIn(4000);
        }
        else {
            $('.alert').text('请输入密码').show().fadeOut(4000);
        }
    };
    LoginPage.prototype.checkUsername = function () {
        if (/^[0-9]{11}$/.test(this.$username.val())) {
            return true;
        }
        else {
            $('.alert').text('用户名不合法').show().fadeOut(4000);
            this.$username.focus();
            return false;
        }
    };
    /**
     * 背景轮播
     * 修改backgroundImages,可以增删背景轮播的数量
     */
    LoginPage.prototype.carouselBackground = function () {
        var _this = this;
        var backgroundIndex = 0;
        this.carouselId = setInterval(function () {
            _this.$el.fadeOut(3000, function () {
                _this.$el.css("backgroundImage", "url(" + _this.backgroundImages[backgroundIndex] + ")");
                console.log("backgroundIndex:" + backgroundIndex + ":+" + (_this.backgroundImages.length - 1));
                backgroundIndex = backgroundIndex == _this.backgroundImages.length - 1 ? 0 : ++backgroundIndex;
            });
            _this.$el.fadeIn(3000);
        }, 10000);
    };
    LoginPage.prototype.destory = function () {
        clearTimeout(this.carouselId);
    };
    return LoginPage;
}());
var loginPage = new LoginPage();
var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
//# sourceMappingURL=index2.js.map
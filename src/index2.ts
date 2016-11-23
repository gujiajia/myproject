// 所有页面隐藏
$('.page').hide();


/**
 * 登陆界面
 * 
 * 
 */
class LoginPage {
    private backgroundImages = [`https://www.lawyered.in/static/all_images/banner_images/banner_home1.4d06f0909844.jpg`
        , '//blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
        `http://www.webhek.com/misc-res/unitethelovers/content/image/bg.jpg`
    ];
    private $el = $('.login.page');
    private $username = this.$el.find('.username');
    private $password = this.$el.find('.password');


    carouselId: number;

    constructor() {
        this.$username.val('13212780816');
        this.$el.fadeIn(5000, () => {
            this.$username.focus();
            this.carouselBackground();
        });


    }

    login() {
        if (this.checkUsername() && this.$password.val()) {
            this.destory();
            this.$el.fadeOut();
            $('.home.page').fadeIn(4000);
        } else {
            $('.alert').text('请输入密码').show().fadeOut(4000);
        }
    }
    checkUsername(): boolean {
        if (/^[0-9]{11}$/.test(this.$username.val())) {
            return true;
        } else {
            $('.alert').text('用户名不合法').show().fadeOut(4000);
            this.$username.focus();
            return false;
        }

    }

    /**
     * 背景轮播
     * 修改backgroundImages,可以增删背景轮播的数量
     */
    carouselBackground() {
        var backgroundIndex = 0;
        this.carouselId = setInterval(() => {
            this.$el.fadeOut(3000, () => {
                this.$el.css("backgroundImage", `url(${this.backgroundImages[backgroundIndex]})`);
                console.log(`backgroundIndex:${backgroundIndex}:+${this.backgroundImages.length - 1}`);
                backgroundIndex = backgroundIndex == this.backgroundImages.length - 1 ? 0 : ++backgroundIndex;
            });
            this.$el.fadeIn(3000);
        }, 10000);

    }
    destory() {
        clearTimeout(this.carouselId);
    }

}
var loginPage = new LoginPage();



class HomePage {

}

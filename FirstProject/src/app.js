
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        var rasengan = new cc.Sprite(res.rasengan_png);
        rasengan.scaleX = .3;
        rasengan.scaleY = .3;
        rasengan.attr({
            x: size.width - rasengan.width * rasengan.scaleX,
            y: size.height - rasengan.height * rasengan.scaleY
        });
        this.addChild(rasengan, 0);
        
        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.chidory_nik);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        this.sprite.runAction(cc.fadeOut(5));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


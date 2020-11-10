window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Back: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edf477DmepECIexhED8E3SN", "Back");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Back = function(_super) {
      __extends(Back, _super);
      function Back() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      Back.prototype.start = function() {};
      Back.prototype.onBtnBack = function() {
        cc.director.loadScene("SelectScene");
      };
      __decorate([ property(cc.Label) ], Back.prototype, "label", void 0);
      __decorate([ property ], Back.prototype, "text", void 0);
      Back = __decorate([ ccclass ], Back);
      return Back;
    }(cc.Component);
    exports.default = Back;
    cc._RF.pop();
  }, {} ],
  GameStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a074wh0WlDrJy9LcLjS2f6", "GameStart");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameStart = function(_super) {
      __extends(GameStart, _super);
      function GameStart() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnStart = null;
        _this.muscic = null;
        return _this;
      }
      GameStart.prototype.start = function() {
        cc.audioEngine.play(this.muscic, true, 1);
        this.scheduleOnce(function() {
          cc.director.loadScene("SelectScene");
        }, 3);
      };
      GameStart.prototype.onBtnStart = function() {
        cc.director.loadScene("SelectScene");
      };
      GameStart.prototype.onDestroy = function() {
        cc.audioEngine.stopAll();
      };
      __decorate([ property(cc.Button) ], GameStart.prototype, "btnStart", void 0);
      __decorate([ property(cc.AudioClip) ], GameStart.prototype, "muscic", void 0);
      GameStart = __decorate([ ccclass ], GameStart);
      return GameStart;
    }(cc.Component);
    exports.default = GameStart;
    cc._RF.pop();
  }, {} ],
  Music: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9716WVuwRDWJZm4fm56K5h", "Music");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var XunLuo = function(_super) {
      __extends(XunLuo, _super);
      function XunLuo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.muscic = null;
        _this.text = "hello";
        return _this;
      }
      XunLuo.prototype.start = function() {
        cc.audioEngine.play(this.muscic, true, 1);
      };
      XunLuo.prototype.onDestroy = function() {
        cc.audioEngine.stopAll();
      };
      __decorate([ property(cc.AudioClip) ], XunLuo.prototype, "muscic", void 0);
      __decorate([ property ], XunLuo.prototype, "text", void 0);
      XunLuo = __decorate([ ccclass ], XunLuo);
      return XunLuo;
    }(cc.Component);
    exports.default = XunLuo;
    cc._RF.pop();
  }, {} ],
  PlayPicAndVideo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1549bO0HSVCEKIibAgfyz+q", "PlayPicAndVideo");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayPicAndVideo = function(_super) {
      __extends(PlayPicAndVideo, _super);
      function PlayPicAndVideo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.picPage = null;
        _this.video = null;
        return _this;
      }
      PlayPicAndVideo.prototype.start = function() {
        this.schedule(this.timer, 2);
      };
      PlayPicAndVideo.prototype.timer = function() {
        var count = this.picPage.getPages().length;
        var index = this.picPage.getCurrentPageIndex();
        if (index == count - 1) {
          this.unschedule(this.timer);
          this.playVideo();
        }
        index = index >= count ? 0 : index + 1;
        this.picPage.scrollToPage(index, 2);
      };
      PlayPicAndVideo.prototype.playVideo = function() {
        this.video.node.active = true;
        this.picPage.node.active = false;
        cc.audioEngine.stopAll();
        this.video.play();
      };
      __decorate([ property(cc.PageView) ], PlayPicAndVideo.prototype, "picPage", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicAndVideo.prototype, "video", void 0);
      PlayPicAndVideo = __decorate([ ccclass ], PlayPicAndVideo);
      return PlayPicAndVideo;
    }(cc.Component);
    exports.default = PlayPicAndVideo;
    cc._RF.pop();
  }, {} ],
  PlayPicture: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69d50XR6QtN0KjvyZvj/WV9", "PlayPicture");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayPicture = function(_super) {
      __extends(PlayPicture, _super);
      function PlayPicture() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.picPage = null;
        return _this;
      }
      PlayPicture.prototype.start = function() {
        var _this = this;
        this.schedule(function() {
          var count = _this.picPage.getPages().length;
          var index = _this.picPage.getCurrentPageIndex();
          index = index >= count - 1 ? 0 : index + 1;
          _this.picPage.scrollToPage(index, 2);
        }, 2);
      };
      __decorate([ property(cc.PageView) ], PlayPicture.prototype, "picPage", void 0);
      PlayPicture = __decorate([ ccclass ], PlayPicture);
      return PlayPicture;
    }(cc.Component);
    exports.default = PlayPicture;
    cc._RF.pop();
  }, {} ],
  Select: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46947NoB8JE95/ZNdXUx3oO", "Select");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Select = function(_super) {
      __extends(Select, _super);
      function Select() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      Select.prototype.start = function() {};
      Select.prototype.onBtnAnBaoZhiQin = function() {
        cc.director.loadScene("AnBaoZhiQin");
      };
      Select.prototype.onBtnFaLvZhiShi = function() {
        cc.director.loadScene("FaLvZhiShi");
      };
      Select.prototype.onBtnFanDianXinZhaPian = function() {
        cc.director.loadScene("FanDianXinZhaPian");
      };
      Select.prototype.onBtnHuXiaoAnYuan = function() {
        cc.director.loadScene("HuXiaoAnYuan");
      };
      Select.prototype.onBtnJiaoTongQuanZu = function() {
        cc.director.loadScene("JiaoTongQuanZu");
      };
      Select.prototype.onBtnSaoHeiChuE = function() {
        cc.director.loadScene("SaoHeiChuE");
      };
      Select.prototype.onBtnSheQuFuWu = function() {
        cc.director.loadScene("SheQuFuWu");
      };
      Select.prototype.onBtnXunLuoFangKong = function() {
        cc.director.loadScene("XunLuoFangKong");
      };
      Select.prototype.onBtnYingJiJiuYuan = function() {
        cc.director.loadScene("YingJiJiuYuan");
      };
      Select.prototype.onBtnBack = function() {
        cc.director.loadScene("GameScene");
      };
      __decorate([ property(cc.Label) ], Select.prototype, "label", void 0);
      __decorate([ property ], Select.prototype, "text", void 0);
      Select = __decorate([ ccclass ], Select);
      return Select;
    }(cc.Component);
    exports.default = Select;
    cc._RF.pop();
  }, {} ],
  "Special - 001": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01b69KbnsJLr7CcFObRsxQv", "Special - 001");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayPicture = function(_super) {
      __extends(PlayPicture, _super);
      function PlayPicture() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pic = null;
        _this.video = null;
        return _this;
      }
      PlayPicture.prototype.start = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.video.play();
        }, 5);
      };
      __decorate([ property(cc.Node) ], PlayPicture.prototype, "pic", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video", void 0);
      PlayPicture = __decorate([ ccclass ], PlayPicture);
      return PlayPicture;
    }(cc.Component);
    exports.default = PlayPicture;
    cc._RF.pop();
  }, {} ],
  "Special - 002": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ed54VNF5RK3oA9p+MIwsWM", "Special - 002");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayPicture = function(_super) {
      __extends(PlayPicture, _super);
      function PlayPicture() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.video1 = null;
        _this.video2 = null;
        return _this;
      }
      PlayPicture.prototype.start = function() {
        this.video1.play();
        this.video1.node.on("completed", this.play2, this);
      };
      PlayPicture.prototype.play2 = function() {
        this.video1.node.active = false;
        this.video2.node.active = true;
        this.video2.play();
      };
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video1", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video2", void 0);
      PlayPicture = __decorate([ ccclass ], PlayPicture);
      return PlayPicture;
    }(cc.Component);
    exports.default = PlayPicture;
    cc._RF.pop();
  }, {} ],
  Special: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "069d3+RZYlN8I0+HzMrASPx", "Special");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayPicture = function(_super) {
      __extends(PlayPicture, _super);
      function PlayPicture() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pic = null;
        _this.video1 = null;
        _this.video2 = null;
        _this.video3 = null;
        _this.video4 = null;
        _this.video5 = null;
        _this.video6 = null;
        return _this;
      }
      PlayPicture.prototype.start = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.pic.active = false;
          _this.video1.node.active = true;
          _this.video1.play();
          _this.video1.node.on("completed", _this.play2, _this);
          _this.video2.node.on("completed", _this.play3, _this);
          _this.video3.node.on("completed", _this.play4, _this);
          _this.video4.node.on("completed", _this.play5, _this);
          _this.video5.node.on("completed", _this.play6, _this);
        }, 3);
      };
      PlayPicture.prototype.play2 = function() {
        this.video1.node.active = false;
        this.video2.node.active = true;
        this.video2.play();
      };
      PlayPicture.prototype.play3 = function() {
        this.video2.node.active = false;
        this.video3.node.active = true;
        this.video3.play();
      };
      PlayPicture.prototype.play4 = function() {
        this.video3.node.active = false;
        this.video4.node.active = true;
        this.video4.play();
      };
      PlayPicture.prototype.play5 = function() {
        this.video4.node.active = false;
        this.video5.node.active = true;
        this.video5.play();
      };
      PlayPicture.prototype.play6 = function() {
        this.video5.node.active = false;
        this.video6.node.active = true;
        this.video6.play();
      };
      __decorate([ property(cc.Node) ], PlayPicture.prototype, "pic", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video1", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video2", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video3", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video4", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video5", void 0);
      __decorate([ property(cc.VideoPlayer) ], PlayPicture.prototype, "video6", void 0);
      PlayPicture = __decorate([ ccclass ], PlayPicture);
      return PlayPicture;
    }(cc.Component);
    exports.default = PlayPicture;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Back", "GameStart", "Music", "PlayPicAndVideo", "PlayPicture", "Select", "Special - 001", "Special - 002", "Special" ]);
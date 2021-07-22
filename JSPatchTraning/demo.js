autoConvertOCType(1)
include('CommonDefine.js')
include('DBDetailViews.js')
include('CommonViewContent.js')

require('UILabel, UIColor, UIFont, UIScreen, UIImageView, UIImage')

defineClass('NormalView: UIView',{
    initWithFrame: function(frame) {
        self = self.super().initWithFrame(frame);
        if (self) {}
        return self;
    },
    
})

defineClass('TwoViewController', {
    
viewDidLoad: function() {
    self.super().viewDidLoad();
    
    self.view().setBackgroundColor(UIColor.greenColor());
    
    
    var isnull = require('TwoViewController').testNull(null)
    console.log("isnull:\t" + isnull);
    
    dispatch_after(3.0, function(){
        console.log("三秒之后执行-----");
    })
    
    dispatch_async_main(function(){
        console.log("主线程执行-----");
    })
    
    dispatch_async_global_queue(function(){
        console.log("子线程执行-----");
    })
    
    require("UIButton, UIScreen, UIColor");

    var btnOne = UIButton.alloc().initWithFrame({x: 100, y: 150, width: 300, height: 200});
    btnOne.setTitle_forState("TwoVC", 0);
    btnOne.addTarget_action_forControlEvents(self, "handleBtnOne:", 1 << 6);
    btnOne.setBackgroundColor(UIColor.orangeColor());
    self.view().addSubview(btnOne);
    
//    require('JPEngine').addExtensions(['JPNumber'])
//    //js
//    var oc_n = toOCNumber(2.14)
//    console.log("isSame:\t" + oc_n.compare(2.14) == 0)//true
//    //js
//    var js_n = toJSNumber(oc_n)
//    var rs = js_n - 1
//    console.log("rsfdfdfd:\t" + rs)
//
//    var oc_nOne = OCNumber("NSNumber", "numberWithInt:", [233])
//    console.log("oc_nOnefjdifj:\n" + oc_nOne)//true

    var ocStr = TwoViewController.name();
    var ocInfo = TwoViewController.info();
    console.log("oc_nOnefjdiffdfdfj:\n" + ocStr + ocInfo["k"])//true
    
    //require('CommonView')
    var sonview = NormalView.alloc().initWithFrame({x: 10, y: 100, width: 50, height: 50});
    sonview.setBackgroundColor(UIColor.purpleColor());
    self.view().addSubview(sonview);
//
    require("UIView, UIColor");

    var sonTheView = UIView.alloc().initWithFrame({x: 10, y: 10, width: 30, height: 30});

    sonTheView.setBackgroundColor(UIColor.orangeColor());
    self.view().addSubview(sonTheView);
    
    
//    var namestring = "12";
//    var nameNumber = namestring.integerValue();
    
    
//    var ocUsers = JPTestObject.users();
    
    
    
//    var str = "I'm JS String";
//    var info = @{"k": "v"};
//    var users = ["alex", "bang", "cat"];

    //console.log("oc_nOnefjdifdfj:\n" + str + info["k"] + user[0])//true
    
//    //JS
//    require('JPEngine').addExtensions(['JPDispatch']);
//
//    var queue = dispatch_queue_create("com.jspatch", DISPATCH_QUEUE_CONCURRENT);
//    var group = dispatch_group_create();
//    dispatch_group_async(group, queue, function(){
//        console.log("group async 1");
//    });
//    dispatch_group_wait(group, dispatch_time(5));
//    dispatch_group_async(group, queue, function(){
//        console.log("group async 2");
//    });
//    dispatch_group_notify(group, queue, function(){
//        console.log("dispatch_group_notify");
//    });
//

    
//    require('JPEngine').addExtensions(['TwoViewController'])
//    var obj = require('NSObject').alloc().init()
//    console.log(sizeof('id'))
//    console.log(sizeof('CGRect'))
    
//    require('TwoViewController').request(block("NSString *, BOOL", function(ctn, succ){
//        if (succ) console.log("succfd:\t" + succ);
//    }))
    
    
    
    
    // JS
//    var blk = require('TwoViewController').genBlock();
//    blk({v: "0.0.1"});  //output: I'm JSPatch, version: 0.0.1
//
//    require('TwoViewController').request(block("NSString *, BOOL", function(ctn, succ) {
//        console.log("ctnfdfd:\t" + ctn + succ);
//      if (succ) log(ctn)  //output: I'm content
//    }))
    
    
    
//     self.setValue_forKey(["JSPatch"], "_data")     //set member variables
//    var data = self.valueForKey("_data")     //get member variables
//    console.log(data);
    
//    var dict = JPObject.dict()
//    dict.setObject_forKey(data.join(''), 'name')
//    dict = dict.toJS()
//    console.log(dict['name'])    //output: JSPatch
    
    
    
    // JS
//    var data = require('JPObject').data().toJS()
//    //data instanceof Array === true
//    data.push("Patch")
//
//    var dict = JPObject.dict()
//    dict.setObject_forKey(data.join(''), 'name')
//    dict = dict.toJS()
//    console.log(dict['name'])    //output: JSPatch
    
//    require('JPObject')
//    var ocStr = JPObject.data().objectAtIndex(0)
//    ocStr.appendString("PatchContent")
//    console.log(ocStr);
    
//    var urlString = "";//"https://img0.baidu.com/it/u=917748983,2976645592&fm=26&fmt=auto&gp=0.jpg";
////    var rawData = NSData.dataWithContentsOfURL(NSURL.URLWithString(urlString));
//    var rawData = NSData.dataWithContentsOfURL(NSURL.URLWithString(urlString));
//    if (!rawData){
//        console.log("rawData:\t" + rawData);
//    }else{
//        console.log("没有数据哇");
//    }
    
},
    
    handleBtnOne: function(sender) {
        var tableViewCtrl = JPTableViewController.alloc().init()
        self.navigationController().pushViewController_animated(tableViewCtrl, YES)
        
//        var tableViewCtrl = JPViewController.alloc().init()
//        self.navigationController().pushViewController_animated(tableViewCtrl, YES)
        
        //self.run();
    },
    run: function() {
    self.callBlock(block('NSString*', function(str) {
        console.log(str);
    }));
    },
    callBlock: function(blk) {
        //blk 这个 block 是上面的 run 函数里 JS 传到 OC 再传过来的，无法调用。
        blk("test block");
    }
})



defineClass ("JPTableViewController: UIViewController<UIAlertViewDelegate>", {

    viewDidLoad: function() {
        self.super().viewDidLoad();
        self.view().setBackgroundColor(UIColor.redColor());
        
    
    //self.performSelector_withObject_afterDelay("handleTap", self, 0.3);
        var alerview = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("AlertT","内容",self,"确定",null)
        alerview.show()
        
        
//        var headerView = DBDetailHeaderView.alloc()initWithFrame({x: 100, y: 150, width: 300, height: 200});
//        sonview.setBackgroundColor(UIColor.redColor());

//        self.view().addSubview(headerView);
    },
    
    alertView_clickedButtonAtIndex: function(alertView, buttonIndex){
        console.log('clicked index' + buttonIndex)
    },
    
    dataAtIndex: function(idx){
        return idx < data.length ? data[idx]: ""
    },
})


defineClass("JPViewController: UIViewController <UIAlertViewDelegate>", {
  viewDidLoad: function() {
      self.super().viewDidLoad();
      
      self.view().setBackgroundColor(UIColor.redColor());
      require('UIView')
      var sonview = UIView.alloc().initWithFrame({x: 100, y: 150, width: 300, height: 200});
      sonview.setBackgroundColor(UIColor.whiteColor());
      self.view().addSubview(sonview);
      
      
      
      var contentImageBtn = require('UIButton')
                              .alloc()
                              .initWithFrame({x: 100, y:400, width:250, height:150});
      contentImageBtn.setCenter({x: SCREEN_WIDTH/2, y: SCREEN_HEIGHT/2})
      contentImageBtn.setBackgroundColor(UIColor.yellowColor());
      contentImageBtn.setTitle_forState('lalala',0);
      contentImageBtn.setTitleColor_forState(UIColor.blueColor(),0);
      contentImageBtn.addTarget_action_forControlEvents(self, 'handleTap', 1 <<  6);
      self.view().addSubview(contentImageBtn);
      //self.setContentImageBtn(contentImageBtn);
      
      //self.performSelector_withObject_afterDelay("handleTap", self, 0.3);
  },
    
handleTap: function() {
    var tableViewCtrl = JPTableViewController.alloc().init()
    self.navigationController().pushViewController_animated(tableViewCtrl, YES)
},
    
  alertView_clickedButtonAtIndex: function(alertView, buttonIndex) {
    console.log('clicked index ' + buttonIndex)
  }
})



//defineClass("JPListViewController", ['data', 'totalCount'],{
//    init: function() {
//        self = self.super().init()
//        self.setData(["a", "b"])
//        self.setTotalCount(2)
//        return self
//    },
//    viewDidLoad: function() {
//        self.super().viewDidLoad();
//        self.view().setBackgroundColor(UIColor.magentaColor());
//        var data = self.data()
//        var totalCount = self.totalCount()
//
//        console.log(data,totalCount);
//    },
//})


defineClass('ThreeViewController : UITableViewController <UIAlertViewDelegate>', ['data'], {
    
//viewDidLoad: function() {
//    self.super().viewDidLoad();
//    self.view().setBackgroundColor(UIColor.redColor());
//
////    var size = 120;
////    var imgView = UIImageView.alloc().initWithFrame({x: (SCREEN_WIDTH - size)/2, y: 150, width: size, height: size});
////    imgView.setImage(UIImage.imageWithContentsOfFile(resourcePath('apple.png')));
////    self.view().addSubview(imgView);
//
////    var label = UILabel.alloc().initWithFrame({x: 0, y: 310, width: 300, height: 30});
////    label.setText("第二页");
////    label.setTextAlignment(1);
////    label.setFont(UIFont.systemFontOfSize(25));
////    self.view().addSubview(label);
//
//    //JS
////    self.performSelector_withObject("nextPage", 1)
//},

    nextPage: function() {
        var tableViewCtrl = FoufrhViewController.alloc().init()
        self.navigationController().pushViewController_animated(tableViewCtrl, YES)
    },
  dataSource: function() {
    var data = self.data();
    if (data) return data;
    var data = [];
    for (var i = 0; i < 20; i ++) {
      data.push("cell from js " + i);
    }
    self.setData(data)
    return data;
  },
  numberOfSectionsInTableView: function(tableView) {
    return 1;
  },
  tableView_numberOfRowsInSection: function(tableView, section) {
    return self.dataSource().length;
  },
  tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
    var cell = tableView.dequeueReusableCellWithIdentifier("cell")
    if (!cell) {
      cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
    }
    cell.textLabel().setText(self.dataSource()[indexPath.row()])
    return cell
  },
  tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
    return 60
  },
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
     var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource()[indexPath.row()], self, "OK",  null);
     alertView.show()
  },
  alertView_willDismissWithButtonIndex: function(alertView, idx) {
    console.log('click btn ' + alertView.buttonTitleAtIndex(idx).toJS())
  }
})


defineClass('JPDemoController: UIViewController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();
        self.view().setBackgroundColor(UIColor.whiteColor());
        var size = 120;
        var imgView = UIImageView.alloc().initWithFrame({x: (SCREEN_WIDTH - size)/2, y: 150, width: size, height: size});
        imgView.setImage(UIImage.imageNamed('decoration_user_default_header'))
        
        self.view().addSubview(imgView);

        var label = UILabesl.alloc().initWithFrame({x: 0, y: 310, width: SCREEN_WIDTH, height: 30});
        label.setText("JSPatc22h");
        label.setTextAlignment(1);
        label.setFont(UIFont.systemFontOfSize(25));
        self.view().addSubview(label);
    },
})

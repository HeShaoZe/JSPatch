require('UILabel, UIColor, UIFont, UIScreen, UIImageView, UIImage')

var screenWidth = UIScreen.mainScreen().bounds().width;
var screenHeight = UIScreen.mainScreen().bounds().height;

defineClass('VVHomeViewController', {

    
    viewDidLoad: function() {
        self.super().viewDidLoad();
        self.view().setBackgroundColor(UIColor.whiteColor());
        
        var btnOne = UIButton.alloc().initWithFrame({x: 100, y: 150, width: 300, height: 150});
        btnOne.setTitle_forState("跳转到列表的入口", 0);
        btnOne.addTarget_action_forControlEvents(self, "handleBtnOne:", 1 << 6);
        btnOne.setBackgroundColor(UIColor.grayColor());
        self.view().addSubview(btnOne);
    },
    handleBtnOne: function(sender) {
        var tableViewCtrl = ThreeViewController.alloc().init()
        self.navigationController().pushViewController_animated(tableViewCtrl, YES)
    }
})


defineClass('ThreeViewController : UITableViewController <UIAlertViewDelegate>', ['data'], {
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


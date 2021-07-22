//
//  OneViewController.m
//  JSPatchTraning
//
//  Created by Mini001 on 2021/7/16.
//

#import "OneViewController.h"

@interface OneViewController ()

@end

@implementation OneViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    self.view.backgroundColor = [UIColor redColor];
    // Do any additional setup after loading the view.
    UIButton *btnOne = [[UIButton alloc] initWithFrame:CGRectMake(0, 300, [UIScreen mainScreen].bounds.size.width, 50)];
    [btnOne setTitle:@"OneVC" forState:UIControlStateNormal];
    [btnOne addTarget:self action:@selector(handleBtnOne:) forControlEvents:UIControlEventTouchUpInside];
    [btnOne setBackgroundColor:[UIColor yellowColor]];
    [self.view addSubview:btnOne];
}

- (void)handleBtnOne:(id)sender
{

}



/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end

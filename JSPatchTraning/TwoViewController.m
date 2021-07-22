//
//  TwoViewController.m
//  JSPatchTraning
//
//  Created by Mini001 on 2021/7/19.
//

#import "TwoViewController.h"

@interface TwoViewController ()

@end

@implementation TwoViewController
{
    NSArray *_data;
}


- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor yellowColor];
    
    UILabel *titleLabell  = [[UILabel alloc] init];
    titleLabell.frame = CGRectMake(50, 0, 100, 40);
    titleLabell.text = @"你好";
    titleLabell.backgroundColor = [UIColor orangeColor];
    [self.view addSubview:titleLabell];
    
    // Do any additional setup after loading the view.
    UIButton *btnOne = [[UIButton alloc] initWithFrame:CGRectMake(0, 300, [UIScreen mainScreen].bounds.size.width, 50)];
    btnOne.center = CGPointMake(0, 0);
    btnOne.layer.cornerRadius = 10;
    btnOne.clipsToBounds = YES;
    [btnOne setTitle:@"TwoVC" forState:UIControlStateNormal];
    [btnOne addTarget:self action:@selector(handleBtnOne:) forControlEvents:UIControlEventTouchUpInside];
    [btnOne setBackgroundColor:[UIColor grayColor]];
    [self.view addSubview:btnOne];
    
    UIView *sonTheView = [[UIView alloc] initWithFrame:CGRectMake(10, 10, 30, 20)];
    sonTheView.backgroundColor = [UIColor orangeColor];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    //[self handleBtnOne:nil];
}

- (void)handleBtnOne:(id)sender
{
    
}


+ (BOOL)testNull:(NSNull *)thenull {
    return [thenull isKindOfClass:[NSNull class]];
}

+ (void)request:(void(^)(NSString *content, BOOL success))callback
{
  callback(@"I'm content", YES);
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

typedef void (^JSBlock)(NSDictionary *dict);
+ (JSBlock)genBlock
{
  NSString *ctn = @"JSPatch";
  JSBlock block = ^(NSDictionary *dict) {
      NSLog(@"I'm %@, version: %@", ctn, dict[@"v"]);
  };
  return block;
}
+ (void)execBlock:(JSBlock)blk
{
}


+ (NSDictionary *)info {
  return @{@"k": @"v"};
}
+ (NSArray *)users {
  return @[@"alex", @"bang", @"cat"];
}

+ (NSString *)name {
  return @"I'm NSString";
}

@end

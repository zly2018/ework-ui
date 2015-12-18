#英文很烂，只会中文：）
#这是一个Hello world的客户端项目开发模板项目
#可以基于此项目构建自己的客户端项目开发
#技术关键字：jquery、angular、bootstrap

#项目依赖
1、nodeJS：https://nodejs.org
2、git   ：http://git-scm.com
3、Gulp  ：http://gulpjs.com
网速好的，可以参考官网执行命令安装；
网速不好的，解压gulp.zip插件包到node_modules下；

#开发说明：
1、基于该项目模板，克隆一个自己的项目：
git clone https://github.com/zly2014/ework-ui.git

2、项目默认安装了以下组件：参考bower.json，bower install jquery --save-dev;
    "jquery": "~2.1.4",
    "angular": "~1.4.8",
    "angular-bootstrap": "~0.14.3",
    "bootstrap": "~3.3.6",
    "font-awesome": "~4.5.0",
    "angular-resource": "~1.4.8"

3、项目自定义的js、css、img、html等，将会构建输出到dist目录下，参考：gulpfile.js
可以修改自定义的js、css压缩文件名字

4、项目构建：gulp build

5、项目运行：gulp，访问地址：http://localhost:8888/

6、开发注意事项：
1）link media= 'print'的样式，需要换种写法：@media print；






# 软件工程结对作业之实验室程序实现

## input
分为：```人际关系树```、```个人技能```、```职场经历```三部分，**每部分之间空行分隔，输入结束至少有一个空行**。
```
导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模
李四：PYTHON、VUE

李二：字节跳动、京东云
刘一：阿里

```
## 使用方法：
使用本功能前请仔细阅读使用法则：
本程序仅考虑，单个导师下生成的技能工作师门树，如果有多个导师请刷新再输入文本生成另外的树。
使用规则：
输入部分主要是：
- 师生关系
- 技能
- 工作

每个部分之间需用一个换行符分开，如果输入结束就在末尾加一个回车加以表示。
支持的数据输入组合为：师生关系，师生关系+技能，师生关系+工作，师生关系+技能+工作，详情参考用例。
**将鼠标放在树的区域可以使用滚轮缩放以及左键按住拖动树的位置，点击节点可以缩放~**

## mocha测试
### shell调用mocha测试
测试程序为web.test.js：
```
mocha web.test.js
```
### 测试程序样例：
```
//web.test.js
var get_json = require('./web.js').get_json;
var expect = require('chai').expect;
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四
`;
var ans='{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}';
describe('测试数据处理函数', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json(str)).to.be.equal(ans);
    });
});
```
其中，str和ans字段分别是输入的数据与期望输出的数据，进行不同样例测试时请修改str和ans的数值。
### 样例1
#### 输入str：
```
导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模

李二：字节跳动、京东云

```
#### 期望输出ans
```
{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}
```
### 样例2
#### 输入str
```
导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

```
#### 期望输出ans
```
{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}
```
### 样例3
#### 输入str
```
导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模

```
#### 期望输出ans
```
{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}
```
### 样例4
#### 输入str
```
导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

李二：字节跳动、京东云

```
#### 期望输出ans
```
{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}
```
### 样例5
#### 输入str
```
导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模
王二：PYTHON、VUE

李二：字节跳动、京东云
王五：阿里、百度

```
#### 期望输出ans
```
{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[{"name":"PYTHON","children":[]},{"name":"VUE","children":[]}]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[{"name":"阿里","children":[]},{"name":"百度","children":[]}]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}
```
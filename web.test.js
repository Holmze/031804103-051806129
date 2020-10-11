var get_json = require('./web.js').get_json;
var expect = require('chai').expect;
// test1
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模

李二：字节跳动、京东云
`;
var ans='{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}';
describe('测试数据1', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json(str)).to.be.equal(ans);
    });
});
// test2
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四
`;
var ans='{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}';
describe('测试数据2', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json(str)).to.be.equal(ans);
    });
});
// test3
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模
`;
var ans='{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}';
describe('测试数据3', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json(str)).to.be.equal(ans);
    });
});
// test4
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

李二：字节跳动、京东云
`;
var ans='{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}';
describe('测试数据4', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json(str)).to.be.equal(ans);
    });
});
// test5
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模
王二：PYTHON、VUE

李二：字节跳动、京东云
王五：阿里、百度
`;
var ans='{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[{"name":"PYTHON","children":[]},{"name":"VUE","children":[]}]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[{"name":"阿里","children":[]},{"name":"百度","children":[]}]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}';
describe('测试数据5', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json(str)).to.be.equal(ans);
    });
});
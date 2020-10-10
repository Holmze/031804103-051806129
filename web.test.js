var get_json = require('./web.js').get_json;
var expect = require('chai').expect
var str=
`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四
2018级本科生：老张、妃妃
2020级本科生：A、B、C

导师：老张
2025级本科生：a、b、c
2026级博士生：x、y、妃妃

导师：zp
2005级博士生：张三`;
var ans='{"name":"zp","children":[{"name":"2005级博士生","children":[{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]},{"name":"2018级本科生","children":[{"name":"老张","children":[{"name":"2025级本科生","children":[{"name":"a","children":[]},{"name":"b","children":[]},{"name":"c","children":[]}]},{"name":"2026级博士生","children":[{"name":"x","children":[]},{"name":"y","children":[]},{"name":"妃妃","children":[]}]}]},{"name":"妃妃","children":[]}]},{"name":"2020级本科生","children":[{"name":"A","children":[]},{"name":"B","children":[]},{"name":"C","children":[]}]}]}]}]}';
describe('测试数据处理函数', function() {
    it('生成的字符串应该等于ans', function() {
    expect(get_json()).to.be.equal(ans);
    });
});
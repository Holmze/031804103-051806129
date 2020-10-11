var assert = require('assert');
var get_json = require('web.js').get_json;
var str=`导师：张三
2016级博士生：天一、王二、吴五
2015级硕士生：李四、王五、许六
2016级硕士生：刘一、李二、李三
2017级本科生：刘六、琪七、司四

刘六：JAVA、数学建模

李二：字节跳动、京东云
`;
var ans = '{"name":"张三","children":[{"name":"2016级博士生","children":[{"name":"天一","children":[]},{"name":"王二","children":[]},{"name":"吴五","children":[]}]},{"name":"2015级硕士生","children":[{"name":"李四","children":[]},{"name":"王五","children":[]},{"name":"许六","children":[]}]},{"name":"2016级硕士生","children":[{"name":"刘一","children":[]},{"name":"李二","children":[{"name":"字节跳动","children":[]},{"name":"京东云","children":[]}]},{"name":"李三","children":[]}]},{"name":"2017级本科生","children":[{"name":"刘六","children":[{"name":"JAVA","children":[]},{"name":"数学建模","children":[]}]},{"name":"琪七","children":[]},{"name":"司四","children":[]}]}]}'
describe('get_json', function() {
    it('get_json(str)',function(){
        assert.strictEqual(get_json(str),ans);
    });
});
function get_json(){
    var content = document.all.text.value;
    var edge = new Map;
    var keyword = ["导师：","级硕士生：","级本科生：","级博士生："];
    var seen_s_w = new Map;
    var farther_flag = new Map;
    var seen = [];
    split_idx = [];
    var farther = new Map;

    // input data process
    arr_str = content.split("\n");
    //arr_str = ["导师：张三", "2016级博士生：天一、王二、吴五", "2015级硕士生：李四、王五、许六", "2016级硕士生：刘一、李二、李三", "2017级本科生：刘六、琪七、司//四","", "刘六：JAVA、数学建模", "", "李二：字节跳动、京东云"]


    var idx1;
    var idx2;
    var idx3;

    for (var idx = 0 ; idx < arr_str.length ; idx ++ )
    {
        if (arr_str[idx] == "")
        {
            split_idx.push(idx);
        }
    }

    // get teacher and student relation
    for (idx1 = 0 ; idx1 < split_idx[0] ; ) // layer 1
    {
        idx2 = split_idx[0];
        // get teacher
        var layer1_term = arr_str[idx1].split("：");
        var tutor_name = layer1_term[1];

        edge[tutor_name] = [];
        seen.push(tutor_name);


        for (idx3 = idx1 + 1 ; idx3 < idx2 ; idx3 ++)
        {
            var layer1_item = arr_str[idx3].split("：");
            var layer1_node = layer1_item[0] + tutor_name;
            farther[layer1_item[0]] = tutor_name;
            edge[tutor_name].push(layer1_node);
            edge[layer1_node] = [];
            farther_flag[layer1_node] = 1;
            seen.push(layer1_node);


            var student = layer1_item[1].split("、");
            for (var stu of student)
            {
                farther[stu] = layer1_node;
                stu = stu + layer1_node;
                farther[stu] = layer1_node;
                edge[layer1_node].push(stu);
                farther_flag[stu] = 1;
                seen.push(stu);
            }
        }
        idx1 = idx2 + 1;
    }
    //console.log(farther);

    if (split_idx.length >= 2)
    {
        for (idx3 = idx1 ; idx3 < split_idx[1] ; idx3 ++)
        {
            var layer2_item = arr_str[idx3].split("：");
            var current_f = farther[layer2_item[0]];
            var layer2_node = layer2_item[0] + current_f;
            edge[layer2_node] = [];
            farther_flag[layer2_node] = 1;
            seen.push(layer2_node);



            var skill_or_work = layer2_item[1].split("、");
            for (var sw of skill_or_work)
            {
                edge[layer2_node].push(sw);
                farther_flag[sw] = 1;
                seen.push(sw);
                seen_s_w[sw] = 1;
            }
        }
    }
//		console.log(edge);



    if (split_idx.length == 3)
    {
        for (idx3 = split_idx[1] + 1 ; idx3 < split_idx[2] ; idx3 ++)
        {
            var layer3_item = arr_str[idx3].split("：");
            var current_f = farther[layer3_item[0]];
            var layer3_node = layer3_item[0] + current_f;
            edge[layer3_node] = [];
            farther_flag[layer3_node] = 1;
            seen.push(layer3_node);

            var work = layer3_item[1].split("、");
            for (var w of work)
            {
                edge[layer3_node].push(w);
                farther_flag[w] = 1;
                seen.push(w);
                seen_s_w[w] = 1;
            }
        }
    }


    // find root node
    for (var val of seen)
    {
        if (farther_flag[val] == null)
        {
            var root_name = val;
        }
    }
    //console.log(root_name);

    function dfs(n,f) // construct object
    {
        console.log(n,f);
        var obj;
        obj = {};
        obj.name = n;
        obj.children = [];
        var item_list = edge[n];


        if (item_list == null)
        {
            //console.log(n);
            if (seen_s_w.hasOwnProperty(n) == false)
            obj.name = n.substring(0,n.indexOf(f));

            return obj;
        }

        for (var i = 0 ; i < item_list.length ; i ++)
        {
            obj.children.push(dfs(item_list[i],n));
        }

        if (n.indexOf(f) != -1) // no farther
        {
            var c = n.substring(0,n.indexOf(f));
            obj.name = c;
        }

        return obj;
    }
    var root = dfs(root_name,-1);
    console.log(edge);
    console.log(root);
    //console.log(edge["刘六"])
}
module.exports = get_json;
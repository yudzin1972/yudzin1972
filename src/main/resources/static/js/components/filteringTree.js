webix.ready(function(){
var uidoc=webix.ui({
 // height:400,
  width:1000,
  padding:15,
  margin:10,
  container: "dd1",
  id: "myRoot",
  autoheight:true,
  scrollY:false,
  cols:[
    {rows:[
      {
        view:"text",
        label:"Filter on all levels, show children",
        labelPosition:"top"
      },
      {
        view:"tree", borderless:true,
        id:"tree1",
        select:true,
        type:"lineTree",
        template:"{common.icon()}{common.folder()}#value#",
        data: webix.copy(carsdata)
      }
    ]},
    {rows:[
      {
        view:"text",
        label:"Filter on all levels, strict",
        labelPosition:"top"
      },
      {
        view:"tree", borderless:true,
        activeTitle:true,
        id:"tree2",
        filterMode:{
          showSubItems:false
        },
        select:true,
        data: webix.copy(carsdata)
      }
    ]}
  ]
});

console.log(uidoc);
uidoc.resize();
$$("$text1").attachEvent("onTimedKeyPress",function(){
  $$("tree1").filter("#value#",this.getValue());
});
$$("$text2").attachEvent("onTimedKeyPress",function(){
  $$("tree2").filter("#value#",this.getValue());
});
/*$$("$text3").attachEvent("onTimedKeyPress",function(){
  $$("tree3").filter("#value#",this.getValue());
})*/
var tree1=$$("tree1");
var tree2=$$("tree2");
tree1.attachEvent("onItemDblClick",function(id){
    var node = this.getItem(id);
    console.log(node);
    node.open=! node.open;
    tree1.refresh();
});
tree1.attachEvent("onItemClick",function(id){
    var node = this.getItem(id);
    console.log(id);

});
tree2.attachEvent("onItemClick",function(id){
    tree1.open("2",true);
    console.log(id);

});
});
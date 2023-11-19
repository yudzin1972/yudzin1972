var path = "https://docs.webix.com/samples/15_datatable/30_treetable/";

var tpl1 = {
  template:"<br><b>Filtering in TreeTable</b>. Default - First level",
  height:54
};

var grida = {
  view:"treetable",
  columns:[
    { id:"id", header:"", css:{"text-align":"right"}, width:50 },
    { id:"value", header:["Title",{content:"textFilter"}], fillspace:true, template:"{common.treetable()} #value#" },
    { id:"state", header:["State",{content:"selectFilter"}], width:100 },
    { id:"hours", header:"Hours", width:100 }
  ],
  filterMode:{
    level:1
  },
  autoheight:true,
  scroll:false,
  url:path+"data/treedata.php", datatype:"xml"
};	


webix.ready(function(){
  webix.ui({
    view:"scrollview",
    container:"dd1",
     body:{
      rows:[
        tpl1,
        grida
      ]
    }
  });
});	
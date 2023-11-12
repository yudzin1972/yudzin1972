var grida = {
  view:"datatable",
  id:"grida",
  autoheight: true,
  columns:[
    { id:"id", header:"", css:{"text-align":"center"}, width:50 },
    { id:"package", header:"Name", fillspace:true },
    { id:"section", header:"Section", width:120 },
    { id:"size", header:"Size", width:80 },
    { id:"architecture", header:"PC", width:60 }
  ],
  scroll:"y",
  on:{
    //clear self before data loading
    "data->onParse":function(){
      this.clearAll();
      this.data.url = "https://docs.webix.com/samples/server/packages_part";
    }
  },
  yCount:10
};

var base = 0;
function loadNext(){
  base += 10;
  $$("grida").loadNext(10, base);
};

function loadPrev(){
  if (base<=0) return;
  base -= 10;
  $$("grida").loadNext(10, base);
};

var buttons = {
  cols:[
    { view:"button", width:150, value:"Prev 10 <<", click:loadPrev },
    { view:"button", width:150, value:"Next 10 >>", click:loadNext }
  ]
};

webix.ready(function(){
  webix.ui({
    view: "scrollview",
    scroll: "y",
    body: {
      rows:[
        buttons,
        grida
      ]
    }
  });
  $$("grida").loadNext(10,0,null,"https://docs.webix.com/samples/server/packages_part");
});
define(function(){
    return{
        var grid1 = {
          view:"datatable",
          columns:[
            { id:"rank",	header:"", css:"rank"},
            { id:"title",	header:"Film title", fillspace: true },
            { id:"year",	header:"Released"},
            { id:"votes",	header:"Votes"}
          ],
          autoheight:true,
          scroll: "auto",
          url:"//docs.webix.com/samples/15_datatable/01_loading/data/data.json"
        };

    }
})
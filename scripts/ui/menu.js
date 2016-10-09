var DropdownMenu = function (options) {
    return {
        label: options.label || "",
        sections: options.sections || []
    };
}

var Submenu = function (options) {
    return {
        label: options.label || "",
        kbd: options.kbd || ">>>",
        menu_items: options.menu_items || []
    };
}

var Menu_item = function (options) {
    return {
        label: options.label || "",
        kbd: options.kbd || ""
    };
}

function createMenuStructure() {
    return new DropdownMenu({
        label: "Add",
        sections: [
            [
                new Menu_item({
                    label: "Apples",
                    kbd: "Ctrl+N"
                }),
                new Menu_item({
                    label: "Bananas",
                    kbd: "CTRL+B"
                }),
                new Submenu({
                    label: "Open Recent",
                    kbd: "CTRL+O",
                    menu_items: [
                        new Menu_item({
                            label: "item1",
                            kbd: "short1"
                        }),
                        new Menu_item({
                            label: "item2",
                            kbd: "short2"
                        }),
                        new Menu_item({
                            label: "item3",
                            kbd: "short3"
                        })
                    ]
                })
            ]
        ]
    });
}
function buildMenuHTML(obj) {
    for (var i = 0; i < obj.sections.length; i++) {  // for each section
        var html = "";
        for (var j = 0; j < obj.sections[i].length; j++) {  // for each item at this level
            var item = obj.sections[i][j];
            if (item.hasOwnProperty("menu_items")) {    // is a Submenu
                throw "Error: Don't know how to do submenus yet!";
            }
            else {  // is a Menu_item
                var part1 = '<li><i class="fa fa-fw fa-file"></i>' + item.label;
                var part2 = item.kbd ? '<kbd>' + item.kbd + '</kbd>' : "";
                var part3 = '</li>';
                html.concat(part1 + part2 + part3);
            }
        }
    }
    return html;
}
function initializeFileMenu() {
    var menu = createMenuStructure();

    $('#menu').fileMenu({
        slideSpeed: 125
    });
}

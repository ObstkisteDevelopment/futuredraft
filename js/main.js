var fd_objc = 0;
var fd_objs = [];

function fd_main() {
	$("button").button();

	$("#create_btn").click(function() {
		create_object(0, 0);
	});

	$("#timeline").dblclick(function(e) {
		create_object(e.offsetX, e.offsetY);
	})

	$("timeline_objects").selectable();
}

function create_object(x, y) {
	var num = fd_objc++;

	var handle = $(document.createElement("div"));
	handle.addClass("timeline_item_handle");

	var text = $(document.createElement("div"));
	text.addClass("timeline_item_text");
	text.html("Object " + num);

	var object = $(document.createElement("li"));
	object.addClass("timeline_item");
	object.addClass("ui-widget-content")
	object.append(handle);
	object.append(text);
	object.dblclick(function() {return false;});

	object.hide();
	$("#timeline_objects").append(object);
	object.offset({left: x, top: y});
	object.slideDown();
	object.draggable();
}
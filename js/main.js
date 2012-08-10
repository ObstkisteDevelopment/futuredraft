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

	$("#timeline").mousewheel(function(e, dir) {
		console.log(dir);
	});
}

function create_object(x, y) {
	var num = fd_objc++;

	var handle = $(document.createElement("div"));
	handle.addClass("timeline_item_handle");

	var text = $(document.createElement("div"));
	text.addClass("timeline_item_text");
	text.html("Object " + num);

	var object = $(document.createElement("div"));
	object.addClass("timeline_item");
	object.append(handle);
	object.append(text);
	object.dblclick(function() {return false;});

	object.hide();
	$("#timeline").append(object);
	object.offset({left: x, top: y});
	object.slideDown();
	object.draggable();
	object.zoomTarget();
}
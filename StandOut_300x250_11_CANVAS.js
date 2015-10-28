(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/car.jpg", id:"car"},
		{src:"images/chip_a.jpg", id:"chip_a"},
		{src:"images/chip_b.jpg", id:"chip_b"},
		{src:"images/phone_left.jpg", id:"phone_left"},
		{src:"images/phone_right.jpg", id:"phone_right"}
	]
};



// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,48);


(lib.chip_a = function() {
	this.initialize(img.chip_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,38);


(lib.chip_b = function() {
	this.initialize(img.chip_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,47);


(lib.phone_left = function() {
	this.initialize(img.phone_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,191);


(lib.phone_right = function() {
	this.initialize(img.phone_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,191);


(lib.Graphic_Stunning_Shadow_mc = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(27,36,42,0.847)","rgba(27,36,42,0)"],[0.345,1],0,0,0,0,0,77.9).s().de(-77,-77,154,154);
	this.shape.setTransform(74,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(27,36,42,0.847)","rgba(27,36,42,0)"],[0.325,1],0,0,0,0,0,79.2).s().de(-78,-78,156,156);
	this.shape_1.setTransform(-74,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-78,303,156);


(lib.Graphic_StandOut_Shadow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape.setTransform(82,46.6,0.389,0.393,0,0,0,5,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_1.setTransform(55,32.5,0.677,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_2.setTransform(10,32.6,1,0.833,0,0,0,5,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_3.setTransform(-53,29.5,1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_4.setTransform(101,-32.5,1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_5.setTransform(40,-32.5,1.032,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_6.setTransform(-15,-32.5,1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_7.setTransform(-60,-32.5,1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#6A9900","rgba(106,153,0,0)"],[0,1],0,0,0,0,0,31.7).s().de(-31,-30,62,60);
	this.shape_8.setTransform(-100.5,-32.5,1.016,1.1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132,-65.5,264,131);


(lib.Graphic_Phone_Right_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.phone_right();
	this.instance.setTransform(-37,-95.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-95.5,74,191);


(lib.Graphic_Phone_Left_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.phone_left();
	this.instance.setTransform(-36.5,-95.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.5,-95.5,73,191);


(lib.Graphic_Chip_Right_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.chip_a, null, new cjs.Matrix2D(1.095,0,0,1.095,-23.4,-21)).s().p("Ah1C/IgThQIgUhRQgMgqgMgrQgJgigMgiIgXg5IABABIAJgNQA9AZA+AWIBhAkQAvARArAcIAxAeQAdARAfALIATAfIgPAWQgzAbg0AVQghAMgiAKQgaAIgWAOIgzAeIgqAYg");
	this.shape.setTransform(0.2,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-18.9,45,38.8);


(lib.Graphic_Chip_Left_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.chip_b, null, new cjs.Matrix2D(1.054,0,0,1.054,-28.1,-24.6)).s().p("AkGDZIgBgNIAIgZIAPgsIAWhGQATg9APg7IAbhqIAFgBIAGg5IANgIIATgFIAMALIAXADQAfAaAhAUQAjAVAqAKQAbAHAeAAQAkAZAnAVQAeARAjANIAFAeIgLAcQgmAPgjAVQgPAIgOAJQhLAuhMAnQgdAOggAGQgZAFgaAAQgeAYgjAUQgPAJgRAJIgoAIg");
	this.shape.setTransform(0,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-23.5,53,46.8);


(lib.Graphic_Car_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.car, null, new cjs.Matrix2D(1,0,0,1,-42.9,-24.7)).s().p("AEzDwQgVgEgLgMQgEgFgEgIQgEgKgBgIQAAgHACgMIABgKQgOgDgFAAQhtgOhugKIgCgGQgIATgOATQgPAUgOAIQgSAJgWABQgVABgTgGQgdgJgMgQQgLgPgEgRQgDgOABgXIgzgSIg0gTIgjAFIg5gmIgBgZQgKgFgJgHQgZgUgYgYIAAgXIABgBIAHguIAKgBIANghIAagLIAQgiQAUgBAQgEQASgFASgBIAwgCIAyAFIAhgPIAagDQASgCAJgCQBFgKBEgIQASADARAGQBTAbBTAfQAcAJAbANQAqAWAqAaQAHAEAHAGIgFAVIAVBAIAOAMQAWBQgwBHIgGgBIgHAYQgFAPgIAMQgPAZgQAGQgNAFgLAAIgIgBg");
	this.shape.setTransform(-0.1,0.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-23.4,85.9,48.3);


(lib.Copy_WithConsumers_MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("ATkBXQgFgFAAgIQAAgIAFgGQAGgFAIAAQAIAAAFAFQAFAGABAIQgBAIgFAFQgFAFgIABQgIgBgGgFgAQwBVQgSgIgMgNIARgYQAKAKAOAHQAPAIATAAQAMAAAIgEQAIgEAEgFQAEgGAAgGQgBgJgHgFQgIgFgLgEIgagGQgNgEgMgFQgMgEgIgKQgHgKgBgRQABgPAIgLQAIgMAPgHQAOgHAUAAQAVAAARAGQARAHANAMIgSAXQgLgKgOgFQgNgFgPAAQgOAAgIAGQgIAGAAAKQAAAIAIAFQAHAFAMADIAZAHQAOADAMAGQAMAEAHAKQAIALAAAQQAAAPgHANQgIANgPAHQgQAIgYAAQgZAAgSgIgAEuBUQgSgKgJgQQgIgRAAgWIAAhsIAgAAIAABrQAAAVAMANQALANAXAAQAXAAALgNQAMgNAAgVIAAhrIAgAAIAABrQAAAXgJARQgIAQgRAKQgSAJgaAAQgaAAgRgJgABzBVQgSgIgMgNIARgYQAKAKAOAHQAPAIATAAQAMAAAIgEQAIgEAEgFQAEgGAAgGQgBgJgHgFQgIgFgLgEIgagGQgNgEgMgFQgMgEgIgKQgHgKgBgRQABgPAIgLQAIgMAPgHQAOgHAUAAQAVAAARAGQARAHANAMIgSAXQgLgKgOgFQgNgFgPAAQgOAAgIAGQgIAGAAAKQAAAIAIAFQAHAFAMADIAZAHQAOADAMAGQAMAEAHAKQAIALAAAQQAAAPgHANQgIANgPAHQgQAIgYAAQgZAAgSgIgAkfBRQgVgMgMgVQgLgVgBgbQABgZALgVQAMgVAVgMQAUgMAcgBQAbABAVAMQAUAMAMAVQAMAVAAAZQAAAbgMAVQgMAVgUAMQgVAMgbAAQgcAAgUgMgAkPg3QgOAJgHAOQgHAPAAARQAAASAHAPQAHAPAOAIQANAJATAAQASAAANgJQAOgIAHgPQAHgPAAgSQAAgRgHgPQgHgOgOgJQgNgIgSAAQgTAAgNAIgAngBRQgVgMgMgVQgNgUAAgcQAAgaANgVQAMgVAVgMQAWgLAbgBQASABAOAFQANAGAKAJQAKAJAHALIgbAOQgHgMgMgHQgMgHgOAAQgSAAgOAIQgOAIgIAPQgJAPAAARQAAATAJAOQAIAPAOAIQAOAJASAAQAOAAAMgIQAMgHAHgLIAbANQgHALgKAJQgKAKgNAFQgOAGgSAAQgbAAgWgMgAPRBaIgphEIgfAAIAABEIggAAIAAizIBQAAQASAAANAIQANAHAHAMQAIANAAARQgBAQgGALQgGAJgJAHQgKAGgLACIAsBHgAOJgDIArAAQAOgBAIgHQAJgIAAgNQAAgNgJgIQgIgIgOAAIgrAAgALDBaIAAizIB8AAIAAAcIhcAAIAAAvIBaAAIAAAaIhaAAIAAAyIBcAAIAAAcgAJzBaIAAiEIg3CEIgOAAIg3iEIAACEIggAAIAAizIAtAAIAxB1IAxh1IAtAAIAACzgAARBaIhch/IAAB/IggAAIAAizIAhAAIBaB8IAAh8IAgAAIAACzgAqmBaIAAhPIhdAAIAABPIggAAIAAizIAgAAIAABKIBdAAIAAhKIAgAAIAACzgAueBaIAAiXIg3AAIAAgcICNAAIAAAcIg2AAIAACXgAwZBaIAAizIAgAAIAACzgAyOBaIgjiDIgjCDIgiAAIgzizIAjAAIAjCJIAmiJIAZAAIAlCJIAjiJIAkAAIg0CzgATgAaQgCgGAAgGQAAgKAFgFQAEgHAGgFIANgJQAHgFAEgFQAFgFAAgHQAAgIgHgFQgGgGgNAAQgMAAgKAFQgJAFgHAJIgSgVQALgMAPgHQAPgHASAAQARAAANAFQAMAGAGAJQAHAKAAAMQAAAMgFAIQgFAIgHAGIgOALQgHAEgFAEQgFAFAAAIQAAADABADIAFAGIgYAIQgFgFgDgGg");
	this.shape.setTransform(-0.8,-4.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133,-13.7,264.6,18.7);


(lib.Copy_ThatGets_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("ALFBZQgTgHgNgOIATgaQAKAKAPAJQAPAHAUAAQAOAAAIgEQAJgDAEgHQADgFAAgHQAAgJgIgGQgIgGgMgDIgbgHQgOgDgNgHQgNgDgIgLQgIgLAAgRQAAgQAJgNQAIgMAQgHQAQgIAVAAQAWABASAGQASAHANANIgTAZQgLgMgPgFQgOgFgPAAQgPAAgJAGQgIAHgBAKQABAKAIAEQAIAFAMAEIAbAGQAOAEANAGQAMAFAIAKQAIAMAAARQAAAQgHAOQgIANgQAHQgRAJgZAAQgbAAgTgJgAB+BWQgWgMgNgWQgOgXAAgdQAAgcAOgXQANgWAWgLQAXgNAcAAQASAAAPAGQAOAFALAIQALAKAIALIgcAPQgHgLgNgHQgNgHgQgBQgTABgPAIQgPAKgIAPQgJAQAAASQAAATAJAQQAIAPAPAKQAPAIATABQAPgBAMgFQALgGAHgFIAAgeIg5AAIAAgcIBaAAIAABFQgOAQgTAKQgUAJgZAAQgcAAgXgMgAIkBfIAAifIg6AAIAAgeICVAAIAAAeIg6AAIAACfgAE6BfIAAi9ICCAAIAAAeIhhAAIAAAxIBfAAIAAAcIhfAAIAAA0IBhAAIAAAegAiZBfIAAifIg6AAIAAgeICVAAIAAAeIg6AAIAACfgAkHBfIgOglIhXAAIgOAlIgmAAIBLi9IApAAIBLC9gAkeAcIgihYIgjBYIBFAAgAnuBfIAAhUIhjAAIAABUIgiAAIAAi9IAiAAIAABOIBjAAIAAhOIAhAAIAAC9gAsCBfIAAifIg5AAIAAgeICVAAIAAAeIg6AAIAACfg");
	this.shape.setTransform(-1.3,-1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.2,-11.1,165.8,19.7);


(lib.Copy_Stunning_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().p("AOABzQgfgQgTgeQgSgdgBgoQABgoASgdQATgdAfgQQAggPAmAAQAfAAAWAKQAWAJAOAPQAPAPAIARIhBAhQgDgIgHgHQgHgIgJgEQgJgEgMgBQgSAAgOAIQgOAJgHAPQgIAOAAAQQAAARAIAPQAHAOAOAIQAOAIASAAQAMAAALgCQALgEAGgEIAAgJIgvAAIAAhCIB7AAIAABmQgVAYgcANQgdAOgmABQgmAAgggQgAn2B0QgcgNgNgZQgOgYAAggIAAiUIBOAAIAACRQAAASAMANQAMAMAYAAQAXAAAMgMQAMgNAAgSIAAiRIBOAAIAACUQAAAfgOAZQgNAZgcANQgcAOgqABQgrgBgcgOgAwIB3QgdgKgUgTIAog5QAOAPAVAIQAVAKAZAAQAMAAAIgEQAIgCABgHQgBgGgKgEQgKgCgQgDQgQgDgSgEQgSgEgQgKQgQgJgKgNQgKgPgBgZQAAgWAMgTQAMgTAXgMQAYgMAiAAQAgAAAbAJQAbAIAWASIgpA3QgRgNgUgHQgTgFgTAAQgLAAgEACQgEAEAAAFQABAFAKAEIAaAGQAQACASAGQASAEAQAIQAQAKAKAMQAKAPAAAYQAAApgdAXQgdAXgzABQgpAAgcgMgAK7B+Iheh+IAAB+IhMAAIAAj8IBPAAIBYB4IAAh4IBNAAIAAD8gAGAB+IAAj8IBMAAIAAD8gADyB+Iheh+IAAB+IhMAAIAAj8IBPAAIBYB4IAAh4IBNAAIAAD8gAhEB+Iheh+IAAB+IhMAAIAAj8IBPAAIBYB4IAAh4IBLAAIAAD8gArzB+IAAi5IhEAAIAAhDIDUAAIAABDIhDAAIAAC5g");
	this.shape.setTransform(-2,-0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.3,-13.9,216.6,26.2);


(lib.Copy_StrugglingTo_MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("AScBjQgZgPgPgZQgOgagBghQABggAOgaQAPgaAZgOQAZgPAiAAQAiAAAZAPQAZAOAPAaQAOAaABAgQgBAhgOAaQgPAZgZAPQgZAPgiAAQgiAAgZgPgASwhEQgRAKgIASQgJASgBAWQABAWAJASQAIASARALQAQAKAXABQAWgBARgKQAQgLAJgSQAJgSABgWQgBgWgJgSQgJgSgQgKQgRgLgWAAQgXAAgQALgAJ8BkQgagOgQgaQgPgagBgiQABgiAPgZQAQgaAagOQAagOAhAAQAWAAAQAGQARAGANAKQANALAJANIggASQgJgNgPgIQgPgIgTgBQgWAAgRALQgSAKgKASQgJASgBAWQABAXAJASQAKASASAKQARALAWAAQARAAAOgHQAOgGAIgHIAAgjIhDAAIAAggIBqAAIAABRQgRATgXAKQgXALgdAAQghAAgagOgAiXBkQgagOgQgaQgPgagBgiQABgiAPgZQAQgaAagOQAagOAhAAQAWAAAQAGQARAGANAKQANALAJANIggASQgJgNgPgIQgPgIgTgBQgWAAgRALQgSAKgKASQgJASgBAWQABAXAJASQAKASASAKQARALAWAAQARAAAOgHQAOgGAIgHIAAgjIhDAAIAAggIBqAAIAABRQgRATgXAKQgXALgdAAQghAAgagOgAmTBkQgagOgQgaQgPgagBgiQABgiAPgZQAQgaAagOQAagOAhAAQAWAAAQAGQARAGANAKQANALAJANIggASQgJgNgPgIQgPgIgTgBQgWAAgRALQgSAKgKASQgJASgBAWQABAXAJASQAKASASAKQARALAWAAQARAAAOgHQAOgGAIgHIAAgjIhDAAIAAggIBqAAIAABRQgRATgXAKQgXALgdAAQghAAgagOgAqVBnQgVgMgLgUQgKgVAAgbIAAiFIAnAAIAACDQAAAbAPAQQAOAPAcABQAcgBAOgPQAPgQAAgbIAAiDIAnAAIAACEQAAAcgLAVQgKAUgVAMQgWALggAAQggAAgWgLgA0jBoQgWgJgPgQIAWgeQALAMASAJQASAJAXABQAQgBAKgEQAKgFAEgGQAFgHAAgIQgBgLgJgHQgJgGgPgEIgfgIQgRgEgOgHQgPgFgJgNQgKgMAAgUQAAgTAKgOQAKgPASgIQASgJAZAAQAaAAAVAIQAVAIAPAPIgWAdQgNgNgRgGQgRgGgRAAQgSAAgKAHQgKAHAAANQAAAKAKAGQAJAGAPAEIAfAIQAQAEAPAHQAOAGAKAMQAJANAAAVQAAASgJAQQgJAPgTAKQgTAJgeAAQgeAAgXgKgAPgBuIAAi6IhDAAIAAgiICtAAIAAAiIhDAAIAAC6gAHqBuIh0icIAACcIgnAAIAAjcIAoAAIByCYIAAiYIAnAAIAADcgADsBuIAAjcIAnAAIAADcgAAzBuIAAjcIAnAAIAAC6IBiAAIAAAigAseBuIgyhTIgmAAIAABTIgnAAIAAjcIBhAAQAWAAARAJQAQAJAJAPQAJAQAAAVQAAAUgIANQgHAMgMAIQgMAIgOACIA3BXgAt2gFIA1AAQARAAAKgKQALgJAAgQQAAgRgLgJQgKgJgRgBIg1AAgAw1BuIAAi6IhDAAIAAgiICtAAIAAAiIhDAAIAAC6g");
	this.shape.setTransform(-0.9,-5.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-136.2,-16.6,270.7,23);


(lib.Copy_Stand_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxtDfQg2gTgmgkIBLhqQAaAbAnAQQAoARAvABQAWAAAPgGQAPgFABgOQgBgLgSgGQgUgGgegEQgegFghgIQgigJgegQQgegRgSgbQgUgdgBguQABgpAWgkQAWgjArgWQAsgWBBgBQA7AAAzAQQAzARApAhIhOBmQgfgYglgLQgkgMgiAAQgVAAgJAGQgHAGABAJQAAALATAGQATAGAdAFQAeAFAiAJQAhAJAeAPQAeARAUAZQASAdABArQgCBPg1ArQg2AqhgABQhLAAg1gVgALyDsIAAnYIDUAAQBLAAA7AbQA6AcAhA1QAjA1AABLQAABLgjA0QghA1g6AcQg7AbhLABgAOCBvIBEAAQAkAAAZgQQAagPANgaQAOgaAAgcQABgggNgZQgMgZgagPQgZgOgnAAIhEAAgAIBDsIivjuIAADuIiPAAIAAnYICTAAIClDgIAAjgICQAAIAAHYgAgRDsIgRg4IirAAIgRA4IijAAICvnYIC0AAICtHYgAhJA3IgviWIgvCWIBeAAgAp/DsIAAlbIh/AAIAAh9IGNAAIAAB9Ih/AAIAAFbg");
	this.shape.setTransform(-1.9,-1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.5,-25.9,245.3,48.9);


(lib.Copy_Screens_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("AL4CRQgcgMgQgYQgQgYAAgkIBLAAQAAAXAOAMQAOANAXAAQASgBALgIQALgIAAgOQABgMgMgKQgLgKgagJQgWgIgWgLQgVgJgPgQQgOgRAAgZQAAgdAPgVQAPgVAZgMQAagMAfAAQAhAAAaAMQAbAMAQAWQAQAWAAAeIhKAAQAAgNgHgJQgGgIgKgEQgLgEgMAAQgOAAgIAHQgJAHAAALQABAIAGAHQAGAGAJAEIATAIQASAGASAIQARAIAPAKQAPAJAJAPQAJAPAAAVQAAAggRAXQgQAXgcAMQgbAMgiABQgkAAgbgMgApbCIQgigTgUghQgUghAAgqQAAggAOgeQAOgeAYgXQAZgXAfgNQAfgOAjAAQAnABAgAPQAfAQAVAbQAVAbAGAiIhPAAQgJgXgVgOQgUgOgagBQgZABgVANQgVANgMAWQgNAVAAAZQAAAXAKASQALATASALQASALAWAAQAbAAAWgPQAWgNANgYIBPAAQgMAjgYAaQgZAbghAQQgiAPgnABQgsgBgigUgAt9CRQgcgMgQgYQgQgYAAgkIBLAAQAAAXAOAMQAOANAXAAQASgBALgIQALgIAAgOQABgMgMgKQgLgKgagJQgWgIgWgLQgVgJgPgQQgOgRAAgZQAAgdAPgVQAPgVAZgMQAagMAfAAQAhAAAaAMQAbAMAQAWQAQAWAAAeIhKAAQAAgNgHgJQgGgIgKgEQgLgEgMAAQgOAAgIAHQgJAHAAALQABAIAGAHQAGAGAJAEIATAIQASAGASAIQARAIAPAKQAPAJAJAPQAJAPAAAVQAAAggRAXQgQAXgcAMQgbAMgiABQgkAAgbgMgAI5CVIhSizIglCzIhKAAIA/kpIBBAAIBSCyIAliyIBLAAIhAEpgACUCVIBAkpICyAAIgNBBIhoAAIgKAwIBoAAIgOA+IhoAAIgNA6IBoAAIgNBAgAhNCVIA/kpICxAAIgOBBIhoAAIgKAwIBoAAIgOA+IhoAAIgMA6IBoAAIgOBAgAi+CVIgsh5IgRAAIgaB5IhLAAIBAkpIBoAAQAfAAATAGQATAHALAMQAKALAGAOQAFAOAAAQQAAAVgIARQgJARgNAMQgLAIgNAHQgNAGgMABIA2CAgAjwgXIAoAAQAKAAAHgDQAHgCAFgFQAFgEADgHQADgHAAgIQAAgGgCgGQgCgFgEgEQgEgFgHgCQgHgDgJAAIgfAAg");
	this.shape.setTransform(0.7,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.7,-14.2,191,31.5);


(lib.Copy_Out_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALXDqQgRgLgKgRQgKgRAAgVQAAgVAKgRQAKgRARgKQASgKAUgBQAWABARAKQARAKAKARQALARAAAVQAAAVgLARQgKARgRALQgRAKgWAAQgUAAgSgKgAiODZQgzgagZgtQgaguAAg7IAAkVICRAAIAAEQQABAjAWAXQAWAXAsABQApgBAXgXQAWgXAAgjIAAkQICSAAIAAEUQgBA8gZAuQgYAtg0AaQg0AahOABQhQgBg0gagArKDVQg6gfgig3Qgig3AAhIQAAhIAig3QAig3A6geQA7gfBKAAQBJAAA6AfQA7AeAiA3QAiA3AABIQAABIgiA3QgiA3g7AfQg6AehJABQhKgBg7gegAqBhlQgaAQgOAaQgOAbAAAgQAAAhAOAaQAOAbAaAQQAZAPAjABQAigBAZgPQAagQAOgbQAOgaAAghQAAgggOgbQgOgagagQQgZgQgiAAQgjAAgZAQgAGrDsIAAlbIh/AAIAAh9IGNAAIAAB9Ih/AAIAAFbg");
	this.shape.setTransform(-1.9,-1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.1,-26,168.4,49);


(lib.Copy_DigitalBrand_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().p("AscBWQgWgMgOgXQgNgVgBgeQABgdANgVQAOgWAWgMQAXgNAbAAQATAAAOAFQAPAFALAKQALAIAHAMIgbAPQgIgLgNgHQgMgHgRAAQgTAAgOAJQgPAIgJAQQgIAQAAASQAAAUAIAPQAJAPAPAKQAOAJATgBQAPAAAMgFQAMgGAGgGIAAgdIg4AAIAAgbIBaAAIAABEQgOARgUAIQgUAKgZAAQgbAAgXgMgAPeBfIAAi9IBHAAQAeAAAXAMQAWANAMAVQANAWAAAaQAAAcgNAVQgMAVgWAMQgXAMgeABgAQABBIAlAAQAVAAAPgJQAOgJAIgOQAIgPAAgSQAAgRgIgPQgHgPgPgJQgOgJgWAAIglAAgAN/BfIhkiGIAACGIghAAIAAi9IAiAAIBiCCIAAiCIAhAAIAAC9gAKoBfIgOglIhXAAIgOAlIgmAAIBLi9IApAAIBLC9gAKRAdIgihZIgjBZIBFAAgAHFBfIgqhIIghAAIAABIIgiAAIAAi9IBUAAQATAAAOAIQAOAHAIAOQAHANAAARQAAASgGAMQgHAJgKAHQgKAHgMACIAvBLgAF6gEIAuAAQAOAAAJgIQAJgIAAgPQAAgNgJgIQgJgJgOAAIguAAgACIBfIAAi9IBeAAQASAAAMAHQAMAGAGALQAGALAAANQAAAMgEAKQgFAJgHAFQgIAHgJABQALACAIAFQAIAHAFAJQAFAKAAAMQAAAPgGALQgHAMgMAGQgMAIgSAAgACqBBIA3AAQAOAAAHgHQAIgHAAgMQAAgLgIgIQgHgHgOAAIg3AAgACqgPIA1AAQANAAAHgHQAHgHAAgKQAAgMgHgGQgHgIgNAAIg1AAgAiBBfIAAi9IAiAAIAACfIBUAAIAAAegAjSBfIgOglIhXAAIgPAlIglAAIBKi9IAqAAIBLC9gAjqAdIgihZIgiBZIBEAAgAnTBfIAAigIg6AAIAAgdICVAAIAAAdIg6AAIAACggApiBfIAAi9IAiAAIAAC9gAumBfIAAi9IAhAAIAAC9gAyIBfIAAi9IBHAAQAeAAAXAMQAWANAMAVQANAWAAAaQAAAcgNAVQgMAVgWAMQgXAMgeABgAxmBBIAlAAQAVAAAPgJQAOgJAIgOQAIgPAAgSQAAgRgIgPQgHgPgPgJQgOgJgWAAIglAAg");
	this.shape.setTransform(-0.8,-0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-10.4,232.3,19.7);


(lib.Copy_Creative_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().p("AukByQgggRgSgdQgSgdAAgnQAAgmASgdQASgdAggRQAfgQAoAAQAhAAAXALQAXALAOARQAPAQAHATIhCAeQgFgPgNgLQgNgKgSgBQgSAAgOAIQgOAJgIAPQgHAOAAAQQAAARAHAPQAIAOAOAIQAOAIASAAQASAAANgKQANgLAFgPIBCAeQgHARgOARQgPARgXAMQgXALghABQgogBgfgQgAMpB+IAAj8IDAAAIAABDIhzAAIAAAZIBxAAIAABCIhxAAIAAAbIBzAAIAABDgAJCB+Ihdj8IBXAAIA3CpIA2ipIBXAAIhdD8gAFvB+IAAj8IBNAAIAAD8gACpB+IAAi5IhEAAIAAhDIDUAAIAABDIhDAAIAAC5gAAKB+IgJgdIhZAAIgJAdIhXAAIBdj8IBfAAIBdD8gAgRAdIgZhPIgZBPIAyAAgAmaB+IAAj8IDAAAIAABDIh0AAIAAAZIBxAAIAABCIhxAAIAAAbIB0AAIAABDgAorB+IgjhQIgcAAIAABQIhNAAIAAj8ICHAAQAeABAVALQAUANAKATQALAUAAAYQgBAVgHAQQgHANgKAKQgLAJgKAFIAuBagApqgSIAvAAQAKAAAHgGQAHgEABgLQgBgKgHgFQgHgFgKAAIgvAAg");
	this.shape.setTransform(-1.7,-0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.9,-13.9,200.4,26.2);


(lib.Copy_Connect_MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().p("AMACcQgpgWgYgoQgZgoAAg2QAAg0AZgoQAYgpApgWQAqgWA1gBQAmABAcAMQAcALATAUQATATANAWIg/AfQgMgWgWgOQgVgOgbAAQggAAgYAPQgZAOgOAaQgOAaAAAfQAAAhAOAaQAOAZAZAOQAYAPAgABQAbgBAVgOQAWgOAMgWIA/AfQgNAWgTATQgUATgcANQgbAMgmAAQg1AAgqgXgAtdCcQgogXgYgoQgXgogBg1QABgzAXgoQAYgoAogXQApgYA0AAQA2AAApAYQAoAXAXAoQAYAoAAAzQAAA1gYAoQgXAogoAXQgpAWg2ABQg0gBgpgWgAs4hhQgXAOgNAaQgMAaAAAfQAAAgAMAaQANAZAXAPQAYAPAgABQAggBAYgPQAYgPANgZQANgaAAggQAAgfgNgaQgNgagYgOQgYgPggAAQggAAgYAPgAzqCcQgpgWgYgoQgZgoAAg2QAAg0AZgoQAYgpApgWQAqgWA0gBQAmABAdAMQAcALATAUQAUATAMAWIg/AfQgMgWgVgOQgWgOgcAAQgfAAgZAPQgYAOgOAaQgOAaAAAfQAAAhAOAaQAOAZAYAOQAZAPAfABQAcgBAWgOQAVgOAMgWIA/AfQgMAWgUATQgUATgbANQgcAMgnAAQg0AAgqgXgASWCtIAAkYIhmAAIAAhBIEVAAIAABBIhkAAIAAEYgAFdCtIAAlZID1AAIAABBIirAAIAABJICoAAIAABAIioAAIAABOICrAAIAABBgACmCtIiljhIAADhIhHAAIAAlZIBJAAIChDYIAAjYIBKAAIAAFZgAj9CtIiljhIAADhIhKAAIAAlZIBMAAICgDYIAAjYIBLAAIAAFZg");
	this.shape.setTransform(-1.9,-1.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-136.8,-19.1,269.9,35.9);


(lib.Copy_Attention_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("AKJBxQgegRgTgdQgSgdAAgmQAAglASgeQATgcAegRQAfgQAogBQAnABAfAQQAfARASAcQASAeAAAlQAAAmgSAdQgSAdgfARQgfAQgnAAQgoAAgfgQgAKwg1QgOAJgHANQgIAPAAAQQAAARAIAOQAHAOAOAJQANAIATAAQASAAAOgIQANgJAHgOQAIgOAAgRQAAgQgIgPQgHgNgNgJQgOgIgSAAQgTAAgNAIgAQ4B9Ihdh+IAAB+IhNAAIAAj5IBPAAIBYB3IAAh3IBMAAIAAD5gAHFB9IAAj5IBMAAIAAD5gAEBB9IAAi3IhDAAIAAhCIDSAAIAABCIhDAAIAAC3gABAB9Ihbh+IAAB+IhNAAIAAj5IBPAAIBWB3IAAh3IBMAAIAAD5gAliB9IAAj5IC/AAIAABCIhyAAIAAAZIBwAAIAABAIhwAAIAAAbIByAAIAABDgAomB9IAAi3IhDAAIAAhCIDTAAIAABCIhDAAIAAC3gAsgB9IAAi3IhDAAIAAhCIDTAAIAABCIhDAAIAAC3gAu9B9IgJgeIhaAAIgJAeIhXAAIBdj5IBgAAIBdD5gAvaAeIgZhPIgZBPIAyAAg");
	this.shape.setTransform(-2.7,-0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,-13.8,230.7,26);


(lib.Copy_AtScale_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZB1QgegRgSgeQgSgeAAgoQAAgnASgeQASgeAegRQAfgRAnAAQAdAAAVAJQAVAJAPAPQAOAOAJARIgvAXQgJgQgQgLQgQgLgVAAQgXAAgTALQgSALgLATQgKAUAAAXQAAAYAKAUQALATASALQATALAXAAQAVAAAQgLQAQgKAJgRIAvAXQgJARgOAOQgPAPgVAJQgVAJgdAAQgnAAgfgRgAkKB7QgbgLgSgTIAegqQAOAOAVALQAVAJAbABQAXgBALgIQALgJAAgLQAAgLgLgHQgLgGgRgEIgkgJQgTgFgRgIQgRgHgLgOQgKgPgBgYQAAgWAMgSQAMgSAWgLQAWgLAfAAQAfAAAaAJQAZAKAUARIgfApQgQgOgUgHQgUgHgUAAQgSAAgKAHQgJAHAAAMQAAAKALAGQALAFARAEIAkAJQATAFARAJQARAIAKAOQALAPABAYQAAAYgMASQgLATgXALQgYALgjAAQglAAgcgLgAMdCCIAAkDIC5AAIAAAxIiBAAIAAA3IB+AAIAAAvIh+AAIAAA7ICBAAIAAAxgAIzCCIAAkDIA3AAIAADSIBuAAIAAAxgAG9CCIgQgsIhwAAIgQAsIhAAAIBlkDIBGAAIBkEDgAGeAlIgphuIgpBuIBSAAgApsCCIAAjSIhNAAIAAgxIDQAAIAAAxIhLAAIAADSgAsFCCIgQgsIhwAAIgQAsIhAAAIBlkDIBGAAIBkEDgAskAlIgphuIgpBuIBSAAg");
	this.shape.setTransform(-2.5,-0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.7,-14.3,196.5,27);


(lib.Copy_Advertising_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().p("APkBbQgZgNgPgXQgOgXgBggQABgfAOgXQAPgYAZgMQAZgNAeAAQAYAAASAIQARAIAMAMQAMAMAGANIgzAaQgDgGgFgGQgGgGgHgDQgHgDgKgBQgOABgLAGQgLAHgGALQgGAMAAAMQAAANAGAMQAGAMALAGQALAHAOgBQAKAAAIgCQAJgDAFgEIAAgGIglAAIAAgzIBiAAIAABQQgRASgXALQgWALgfAAQgeAAgZgMgAGFBfQgWgJgQgOIAfgtQALALARAHQAQAHAVAAQAJAAAGgDQAHgCABgGQgBgEgIgCIgUgFIgcgFQgOgEgNgHQgMgHgJgLQgHgMgBgTQAAgSAJgPQAKgPASgKQATgJAcgBQAYAAAWAHQAWAIARANIghAsQgNgKgQgFQgPgFgOAAQgKAAgDACQgDADAAAEQAAAFAIACIAVAFQANACAOAEQAOAEANAGQANAIAIAJQAIAMAAATQAAAhgYASQgWASgpAAQggABgXgJgANBBkIhKhkIAABkIg9AAIAAjHIA/AAIBGBfIAAhfIA+AAIAADHgAJCBkIAAjHIA9AAIAADHgAD1BkIAAjHIA+AAIAADHgABSBkIAAiTIg2AAIAAg0ICoAAIAAA0Ig1AAIAACTgAhNBkIgcg/IgWAAIAAA/Ig9AAIAAjHIBrAAQAZAAAQAJQAPAKAJAPQAJAQAAASQgBASgFAMQgGALgJAHQgHAIgJAEIAlBHgAh/gPIAlAAQAJAAAFgDQAGgEABgJQgBgHgGgEQgFgEgJgBIglAAgAmLBkIAAjHICZAAIAAA0IhcAAIAAAVIBaAAIAAAzIhaAAIAAAWIBcAAIAAA1gApHBkIhLjHIBFAAIAsCFIAriFIBFAAIhKDHgAtwBkIAAjHIBbAAQAgAAAYAMQAZALAOAXQAOAWABAfQgBAggOAWQgOAWgZAMQgYAMggAAgAszAvIAeAAQAPAAALgHQAKgHAGgKQAGgLAAgMQAAgMgGgMQgFgKgKgGQgLgGgQgBIgeAAgAvbBkIgHgYIhIAAIgIAYIhFAAIBLjHIBMAAIBKDHgAvzAXIgTg/IgUA/IAnAAg");
	this.shape.setTransform(-2.2,-0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.6,-11,228.9,20.8);


(lib.Copy_Across_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("AJsCBQgZgLgOgVQgOgWgBggIBDAAQABAVAMALQAMALAVAAQAQAAAJgIQAKgHABgMQAAgLgLgIQgJgJgYgJQgTgHgUgJQgSgIgNgPQgNgPgBgWQABgaANgTQAOgSAWgLQAWgKAdAAQAcAAAYAKQAYALAOATQAOAUAAAbIhBAAQgBgMgGgIQgFgHgJgEQgKgDgLAAQgMAAgIAGQgGAGgBAKQAAAIAGAFQAFAGAJADQAIAFAIADIAgAMQAQAHANAJQAOAIAHANQAIANAAATQAAAdgOAUQgPAUgZALQgYALgfAAQgfAAgYgKgAGBCBQgYgLgOgVQgOgWgBggIBDAAQABAVAMALQAMALAVAAQAQAAAJgIQAKgHABgMQAAgLgLgIQgJgJgYgJQgTgHgUgJQgSgIgNgPQgNgPgBgWQABgaANgTQAOgSAWgLQAWgKAdAAQAcAAAYAKQAYALAOATQAOAUAAAbIhBAAQgBgMgGgIQgFgHgJgEQgKgDgLAAQgMAAgIAGQgGAGgBAKQAAAIAGAFQAFAGAJADQAIAFAIADIAgAMQAQAHANAJQAOAIAHANQAIANAAATQAAAdgOAUQgPAUgZALQgYALgfAAQgfAAgZgKgABgB5QgfgRgRgeQgRgdAAglQAAgcAMgbQAMgaAWgVQAWgVAbgLQAcgMAgAAQAmAAAeARQAfARASAdQASAdAAAlQAAAdgNAbQgMAbgVAVQgVAVgdALQgcAMgfAAQgnAAgfgSgACMhCQgTAMgMATQgKATgBAWQAAAUAJARQAKAQAQAKQAQAKAVAAQAXAAATgMQASgMALgTQALgUAAgWQAAgUgJgQQgJgRgRgJQgQgJgUgBQgXABgSALgAm7B5QgfgRgSgeQgRgdgBglQABgcAMgbQAMgaAWgVQAWgVAbgLQAcgMAgAAQAiAAAcAOQAcAOATAYQASAYAGAeIhGAAQgJgVgSgMQgSgMgXgBQgXABgSALQgSAMgMATQgLAUAAAVQAAAVAJAQQAKARAQAJQAPAKAVAAQAXAAAUgNQATgMALgVIBIAAQgLAfgWAYQgWAYgeANQgeAOgiAAQgnAAgegSgAhNCFIgnhsIgQAAIgWBsIhDAAIA5kJIBcAAQAcAAARAGQARAGAKALQAHAKAFAMQAEANAAAOQAAASgHAPQgHAPgKALQgKAIgLAFQgMAGgLABIAwBygAh5gUIAjAAQAKAAAFgCIALgHQAEgEADgGQADgGAAgHQAAgGgCgFQgCgEgDgEQgEgEgGgCQgGgDgIAAIgbAAgApQCFIgJgzIheAAIgfAzIhCAAICbkJIBEAAIArEJgApfAdIgNhSIguBSIA7AAg");
	this.shape.setTransform(-1.2,1.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.5,-12.6,158.6,28);


(lib.Block_White_Triple = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().dr(-200,-200,400,400);
	this.shape.setTransform(-212,0,0.054,1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().dr(-200,-200,400,400);
	this.shape_1.setTransform(43,0);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().dr(-200,-200,400,400);
	this.shape_2.setTransform(20.4,0);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().dr(-200,-200,400,400);
	this.shape_3.setTransform(20.4,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-222.7,-200,465.7,400);


(lib.Block_White_Highlight = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().dr(-200,-200,400,400);
	this.shape.setTransform(87.8,0,0.054,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().dr(-200,-200,400,400);
	this.shape_1.setTransform(-47,0,0.054,1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.247)").s().dr(-200,-200,400,400);
	this.shape_2.setTransform(154.3,0,0.057,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.247)").s().dr(-200,-200,400,400);
	this.shape_3.setTransform(19.5,0,0.057,1);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.247)").s().dr(-200,-200,400,400);
	this.shape_4.setTransform(99.2,0,0.108,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.247)").s().dr(-200,-200,400,400);
	this.shape_5.setTransform(14.4,0,0.145,1);

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.329)").s().dr(-200,-200,400,400);
	this.shape_6.setTransform(155.2,0,0.175,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.329)").s().dr(-200,-200,400,400);
	this.shape_7.setTransform(20.4,0,0.175,1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.7,-200,247.9,400);


(lib.Block_White_Double = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-200,-200,400,400);
	this.shape.setTransform(22,0);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().dr(-200,-200,400,400);
	this.shape_1.setTransform(-0.6,0);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().dr(-200,-200,400,400);
	this.shape_2.setTransform(-23.2,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-223.2,-200,445.2,400);


(lib.Block_Green_Highlight = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(147,211,42,0.498)").s().dr(-200,-200,400,400);
	this.shape.setTransform(290.2,0,0.054,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(147,211,42,0.498)").s().dr(-200,-200,400,400);
	this.shape_1.setTransform(191,0,0.054,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(147,211,42,0.498)").s().dr(-200,-200,400,400);
	this.shape_2.setTransform(52.2,0,0.054,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(147,211,42,0.498)").s().dr(-200,-200,400,400);
	this.shape_3.setTransform(-47,0,0.054,1);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(147,211,42,0.749)").s().dr(-200,-200,400,400);
	this.shape_4.setTransform(257.5,0,0.057,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(147,211,42,0.749)").s().dr(-200,-200,400,400);
	this.shape_5.setTransform(19.5,0,0.057,1);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(147,211,42,0.749)").s().dr(-200,-200,400,400);
	this.shape_6.setTransform(337.2,0,0.108,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(147,211,42,0.749)").s().dr(-200,-200,400,400);
	this.shape_7.setTransform(99.2,0,0.108,1);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(147,211,42,0.498)").s().dr(-200,-200,400,400);
	this.shape_8.setTransform(384.4,0,0.046,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(147,211,42,0.498)").s().dr(-200,-200,400,400);
	this.shape_9.setTransform(146.4,0,0.046,1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.7,-200,451.4,400);


(lib.Block_Green_Double_Long = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().dr(-200,-200,400,400);
	this.shape.setTransform(-2373.4,0,10.186,1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(130,188,0,0.498)").s().dr(-200,-200,400,400);
	this.shape_1.setTransform(181.7,0,0.552,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(130,188,0,0.498)").s().dr(-200,-200,400,400);
	this.shape_2.setTransform(-346.2,0,1.099,1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4410.7,-200,4702.8,400);


(lib.Block_Green = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82BC00").s().dr(-200,-200,400,400);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Block_Blue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().dr(-200,-200,400,400);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.Logo_White_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFYF9Qg4gPABgnIABqTQAnABAZANQAvAWAAA7IAABUIC0AAIgIA2QgQA2gpAAIhzAAIgCGxQgbABgcgIgAY/F0Qg3gPgBglIAAk7QAAgtgagYQgcgZg+AAQgpABgoAIIggAJIAAHEQgbAAgcgIQg4gPAAgmIAAntQAnAUAqAAQAaAAA0gLQAzgMAdABQBbAAA2AhQBEAqAABbIAAGGQgcgBgcgIgA0YF0Qg5gPAAglIAAk7QAAgtgagYQgbgZg+AAQgpABgpAIIgfAJIAAHEQgcAAgcgIQg3gPAAgmIAAntQAmAUArAAQAZAAAzgLQA0gMAeABQBaAAA2AhQBEArAABaIAAGGQgcgBgbgIgAcdFJQg/gwAAhUIAAjMQABhUA4gvQA5gvBrgBQBpAAA5AvQA2AsAABNQAABIgwAqQg4AxhyAAQg7ABgogTIABAAIAOghQAVghAqgCQAzgFAXgGQAagJAQgSQAMgRAAgWQAAhShrAAQg9AAgYAcQgXAaAAA0IAAAjIABAAIAABSIgBAAIAAA6QAAA1AeAZQAeAbBBAAIE+gBIgIAtQgQAtgmAAIkAABQhugBg/gugAofFJQg+gwgBhUIAAjMQABhUA4gvQA5gvBrgBQBpAAA5AvQA2AsABBNQAABIgxAqQg3AxhyAAQg8ABgngTIAMggQAWghArgDQA1gFAXgGQAYgJASgVQAKgPAAgVQAAhShrAAQg8AAgaAcQgVAaAAA0IAACvQAAA1AdAZQAfAbBBAAIEhAAIAAnZIAVAQQAaAQAVAAQAeAAAdgJQAogNAMgCQAfgEA+ACIA4ADIgJAsQgQAtgpAAIiZAAIAAF3IgJAtQgQArgjABIlSABQhugBhAgugAxGFKQg7guAAhVIAAjRQAAhPA7gyQA5guBSgBQBbAAAzAqIAAjYQAgAAAaAIQA2ARAAAuIAAKWQghgPgugBQgZAAgxAJQgyAKgZAAQhrgBg6gtgAv1hLQgdAbAAA0IAAC0QAAA5AaAYQAdAaBIAAQAnAAAjgJQASgFAKgFIAAkVQAAgpgogbQgngbgxAAQgugBgaAagAJ+F3QgMgBgIgHQgHgJAAgKIAAlcQAAgKAIgJIAIgFQAIgDAIABQAIACAGAFIBCBBIAAC6QAAALAJAJQAIAIAKAAIC7AAIBEBFQAOANgIAQQgCAIgHAEQgHAFgIAAgEAk4AFuQgLgIAAgMIAAghQAAgMALgIQALgHATAAQATAAALAHQALAIAAAMIAAAhQAAAMgLAIQgLAIgTAAQgTAAgLgIgEAk2AE+IAAAYQAAAYAfAAQAhAAAAgYIAAgYQAAgYghAAQgfAAAAAYgEgkjAE9Qhbg+AAhuIAAoVQAcABAdAHQA5APAAAlIAAHKQAABJA0AnQAzAmBUAAQBWAAAygmQA1gnAAhJIAAoGIA5AIQA5APAAAlIAAHZQAABuhaA+QhUA4iBABQh/gBhTg4gEAldAFgQgEgMgMgBIAAARQgJAAgBgGIAAgvIAPAAQAWAAAAARQAAANgLADQAJAFADAOIgGABQgEAAgCgEgEAlNAFKIAFAAQALAAAAgJQAAgHgCgCQgDgBgGAAIgFAAgAQLDkIhDhDIAAi5QABgLgJgIQgIgJgLABIi6AAIhFhEQgMgNAGgRQAGgRATAAIFdABQALAAAIAIQAIAIAAALIAAFaQAAAKgIAKQgDADgGACQgGADgFAAQgKAAgIgIg");
	this.shape.setTransform(243.2,38.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,486.3,77.8);


(lib.Logo_Mixed_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80BD01").s().p("ACbDBIhDhCIABi5QAAgMgJgHQgHgJgMABIi4AAIhFhFQgMgMAGgRQAHgRASAAIFbAAQALAAAIAIQAJAJgBAKIAAFbQAAAKgIAJQgDAEgGACQgGACgFAAQgKAAgIgIg");
	this.shape.setTransform(331.1,42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303E48").s().p("AFYF9Qg4gPABgnIABqTQAnABAZANQAvAWAAA7IAABUIC0AAIgIA2QgQA2gpAAIhzAAIgCGxQgbABgcgIgAY/F0Qg3gPgBglIAAk7QAAgtgagYQgcgZg+AAQgpABgoAIIggAJIAAHEQgbAAgcgIQg4gPAAgmIAAntQAnAUAqAAQAaAAA0gLQAzgMAdABQBbAAA2AhQBEAqAABbIAAGGQgcgBgcgIgA0YF0Qg5gPAAglIAAk7QAAgtgagYQgbgZg+AAQgpABgpAIIgfAJIAAHEQgcAAgcgIQg3gPAAgmIAAntQAmAUArAAQAZAAAzgLQA0gMAeABQBaAAA2AhQBEArAABaIAAGGQgcgBgbgIgAcdFJQg/gwAAhUIAAjMQABhUA4gvQA5gvBrgBQBpAAA5AvQA2AsAABNQAABIgwAqQg4AxhyAAQg7ABgogTIABAAIAOghQAVghAqgCQAzgFAXgGQAagJAQgSQAMgRAAgWQAAhShrAAQg9AAgYAcQgXAaAAA0IAAAjIABAAIAABSIgBAAIAAA6QAAA1AeAZQAeAbBBAAIE+gBIgIAtQgQAtgmAAIkAABQhugBg/gugAofFJQg+gwgBhUIAAjMQABhUA4gvQA5gvBrgBQBpAAA5AvQA2AsABBNQAABIgxAqQg3AxhyAAQg8ABgngTIAMggQAWghArgDQA1gFAXgGQAYgJASgVQAKgPAAgVQAAhShrAAQg8AAgaAcQgVAaAAA0IAACvQAAA1AdAZQAfAbBBAAIEhAAIAAnZIAVAQQAaAQAVAAQAeAAAdgJQAogNAMgCQAfgEA+ACIA4ADIgJAsQgQAtgpAAIiZAAIAAF3IgJAtQgQArgjABIlSABQhugBhAgugAxGFKQg7guAAhVIAAjRQAAhPA7gyQA5guBSgBQBbAAAzAqIAAjYQAgAAAaAIQA2ARAAAuIAAKWQghgPgugBQgZAAgxAJQgyAKgZAAQhrgBg6gtgAv1hLQgdAbAAA0IAAC0QAAA5AaAYQAdAaBIAAQAnAAAjgJQASgFAKgFIAAkVQAAgpgogbQgngbgxAAQgugBgaAagAJ+F3QgMgBgIgHQgHgJAAgKIAAlcQAAgKAIgJIAIgFQAIgDAIABQAIACAGAFIBCBBIAAC6QAAALAJAJQAIAIAKAAIC7AAIBEBFQAOANgIAQQgCAIgHAEQgHAFgIAAgEAk4AFuQgLgIAAgMIAAghQAAgMALgIQALgHATAAQATAAALAHQALAIAAAMIAAAhQAAAMgLAIQgLAIgTAAQgTAAgLgIgEAk2AE+IAAAYQAAAYAfAAQAhAAAAgYIAAgYQAAgYghAAQgfAAAAAYgEgkjAE9Qhbg+AAhuIAAoVQAcABAdAHQA5APAAAlIAAHKQAABJA0AnQAzAmBUAAQBWAAAygmQA1gnAAhJIAAoGIA5AIQA5APAAAlIAAHZQAABuhaA+QhUA4iBABQh/gBhTg4gEAldAFgQgEgMgMgBIAAARQgJAAgBgGIAAgvIAPAAQAWAAAAARQAAANgLADQAJAFADAOIgGABQgEAAgCgEgEAlNAFKIAFAAQALAAAAgJQAAgHgCgCQgDgBgGAAIgFAAg");
	this.shape_1.setTransform(243.2,38.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,486.3,77.8);


(lib.Logo_Blue_2_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323E48").s().p("AFYF9Qg4gPABgnIABqTQAnABAZANQAvAWAAA7IAABUIC0AAIgIA2QgQA2gpAAIhzAAIgCGxQgbABgcgIgAY/F0Qg3gPgBglIAAk7QAAgtgagYQgcgZg+AAQgpABgoAIIggAJIAAHEQgbAAgcgIQg4gPAAgmIAAntQAnAUAqAAQAaAAA0gLQAzgMAdABQBbAAA2AhQBEAqAABbIAAGGQgcgBgcgIgA0YF0Qg5gPAAglIAAk7QAAgtgagYQgbgZg+AAQgpABgpAIIgfAJIAAHEQgcAAgcgIQg3gPAAgmIAAntQAmAUArAAQAZAAAzgLQA0gMAeABQBaAAA2AhQBEArAABaIAAGGQgcgBgbgIgAcdFJQg/gwAAhUIAAjMQABhUA4gvQA5gvBrgBQBpAAA5AvQA2AsAABNQAABIgwAqQg4AxhyAAQg7ABgogTIABAAIAOghQAVghAqgCQAzgFAXgGQAagJAQgSQAMgRAAgWQAAhShrAAQg9AAgYAcQgXAaAAA0IAAAjIABAAIAABSIgBAAIAAA6QAAA1AeAZQAeAbBBAAIE+gBIgIAtQgQAtgmAAIkAABQhugBg/gugAofFJQg+gwgBhUIAAjMQABhUA4gvQA5gvBrgBQBpAAA5AvQA2AsABBNQAABIgxAqQg3AxhyAAQg8ABgngTIAMggQAWghArgDQA1gFAXgGQAYgJASgVQAKgPAAgVQAAhShrAAQg8AAgaAcQgVAaAAA0IAACvQAAA1AdAZQAfAbBBAAIEhAAIAAnZIAVAQQAaAQAVAAQAeAAAdgJQAogNAMgCQAfgEA+ACIA4ADIgJAsQgQAtgpAAIiZAAIAAF3IgJAtQgQArgjABIlSABQhugBhAgugAxGFKQg7guAAhVIAAjRQAAhPA7gyQA5guBSgBQBbAAAzAqIAAjYQAgAAAaAIQA2ARAAAuIAAKWQghgPgugBQgZAAgxAJQgyAKgZAAQhrgBg6gtgAv1hLQgdAbAAA0IAAC0QAAA5AaAYQAdAaBIAAQAnAAAjgJQASgFAKgFIAAkVQAAgpgogbQgngbgxAAQgugBgaAagAJ+F3QgMgBgIgHQgHgJAAgKIAAlcQAAgKAIgJIAIgFQAIgDAIABQAIACAGAFIBCBBIAAC6QAAALAJAJQAIAIAKAAIC7AAIBEBFQAOANgIAQQgCAIgHAEQgHAFgIAAgEAk4AFuQgLgIAAgMIAAghQAAgMALgIQALgHATAAQATAAALAHQALAIAAAMIAAAhQAAAMgLAIQgLAIgTAAQgTAAgLgIgEAk2AE+IAAAYQAAAYAfAAQAhAAAAgYIAAgYQAAgYghAAQgfAAAAAYgEgkjAE9QhYg8gDhpIAAocQAcABAdAHQA5APAAAlIAAHKQAABJA0AnQAzAmBUAAQBWAAAygmQA1gnAAhJIAAoGIA5AIQA5APAAAlIAAHZQAABuhaA+QhUA4iBABQh/gBhTg4gEAldAFgQgEgMgMgBIAAARQgJAAgBgGIAAgvIAPAAQAWAAAAARQAAANgLADQAJAFADAOIgGABQgEAAgCgEgEAlNAFKIAFAAQALAAAAgJQAAgHgCgCQgDgBgGAAIgFAAgAQLDkIhDhDIAAi5QABgLgJgIQgIgJgLABIi6AAIhFhEQgMgNAGgRQAGgRATAAIFdABQALAAAIAIQAIAIAAALIAAFaQAAAKgIAKQgDADgGACQgGADgFAAQgKAAgIgIg");
	this.shape.setTransform(243.2,38.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,486.3,77.8);


(lib.Button_Transition_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.Block_White_Triple();
	this.instance.setTransform(0.1,0,1,1,0,0,0,10.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:225.3},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.8,-200,465.7,400);


(lib.Graphic_StandOut_Button_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{_up:0,_over:15,_down:16});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}
	this.frame_14 = function() {
		this.stop();
		stage.useHandCursor = true;
		stage.mouseChildren = false;
		stage.enableMouseOver(3);
		
		stage.addEventListener('click', function(){
			console.log('foo');
		}.bind(this));
		
		stage.addEventListener('mouseover', function(){
			this.gotoAndStop(16);
		}.bind(this));
		
		stage.addEventListener('mouseout', function(){
			this.gotoAndPlay(0);
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(3));

	// StandOut
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B242A").s().p("AFiA6QgNgHgGgMQgFgLgBgQIAAhJIAbAAIAABIQAAAOAIAHQAHAJAPgBQAOABAHgJQAIgHAAgOIAAhIIAbAAIAABJQAAAQgGALQgGAMgNAHQgMAGgTAAQgTAAgNgGgADGA4QgPgIgJgPQgIgOAAgTQAAgSAIgOQAJgOAPgJQAOgIATAAQATAAAPAIQAPAJAIAOQAJAOAAASQAAATgJAOQgIAPgPAIQgPAIgTAAQgTAAgOgIgADTgiQgIAGgFAIQgEAKgBAKQABALAEAKQAFAJAIAFQAIAFAMAAQALAAAJgFQAJgFAEgJQAFgKAAgLQAAgKgFgKQgEgIgJgGQgJgFgLgBQgMABgIAFgAonA6QgNgFgIgIIAPgVQAGAHAKAFQAKAFANAAQALAAAGgEQAFgEAAgGQgBgFgEgDQgGgEgIgBIgRgEQgKgDgIgEQgHgDgGgGQgFgHAAgMQAAgKAFgJQAHgJAKgFQALgFAPAAQAOAAANAFQAMAEAJAIIgPAUQgIgHgJgEQgJgDgKAAQgJABgEADQgFADAAAGQAAAFAFACQAFADAIACIASAEQAJADAIAEQAIAEAGAFQAEAIABALQAAAMgFAJQgGAIgLAGQgLAFgRAAQgSAAgOgGgAH9A+IAAhkIgkAAIAAgXIBkAAIAAAXIglAAIAABkgAglA+IAAh7IAwAAQATAAAQAIQAOAIAIAOQAJANAAASQAAASgJAOQgIAPgOAHQgQAIgTAAgAgKAnIAVAAQAMgBAJgFQAIgFAFgJQAFgJAAgKQAAgJgEgKQgFgIgJgFQgIgGgNAAIgVAAgAhlA+Ig7hQIAABQIgbAAIAAh7IAbAAIA6BMIAAhMIAbAAIAAB7gAjzA+IgHgVIg2AAIgIAVIgfAAIAxh7IAiAAIAwB7gAkCASIgTg0IgUA0IAnAAgAmbA+IAAhkIglAAIAAgXIBkAAIAAAXIgkAAIAABkg");
	this.shape.setTransform(-0.7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFiA6QgNgHgGgMQgFgLgBgQIAAhJIAbAAIAABIQAAAOAIAHQAHAJAPgBQAOABAHgJQAIgHAAgOIAAhIIAbAAIAABJQAAAQgGALQgGAMgNAHQgMAGgTAAQgTAAgNgGgADGA4QgPgIgJgPQgIgOAAgTQAAgSAIgOQAJgOAPgJQAOgIATAAQATAAAPAIQAPAJAIAOQAJAOAAASQAAATgJAOQgIAPgPAIQgPAIgTAAQgTAAgOgIgADTgiQgIAGgFAIQgEAKgBAKQABALAEAKQAFAJAIAFQAIAFAMAAQALAAAJgFQAJgFAEgJQAFgKAAgLQAAgKgFgKQgEgIgJgGQgJgFgLgBQgMABgIAFgAonA6QgNgFgIgIIAPgVQAGAHAKAFQAKAFANAAQALAAAGgEQAFgEAAgGQgBgFgEgDQgGgEgIgBIgRgEQgKgDgIgEQgHgDgGgGQgFgHAAgMQAAgKAFgJQAHgJAKgFQALgFAPAAQAOAAANAFQAMAEAJAIIgPAUQgIgHgJgEQgJgDgKAAQgJABgEADQgFADAAAGQAAAFAFACQAFADAIACIASAEQAJADAIAEQAIAEAGAFQAEAIABALQAAAMgFAJQgGAIgLAGQgLAFgRAAQgSAAgOgGgAH9A+IAAhkIgkAAIAAgXIBkAAIAAAXIglAAIAABkgAglA+IAAh7IAwAAQATAAAQAIQAOAIAIAOQAJANAAASQAAASgJAOQgIAPgOAHQgQAIgTAAgAgKAnIAVAAQAMgBAJgFQAIgFAFgJQAFgJAAgKQAAgJgEgKQgFgIgJgFQgIgGgNAAIgVAAgAhlA+Ig7hQIAABQIgbAAIAAh7IAbAAIA6BMIAAhMIAbAAIAAB7gAjzA+IgHgVIg2AAIgIAVIgfAAIAxh7IAiAAIAwB7gAkCASIgTg0IgUA0IAnAAgAmbA+IAAhkIglAAIAAgXIBkAAIAAAXIgkAAIAABkg");
	this.shape_1.setTransform(-0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},15).wait(2));

	// Blue (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtipIXbAAIAAFTI3bAAg");
	mask.setTransform(-1,0);

	// Layer 2
	this.instance = new lib.Block_White_Triple();
	this.instance.setTransform(-258.2,172.5,1,1,135,0,0,10.2,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-99,y:13.2},14).to({_off:true},1).wait(2));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArtipIXbAAIAAFTI3bAAg");
	mask_1.setTransform(-1,0);

	// White
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().dr(-75,-17,150,34);
	this.shape_2.setTransform(-1,0);

	this.instance_1 = new lib.Button_Transition_mc();
	this.instance_1.setTransform(69.6,-43.2,1,1,-45);

	this.shape_2.mask = this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},14).to({state:[{t:this.instance_1}]},1).wait(2));

	// Blue
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B242A").s().dr(-77.5,-19.5,155,39);
	this.shape_3.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(17));

	// hit
	this.instance_2 = new lib.Block_Blue();
	this.instance_2.setTransform(0,-68,0.75,0.625);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-193,300,250);


// stage content:
(lib.StandOut_300x250_11_CANVAS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"1 (Struggling To Connect)":0,"2 (Stand Out)":79,"3 (Stunning Creative)":127,"4 (Across Screens)":182,"5 (Gets Attention)":246,"5B (RESOLVE)":346});

	// timeline functions:
	this.frame_329 = function() {
		this._button.gotoAndPlay(0);
	}
	this.frame_346 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(329).call(this.frame_329).wait(17).call(this.frame_346).wait(1));

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDgA3RTYMAuiAAAMAAAgmvMguiAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(347));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_316 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsLIigCfg");
	var mask_graphics_317 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_318 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_319 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_320 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMAsKgsMMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_321 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_322 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_323 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_324 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMIigCgIAAAAMgsMAsKg");
	var mask_graphics_325 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIAAAAIigCgg");
	var mask_graphics_326 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_327 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMIigCgMgsMAsKg");
	var mask_graphics_328 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_329 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_330 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_331 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAIU202IU002IAAAAICgigMAsMAsMIigCgIAAAAI02U0I02U2IAAAAIigCgg");
	var mask_graphics_332 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_333 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMIigCgMgsMAsKg");
	var mask_graphics_334 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_335 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_336 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_337 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAIU202IU002IAAAAICgigMAsMAsMIigCgIAAAAI02U0I02U2IAAAAIigCgg");
	var mask_graphics_338 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_graphics_339 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMAsKgsMMAsMAsMIigCgMgsMAsKg");
	var mask_graphics_340 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_graphics_316,x:-190.4,y:400}).wait(1).to({graphics:mask_graphics_317,x:-190.4,y:400}).wait(1).to({graphics:mask_graphics_318,x:-190.4,y:400}).wait(1).to({graphics:mask_graphics_319,x:-190.4,y:400}).wait(1).to({graphics:mask_graphics_320,x:-190.4,y:400}).wait(1).to({graphics:mask_graphics_321,x:-190.4,y:400}).wait(1).to({graphics:mask_graphics_322,x:-190.5,y:400}).wait(1).to({graphics:mask_graphics_323,x:-175.8,y:385.3}).wait(1).to({graphics:mask_graphics_324,x:-161.1,y:370.6}).wait(1).to({graphics:mask_graphics_325,x:-146.4,y:355.9}).wait(1).to({graphics:mask_graphics_326,x:-131.7,y:341.2}).wait(1).to({graphics:mask_graphics_327,x:-117,y:326.5}).wait(1).to({graphics:mask_graphics_328,x:-102.3,y:311.8}).wait(1).to({graphics:mask_graphics_329,x:-87.6,y:297.1}).wait(1).to({graphics:mask_graphics_330,x:-72.9,y:282.4}).wait(1).to({graphics:mask_graphics_331,x:-58.2,y:267.7}).wait(1).to({graphics:mask_graphics_332,x:-43.5,y:253}).wait(1).to({graphics:mask_graphics_333,x:-28.8,y:238.3}).wait(1).to({graphics:mask_graphics_334,x:-14.1,y:223.6}).wait(1).to({graphics:mask_graphics_335,x:0.5,y:209}).wait(1).to({graphics:mask_graphics_336,x:15.2,y:194.3}).wait(1).to({graphics:mask_graphics_337,x:29.9,y:179.6}).wait(1).to({graphics:mask_graphics_338,x:44.6,y:164.9}).wait(1).to({graphics:mask_graphics_339,x:59.3,y:150.2}).wait(1).to({graphics:mask_graphics_340,x:74,y:135.5}).wait(7));

	// Button
	this._button = new lib.Graphic_StandOut_Button_mc();
	this._button.setTransform(150.6,192.8);
	this._button._off = true;

	this._button.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this._button).wait(316).to({_off:false},0).wait(31));

	// Undertone - Blue
	this.instance = new lib.Logo_Blue_2_mc();
	this.instance.setTransform(150,231.5,0.222,0.222,0,0,0,243,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},120).wait(227));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_68 = new cjs.Graphics().p("Egj3AAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgjvAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgjnAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgmIAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgopAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgrLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EgsLABmMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EgsLADWMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EgsLAFGMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EgsLAG2MAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EgsLAGdMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EgsLAGdMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EgsLAGdMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EgsLAGdMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EgsLAGeMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EgsLAGeMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EgsLAGeMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EgsLAGfMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EgsLAGfMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EgsLAGfMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgsLAGfMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgsLAGgMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EgsLAGgMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgsLAGgMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgsLAGgMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EgsLAGhMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EgsLAGhMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EgsLAGhMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EgsLAGhMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EgsLAGiMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EgsLAGiMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EgsLAGiMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EgsLAGjMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_148 = new cjs.Graphics().p("EgsLAGjMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EgsLAGjMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EgsLAGjMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EgsLAGkMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EgsLAGkMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EgsLAGkMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_154 = new cjs.Graphics().p("EgsLAGkMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EgsLAGlMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_156 = new cjs.Graphics().p("EgsLAGlMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EgsLAGlMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EgsLAGmMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EgsLAGmMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_160 = new cjs.Graphics().p("EgsLAGmMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EgsLAGmMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EgsLAGnMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EgsLAGnMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EgsLAGnMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EgsLAGnMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EgsLAGoMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_167 = new cjs.Graphics().p("EgsLAGoMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_168 = new cjs.Graphics().p("EgsLAGoMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EgsLAGoMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EgsLAGpMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EgsLAGpMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EgsLAGpMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EgsLAGqMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EgsLAGqMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EgsLAGqMAsLgsKMAsMAsKMgsMAsMg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EgsLAGqMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EgsLAD1MAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EgsLABAMAsLgsKMAsMAsKMgsMAsNg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgoRAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgjxAAAMAsKgsLMAsNAsLMgsNAsMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_1_graphics_68,x:336,y:-113}).wait(1).to({graphics:mask_1_graphics_69,x:336.8,y:-114.6}).wait(1).to({graphics:mask_1_graphics_70,x:337.6,y:-116.2}).wait(1).to({graphics:mask_1_graphics_71,x:321.5,y:-84.1}).wait(1).to({graphics:mask_1_graphics_72,x:305.4,y:-52}).wait(1).to({graphics:mask_1_graphics_73,x:289.2,y:-19.9}).wait(1).to({graphics:mask_1_graphics_74,x:263.4,y:12.2}).wait(1).to({graphics:mask_1_graphics_75,x:231.2,y:44.4}).wait(1).to({graphics:mask_1_graphics_76,x:198.9,y:76.5}).wait(1).to({graphics:mask_1_graphics_77,x:166.7,y:108.6}).wait(1).to({graphics:mask_1_graphics_78,x:134.4,y:140.7}).wait(1).to({graphics:mask_1_graphics_79,x:102.2,y:172.8}).wait(1).to({graphics:mask_1_graphics_80,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_81,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_82,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_83,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_84,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_85,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_86,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_87,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_88,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_89,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_90,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_91,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_92,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_93,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_94,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_95,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_96,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_97,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_98,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_99,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_100,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_101,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_102,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_103,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_104,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_105,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_106,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_107,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_108,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_109,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_110,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_111,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_112,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_113,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_114,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_115,x:106,y:169}).wait(1).to({graphics:mask_1_graphics_116,x:83.7,y:191.4}).wait(1).to({graphics:mask_1_graphics_117,x:61.4,y:213.8}).wait(1).to({graphics:mask_1_graphics_118,x:39.1,y:236.2}).wait(1).to({graphics:mask_1_graphics_119,x:16.8,y:258.6}).wait(1).to({graphics:mask_1_graphics_120,x:-5.6,y:281}).wait(1).to({graphics:mask_1_graphics_121,x:-27.9,y:293.1}).wait(1).to({graphics:mask_1_graphics_122,x:-50.2,y:304.3}).wait(1).to({graphics:mask_1_graphics_123,x:-72.5,y:315.5}).wait(1).to({graphics:mask_1_graphics_124,x:-94.8,y:326.7}).wait(1).to({graphics:mask_1_graphics_125,x:-91.7,y:324.1}).wait(1).to({graphics:mask_1_graphics_126,x:-91.7,y:324.2}).wait(1).to({graphics:mask_1_graphics_127,x:-91.8,y:324.2}).wait(1).to({graphics:mask_1_graphics_128,x:-91.8,y:324.2}).wait(1).to({graphics:mask_1_graphics_129,x:-91.8,y:324.2}).wait(1).to({graphics:mask_1_graphics_130,x:-91.8,y:324.3}).wait(1).to({graphics:mask_1_graphics_131,x:-91.9,y:324.3}).wait(1).to({graphics:mask_1_graphics_132,x:-91.9,y:324.3}).wait(1).to({graphics:mask_1_graphics_133,x:-91.9,y:324.4}).wait(1).to({graphics:mask_1_graphics_134,x:-92,y:324.4}).wait(1).to({graphics:mask_1_graphics_135,x:-92,y:324.4}).wait(1).to({graphics:mask_1_graphics_136,x:-92,y:324.4}).wait(1).to({graphics:mask_1_graphics_137,x:-92.1,y:324.5}).wait(1).to({graphics:mask_1_graphics_138,x:-92.1,y:324.5}).wait(1).to({graphics:mask_1_graphics_139,x:-92.1,y:324.5}).wait(1).to({graphics:mask_1_graphics_140,x:-92.1,y:324.5}).wait(1).to({graphics:mask_1_graphics_141,x:-92.2,y:324.6}).wait(1).to({graphics:mask_1_graphics_142,x:-92.2,y:324.6}).wait(1).to({graphics:mask_1_graphics_143,x:-92.2,y:324.6}).wait(1).to({graphics:mask_1_graphics_144,x:-92.3,y:324.6}).wait(1).to({graphics:mask_1_graphics_145,x:-92.3,y:324.7}).wait(1).to({graphics:mask_1_graphics_146,x:-92.3,y:324.7}).wait(1).to({graphics:mask_1_graphics_147,x:-92.3,y:324.7}).wait(1).to({graphics:mask_1_graphics_148,x:-92.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_149,x:-92.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_150,x:-92.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_151,x:-92.5,y:324.8}).wait(1).to({graphics:mask_1_graphics_152,x:-92.5,y:324.9}).wait(1).to({graphics:mask_1_graphics_153,x:-92.5,y:324.9}).wait(1).to({graphics:mask_1_graphics_154,x:-92.6,y:324.9}).wait(1).to({graphics:mask_1_graphics_155,x:-92.6,y:324.9}).wait(1).to({graphics:mask_1_graphics_156,x:-92.6,y:325}).wait(1).to({graphics:mask_1_graphics_157,x:-92.6,y:325}).wait(1).to({graphics:mask_1_graphics_158,x:-92.7,y:325}).wait(1).to({graphics:mask_1_graphics_159,x:-92.7,y:325.1}).wait(1).to({graphics:mask_1_graphics_160,x:-92.7,y:325.1}).wait(1).to({graphics:mask_1_graphics_161,x:-92.8,y:325.1}).wait(1).to({graphics:mask_1_graphics_162,x:-92.8,y:325.1}).wait(1).to({graphics:mask_1_graphics_163,x:-92.8,y:325.2}).wait(1).to({graphics:mask_1_graphics_164,x:-92.8,y:325.2}).wait(1).to({graphics:mask_1_graphics_165,x:-92.9,y:325.2}).wait(1).to({graphics:mask_1_graphics_166,x:-92.9,y:325.2}).wait(1).to({graphics:mask_1_graphics_167,x:-92.9,y:325.3}).wait(1).to({graphics:mask_1_graphics_168,x:-93,y:325.3}).wait(1).to({graphics:mask_1_graphics_169,x:-93,y:325.3}).wait(1).to({graphics:mask_1_graphics_170,x:-93,y:325.4}).wait(1).to({graphics:mask_1_graphics_171,x:-93.1,y:325.4}).wait(1).to({graphics:mask_1_graphics_172,x:-93.1,y:325.4}).wait(1).to({graphics:mask_1_graphics_173,x:-93.1,y:325.4}).wait(1).to({graphics:mask_1_graphics_174,x:-93.1,y:325.5}).wait(1).to({graphics:mask_1_graphics_175,x:-93.2,y:325.5}).wait(1).to({graphics:mask_1_graphics_176,x:-93.2,y:325.5}).wait(1).to({graphics:mask_1_graphics_177,x:-57,y:307.4}).wait(1).to({graphics:mask_1_graphics_178,x:-20.8,y:289.3}).wait(1).to({graphics:mask_1_graphics_179,x:15.4,y:259.6}).wait(1).to({graphics:mask_1_graphics_180,x:51.6,y:223.4}).wait(1).to({graphics:mask_1_graphics_181,x:52.7,y:222.3}).wait(1).to({graphics:mask_1_graphics_182,x:53.7,y:221.3}).wait(1).to({graphics:mask_1_graphics_183,x:54.8,y:220.2}).wait(1).to({graphics:mask_1_graphics_184,x:52.4,y:222.6}).wait(1).to({graphics:mask_1_graphics_185,x:50,y:225}).wait(1).to({graphics:mask_1_graphics_186,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_187,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_188,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_189,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_190,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_191,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_192,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_193,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_194,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_195,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_196,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_197,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_198,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_199,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_200,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_201,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_202,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_203,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_204,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_205,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_206,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_207,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_208,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_209,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_210,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_211,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_212,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_213,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_214,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_215,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_216,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_217,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_218,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_219,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_220,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_221,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_222,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_223,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_224,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_225,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_226,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_227,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_228,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_229,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_230,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_231,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_232,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_233,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_234,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_235,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_236,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_237,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_238,x:47.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_239,x:46.4,y:228.6}).wait(1).to({graphics:mask_1_graphics_240,x:45.2,y:229.8}).wait(1).to({graphics:mask_1_graphics_241,x:102.7,y:172.3}).wait(1).to({graphics:mask_1_graphics_242,x:160.3,y:114.7}).wait(1).to({graphics:mask_1_graphics_243,x:217.8,y:57.2}).wait(1).to({graphics:mask_1_graphics_244,x:275.3,y:-0.3}).wait(1).to({graphics:mask_1_graphics_245,x:307.8,y:-57.9}).wait(1).to({graphics:mask_1_graphics_246,x:336.6,y:-115.4}).wait(1).to({graphics:null,x:0,y:0}).wait(100));

	//  Undertone - Blue
	this.instance_1 = new lib.Logo_Blue_2_mc();
	this.instance_1.setTransform(150,231.5,0.222,0.222,0,0,0,243,39);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({_off:true},171).wait(106));

	// intro - Stand
	this.instance_2 = new lib.Block_Green_Double_Long();
	this.instance_2.setTransform(499.5,-223.2,0.088,1,-45);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({x:419.5,y:-143.2},2).to({x:-96.3,y:371.8},6).wait(36).to({rotation:135,x:266.8,y:10.9},0).to({x:-11.2,y:288.8},11).to({_off:true},11).wait(212));

	// Stand
	this.instance_3 = new lib.Copy_Stand_mc();
	this.instance_3.setTransform(434.2,-260.1,2.455,2.455,-45);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({x:243.2,y:-69.1},6).to({x:-42.8,y:216.9},2).to({scaleX:2.4,rotation:-46.7,x:-68,y:232.2},2).to({scaleX:1.79,scaleY:1.79,rotation:-25.3,x:34.5,y:156.3},3).to({scaleX:1,scaleY:1,rotation:0,x:154.2,y:93},3).to({rotation:0.5,x:156.5,y:92.1},1).to({rotation:0,x:154.2,y:93},1).wait(26).to({scaleX:0.98,scaleY:0.98,x:160.7,y:88.6},2).to({scaleX:3.11,scaleY:3.11,rotation:-2.5,x:170.9,y:39.2,alpha:0.289},9).to({_off:true},7).wait(216));

	// intro - Out
	this.instance_4 = new lib.Block_Green_Double_Long();
	this.instance_4.setTransform(499.5,-223.2,0.088,1,-45);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},0).wait(2).to({x:-55.3,y:332.8},6).wait(36).to({rotation:135,x:266.8,y:10.9},0).to({x:15.8,y:261.8},11).to({_off:true},11).wait(212));

	// Out
	this.instance_5 = new lib.Copy_Out_mc();
	this.instance_5.setTransform(541.5,-152,2.455,2.455,-45);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({x:350.5,y:39},6).to({x:64.5,y:325},2).to({scaleX:2.39,rotation:-46.7,x:43.2,y:336.2},3).to({scaleX:1.79,scaleY:1.79,rotation:-25.3,x:94.6,y:241.7},3).to({scaleX:1,scaleY:1,rotation:0,x:154,y:155},3).to({rotation:0.5,x:155.7,y:154.1},1).to({rotation:0,x:154,y:155},1).wait(25).to({scaleX:0.98,scaleY:0.98,x:160.5,y:149.5},2).to({scaleX:3.11,scaleY:3.11,rotation:-2.5,x:178.5,y:233.4,alpha:0.289},9).to({_off:true},7).wait(216));

	// StandOut - Shadow
	this.instance_6 = new lib.Graphic_StandOut_Shadow_mc();
	this.instance_6.setTransform(265,4.5,2.394,2.394,-45);
	this.instance_6.alpha = 0.602;
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).wait(6).to({x:3,y:276.5,alpha:0.898},2).to({scaleX:2.51,scaleY:2.23,rotation:-42.4,x:-20.6,y:284.5},3).to({regX:-0.1,regY:0.1,scaleX:1.64,scaleY:1.62,rotation:-17.1,x:83.3,y:180.5,alpha:0.602},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:146,y:123.5,alpha:0},4).wait(28).to({scaleX:3.15,scaleY:3.23,rotation:-1.5,x:158,y:123.7,alpha:1},9).to({_off:true},7).wait(216));

	// Highlights - StandOut
	this.instance_7 = new lib.Block_Green_Highlight();
	this.instance_7.setTransform(282.6,-8.4,1.391,0.995,-44.9,0,0,48.7,0);
	this.instance_7.alpha = 0.352;
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({regY:0.1,scaleX:1.57,scaleY:0.99,x:118.8,y:155.3,alpha:0.211},8).to({regY:0,scaleX:1,scaleY:1,x:3.3,y:270.9,alpha:0},12).to({_off:true},8).wait(250));

	// Wipe - Across
	this.instance_8 = new lib.Block_Green_Double_Long();
	this.instance_8.setTransform(40.9,234.1,0.088,1,135);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(173).to({_off:false},0).wait(3).to({x:38.5,y:236.5},2).to({x:209,y:66.1},8).to({_off:true},60).wait(101));

	// Across
	this.instance_9 = new lib.Copy_Across_mc();
	this.instance_9.setTransform(90.5,72);
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(173).to({_off:false},0).wait(3).to({x:94.6},10).to({x:94.5},2).to({_off:true},58).wait(101));

	// Wipe - Across
	this.instance_10 = new lib.Block_Green_Double_Long();
	this.instance_10.setTransform(40.9,234.1,0.088,1,135);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(173).to({_off:false},0).wait(4).to({x:38.5,y:236.5},2).to({x:209,y:66.1},8).to({_off:true},59).wait(101));

	// Screens
	this.instance_11 = new lib.Copy_Screens_mc();
	this.instance_11.setTransform(107.7,109.3);
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(173).to({_off:false},0).wait(4).to({x:112.6},10).to({x:112.5},2).to({_off:true},57).wait(101));

	// Wipe - At Scale
	this.instance_12 = new lib.Block_Green_Double_Long();
	this.instance_12.setTransform(40.9,234.1,0.088,1,135);
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(173).to({_off:false},0).wait(6).to({x:38.5,y:236.5},2).to({x:209,y:66.1},8).to({_off:true},57).wait(101));

	// At Scale
	this.instance_13 = new lib.Copy_AtScale_mc();
	this.instance_13.setTransform(114.7,151.6);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(173).to({_off:false},0).wait(6).to({x:117.2},10).to({x:117.1},2).to({_off:true},55).wait(101));

	// Highlights
	this.instance_14 = new lib.Block_Green_Highlight();
	this.instance_14.setTransform(-64.8,339.2,0.998,0.998,-44.9,0,0,48.7,0);
	this.instance_14.alpha = 0.25;
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(176).to({_off:false},0).to({regX:48.8,regY:0.1,scaleX:1.58,scaleY:1,x:127.7,y:146.7,alpha:0.18},7).to({regX:48.7,scaleX:1,scaleY:1,x:248.8,y:25.7,alpha:0},8).to({_off:true},38).wait(118));

	// Wipe - Green
	this.instance_15 = new lib.Block_Green();
	this.instance_15.setTransform(389.2,-113,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(68).to({x:392.4,y:-116.2},2).to({x:102.2,y:172.8},9).to({x:106,y:169},1).wait(32).to({x:111.4,y:163.6},2).wait(1).to({x:-95.6,y:370.6},9).to({x:-90.8,y:365.8},1).wait(48).to({x:-93.2,y:368.2},3).to({x:51.5,y:223.5},4).to({x:54.5,y:220.5},3).to({x:47.6,y:227.4},3).wait(52).to({x:45.2,y:229.8},2).to({x:390.8,y:-115.8},6).to({x:388.4,y:-113.4},1).wait(100));

	// Wipe - White
	this.instance_16 = new lib.Block_White_Double();
	this.instance_16.setTransform(405.2,-129,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:405.3},67).to({x:392.5,y:-116.2},2).to({x:138.5,y:136.8},9).to({_off:true},1).wait(268));

	// intro - strugging
	this.instance_17 = new lib.Block_White_Double();
	this.instance_17.setTransform(92,117.6,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:371.2,y:-161.6},23).to({_off:true},56).wait(268));

	// Struggling
	this.instance_18 = new lib.Copy_StrugglingTo_MC();
	this.instance_18.setTransform(147.6,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:145.6},1).to({x:150.8},17).to({x:150},2).to({_off:true},59).wait(268));

	// intro - connect
	this.instance_19 = new lib.Block_White_Triple();
	this.instance_19.setTransform(92,165.6,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({x:375.2,y:-117.6},16).to({_off:true},55).wait(268));

	// MASK (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A3ar9MAu2AAAIAAX7Mgu2AAAg");
	mask_2.setTransform(150,76.6);

	// highlight - connect
	this.instance_20 = new lib.Block_White_Highlight();
	this.instance_20.setTransform(-72,323.2,0.998,0.998,-44.9,0,0,-1.2,-0.1);
	this.instance_20.alpha = 0.5;

	this.instance_20.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:323.1},20).to({x:276,y:-24.9},42).to({_off:true},17).wait(268));

	// Connect
	this.instance_21 = new lib.Copy_Connect_MC();
	this.instance_21.setTransform(149.6,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(21).to({_off:true},58).wait(268));

	// intro - consumers
	this.instance_22 = new lib.Block_White_Double();
	this.instance_22.setTransform(100,213.6,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({x:379.2,y:-65.6},12).to({_off:true},53).wait(268));

	// Consumers
	this.instance_23 = new lib.Copy_WithConsumers_MC();
	this.instance_23.setTransform(147.6,172.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(21).to({_off:true},58).wait(268));

	// 3- Undertone
	this.instance_24 = new lib.Logo_White_mc();
	this.instance_24.setTransform(150,231.5,0.222,0.222,0,0,0,243,39);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(112).to({_off:false},0).wait(235));

	// 3 - Stunning - MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_124 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_125 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMIigCgIAAAAMgsMAsKg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_128 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_130 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIAAAAIigCgg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_137 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_138 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMAsKgsMMAsMAsMIigCgMgsMAsKg");
	var mask_3_graphics_139 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_140 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_141 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_142 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_143 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHIXW3WIXU3WMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_145 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_146 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_147 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_159 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_160 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_161 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_162 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_163 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_165 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_166 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_167 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_168 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_169 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_170 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_171 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_173 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_174 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_175 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMAsKgsMMAsMAsMIigCgMgsMAsKg");
	var mask_3_graphics_176 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMIigCgIAAAAMgsMAsKg");
	var mask_3_graphics_177 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_178 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMIAAAAICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_179 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHICgigIAAAAMApqgpsICgigMAsMAsMMgsMAsKIigCgg");
	var mask_3_graphics_180 = new cjs.Graphics().p("EgvzADoICYiYMAsMAsMIiYCYgEgrCgBHMAsKgsMICgigMAsMAsMMgsMAsKIigCgg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_3_graphics_124,x:403.8,y:-129.6}).wait(1).to({graphics:mask_3_graphics_125,x:403.8,y:-129.6}).wait(1).to({graphics:mask_3_graphics_126,x:403.8,y:-129.6}).wait(1).to({graphics:mask_3_graphics_127,x:391.8,y:-117.6}).wait(1).to({graphics:mask_3_graphics_128,x:379.9,y:-105.7}).wait(1).to({graphics:mask_3_graphics_129,x:367.9,y:-93.7}).wait(1).to({graphics:mask_3_graphics_130,x:355.9,y:-81.7}).wait(1).to({graphics:mask_3_graphics_131,x:344,y:-69.8}).wait(1).to({graphics:mask_3_graphics_132,x:332,y:-57.8}).wait(1).to({graphics:mask_3_graphics_133,x:320,y:-45.8}).wait(1).to({graphics:mask_3_graphics_134,x:308.1,y:-33.9}).wait(1).to({graphics:mask_3_graphics_135,x:296.1,y:-21.9}).wait(1).to({graphics:mask_3_graphics_136,x:284.1,y:-9.9}).wait(1).to({graphics:mask_3_graphics_137,x:272.2,y:2}).wait(1).to({graphics:mask_3_graphics_138,x:260.2,y:14}).wait(1).to({graphics:mask_3_graphics_139,x:248.2,y:26}).wait(1).to({graphics:mask_3_graphics_140,x:236.2,y:38}).wait(1).to({graphics:mask_3_graphics_141,x:224.3,y:49.9}).wait(1).to({graphics:mask_3_graphics_142,x:212.3,y:61.9}).wait(1).to({graphics:mask_3_graphics_143,x:200.3,y:73.9}).wait(1).to({graphics:mask_3_graphics_144,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_145,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_146,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_147,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_148,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_149,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_150,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_151,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_152,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_153,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_154,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_155,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_156,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_157,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_158,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_159,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_160,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_161,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_162,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_163,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_164,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_165,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_166,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_167,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_168,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_169,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_170,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_171,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_172,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_173,x:188.4,y:85.8}).wait(1).to({graphics:mask_3_graphics_174,x:219.8,y:54.4}).wait(1).to({graphics:mask_3_graphics_175,x:251.2,y:23}).wait(1).to({graphics:mask_3_graphics_176,x:282.7,y:-8.5}).wait(1).to({graphics:mask_3_graphics_177,x:314.1,y:-39.9}).wait(1).to({graphics:mask_3_graphics_178,x:345.5,y:-71.3}).wait(1).to({graphics:mask_3_graphics_179,x:376.9,y:-102.7}).wait(1).to({graphics:mask_3_graphics_180,x:408.4,y:-134.2}).wait(6).to({graphics:null,x:0,y:0}).wait(161));

	// 3- Stunning
	this.instance_25 = new lib.Copy_Stunning_mc();
	this.instance_25.setTransform(153.3,66.2);
	this.instance_25._off = true;

	this.instance_25.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(124).to({_off:false},0).wait(1).to({x:149.5},16).wait(2).to({_off:true},43).wait(161));

	// 3 - Stunning 2 - MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_124 = new cjs.Graphics().p("EgkrAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_4_graphics_125 = new cjs.Graphics().p("EgliAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_4_graphics_126 = new cjs.Graphics().p("EgmZAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_127 = new cjs.Graphics().p("EgnQAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_128 = new cjs.Graphics().p("EgoHAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_129 = new cjs.Graphics().p("Ego9AAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_130 = new cjs.Graphics().p("Egp0AAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_131 = new cjs.Graphics().p("EgqrAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_132 = new cjs.Graphics().p("EgriAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_4_graphics_133 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_134 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_135 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_136 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_137 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_138 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_139 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_140 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_141 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_142 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_143 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_144 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_145 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_146 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_147 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_148 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_149 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_150 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_151 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_152 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_153 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_154 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_155 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_156 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_157 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_158 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_159 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_160 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_161 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_162 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_163 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_164 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_165 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_166 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_167 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_168 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_169 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_170 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_171 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_172 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_173 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_174 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_175 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_176 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_177 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_4_graphics_178 = new cjs.Graphics().p("EgsJAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_4_graphics_179 = new cjs.Graphics().p("EgpfAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_4_graphics_180 = new cjs.Graphics().p("Egm1AAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_4_graphics_181 = new cjs.Graphics().p("EgkLAAAMAsKgsLMAsNAsLMgsNAsMg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_4_graphics_124,x:330.8,y:-104.6}).wait(1).to({graphics:mask_4_graphics_125,x:325.3,y:-93.6}).wait(1).to({graphics:mask_4_graphics_126,x:319.8,y:-82.6}).wait(1).to({graphics:mask_4_graphics_127,x:314.3,y:-71.7}).wait(1).to({graphics:mask_4_graphics_128,x:308.9,y:-60.7}).wait(1).to({graphics:mask_4_graphics_129,x:303.4,y:-49.7}).wait(1).to({graphics:mask_4_graphics_130,x:297.9,y:-38.7}).wait(1).to({graphics:mask_4_graphics_131,x:292.4,y:-27.8}).wait(1).to({graphics:mask_4_graphics_132,x:286.9,y:-16.8}).wait(1).to({graphics:mask_4_graphics_133,x:280,y:-5.8}).wait(1).to({graphics:mask_4_graphics_134,x:269,y:5.2}).wait(1).to({graphics:mask_4_graphics_135,x:258,y:16.2}).wait(1).to({graphics:mask_4_graphics_136,x:247.1,y:27.1}).wait(1).to({graphics:mask_4_graphics_137,x:236.1,y:38.1}).wait(1).to({graphics:mask_4_graphics_138,x:225.1,y:49.1}).wait(1).to({graphics:mask_4_graphics_139,x:214.1,y:60.1}).wait(1).to({graphics:mask_4_graphics_140,x:203.2,y:71}).wait(1).to({graphics:mask_4_graphics_141,x:192.2,y:82}).wait(1).to({graphics:mask_4_graphics_142,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_143,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_144,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_145,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_146,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_147,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_148,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_149,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_150,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_151,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_152,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_153,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_154,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_155,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_156,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_157,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_158,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_159,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_160,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_161,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_162,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_163,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_164,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_165,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_166,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_167,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_168,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_169,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_170,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_171,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_172,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_173,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_174,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_175,x:181.2,y:93}).wait(1).to({graphics:mask_4_graphics_176,x:215.2,y:59}).wait(1).to({graphics:mask_4_graphics_177,x:249.2,y:25}).wait(1).to({graphics:mask_4_graphics_178,x:283,y:-9}).wait(1).to({graphics:mask_4_graphics_179,x:300,y:-43}).wait(1).to({graphics:mask_4_graphics_180,x:317,y:-77}).wait(1).to({graphics:mask_4_graphics_181,x:334,y:-111}).wait(5).to({graphics:null,x:0,y:0}).wait(161));

	// 3- Stunning 2
	this.instance_26 = new lib.Copy_Stunning_mc();
	this.instance_26.setTransform(153.5,66.2);
	this.instance_26.alpha = 0.5;
	this.instance_26._off = true;

	this.instance_26.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(124).to({_off:false},0).wait(1).to({x:149.5},16).wait(2).to({_off:true},43).wait(161));

	// 3 - Creative - MASK (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_124 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_125 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_126 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_127 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_128 = new cjs.Graphics().p("EgmkAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_129 = new cjs.Graphics().p("EgnXAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_130 = new cjs.Graphics().p("EgoKAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ego9AAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_132 = new cjs.Graphics().p("EgpwAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_133 = new cjs.Graphics().p("EgqjAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_134 = new cjs.Graphics().p("EgrWAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_135 = new cjs.Graphics().p("EgsJAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_136 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_137 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_138 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_139 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_140 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_141 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_142 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_143 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_144 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_145 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_146 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_147 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_148 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_149 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_150 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_151 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_152 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_153 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_154 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_155 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_156 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_157 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_158 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_159 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_160 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_161 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_162 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_163 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_164 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_165 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_166 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_167 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_168 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_169 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_170 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_171 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_172 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_173 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_174 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_175 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_176 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_177 = new cjs.Graphics().p("EgrAAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_178 = new cjs.Graphics().p("EgouAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_179 = new cjs.Graphics().p("EgmdAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_5_graphics_180 = new cjs.Graphics().p("EgkLAAAMAsKgsLMAsNAsLMgsNAsMg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_5_graphics_124,x:323.8,y:-90.5}).wait(1).to({graphics:mask_5_graphics_125,x:323.8,y:-90.5}).wait(1).to({graphics:mask_5_graphics_126,x:323.8,y:-90.5}).wait(1).to({graphics:mask_5_graphics_127,x:323.8,y:-90.5}).wait(1).to({graphics:mask_5_graphics_128,x:318.7,y:-80.3}).wait(1).to({graphics:mask_5_graphics_129,x:313.6,y:-70.1}).wait(1).to({graphics:mask_5_graphics_130,x:308.5,y:-59.9}).wait(1).to({graphics:mask_5_graphics_131,x:303.4,y:-49.7}).wait(1).to({graphics:mask_5_graphics_132,x:298.3,y:-39.5}).wait(1).to({graphics:mask_5_graphics_133,x:293.2,y:-29.3}).wait(1).to({graphics:mask_5_graphics_134,x:288.1,y:-19.1}).wait(1).to({graphics:mask_5_graphics_135,x:283,y:-8.9}).wait(1).to({graphics:mask_5_graphics_136,x:273,y:1.3}).wait(1).to({graphics:mask_5_graphics_137,x:262.8,y:11.4}).wait(1).to({graphics:mask_5_graphics_138,x:252.6,y:21.6}).wait(1).to({graphics:mask_5_graphics_139,x:242.4,y:31.8}).wait(1).to({graphics:mask_5_graphics_140,x:232.2,y:42}).wait(1).to({graphics:mask_5_graphics_141,x:222,y:52.2}).wait(1).to({graphics:mask_5_graphics_142,x:211.8,y:62.4}).wait(1).to({graphics:mask_5_graphics_143,x:201.6,y:72.6}).wait(1).to({graphics:mask_5_graphics_144,x:191.4,y:82.8}).wait(1).to({graphics:mask_5_graphics_145,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_146,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_147,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_148,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_149,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_150,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_151,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_152,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_153,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_154,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_155,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_156,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_157,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_158,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_159,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_160,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_161,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_162,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_163,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_164,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_165,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_166,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_167,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_168,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_169,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_170,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_171,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_172,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_173,x:181.2,y:93}).wait(1).to({graphics:mask_5_graphics_174,x:210.3,y:63.9}).wait(1).to({graphics:mask_5_graphics_175,x:239.5,y:34.7}).wait(1).to({graphics:mask_5_graphics_176,x:268.6,y:5.6}).wait(1).to({graphics:mask_5_graphics_177,x:290.3,y:-23.6}).wait(1).to({graphics:mask_5_graphics_178,x:304.9,y:-52.7}).wait(1).to({graphics:mask_5_graphics_179,x:319.4,y:-81.9}).wait(1).to({graphics:mask_5_graphics_180,x:334,y:-111}).wait(6).to({graphics:null,x:0,y:0}).wait(161));

	// 3- Creative
	this.instance_27 = new lib.Copy_Creative_mc();
	this.instance_27.setTransform(153.2,98.7);
	this.instance_27._off = true;

	this.instance_27.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(124).to({_off:false},0).wait(2).to({x:149.5},16).wait(2).to({_off:true},42).wait(161));

	// 3 - Creative2 - MASK (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_124 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_125 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_126 = new cjs.Graphics().p("EglxAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_127 = new cjs.Graphics().p("EgmkAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_128 = new cjs.Graphics().p("EgnXAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_129 = new cjs.Graphics().p("EgoKAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_130 = new cjs.Graphics().p("Ego9AAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_131 = new cjs.Graphics().p("EgpwAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_132 = new cjs.Graphics().p("EgqjAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_133 = new cjs.Graphics().p("EgrWAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_134 = new cjs.Graphics().p("EgsJAAAMAsKgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_135 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_136 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_137 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_138 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_139 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_140 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_141 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_142 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_143 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_144 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_145 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_146 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_147 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_148 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_149 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_150 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_151 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_152 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_153 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_154 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_155 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_156 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_157 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_158 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_159 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_160 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_161 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_162 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_163 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_164 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_165 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_166 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_167 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_168 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_169 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_170 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_171 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_172 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_173 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_174 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_175 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_176 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_177 = new cjs.Graphics().p("EgsLAAAMAsLgsLMAsMAsLMgsMAsMg");
	var mask_6_graphics_178 = new cjs.Graphics().p("EgsJAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_6_graphics_179 = new cjs.Graphics().p("EgpfAAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_6_graphics_180 = new cjs.Graphics().p("Egm1AAAMAsKgsLMAsNAsLMgsNAsMg");
	var mask_6_graphics_181 = new cjs.Graphics().p("EgkLAAAMAsKgsLMAsNAsLMgsNAsMg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_6_graphics_124,x:323.8,y:-90.5}).wait(1).to({graphics:mask_6_graphics_125,x:323.8,y:-90.5}).wait(1).to({graphics:mask_6_graphics_126,x:323.8,y:-90.5}).wait(1).to({graphics:mask_6_graphics_127,x:318.7,y:-80.3}).wait(1).to({graphics:mask_6_graphics_128,x:313.6,y:-70.1}).wait(1).to({graphics:mask_6_graphics_129,x:308.5,y:-59.9}).wait(1).to({graphics:mask_6_graphics_130,x:303.4,y:-49.7}).wait(1).to({graphics:mask_6_graphics_131,x:298.3,y:-39.5}).wait(1).to({graphics:mask_6_graphics_132,x:293.2,y:-29.3}).wait(1).to({graphics:mask_6_graphics_133,x:288.1,y:-19.1}).wait(1).to({graphics:mask_6_graphics_134,x:283,y:-8.9}).wait(1).to({graphics:mask_6_graphics_135,x:273,y:1.3}).wait(1).to({graphics:mask_6_graphics_136,x:262.8,y:11.4}).wait(1).to({graphics:mask_6_graphics_137,x:252.6,y:21.6}).wait(1).to({graphics:mask_6_graphics_138,x:242.4,y:31.8}).wait(1).to({graphics:mask_6_graphics_139,x:232.2,y:42}).wait(1).to({graphics:mask_6_graphics_140,x:222,y:52.2}).wait(1).to({graphics:mask_6_graphics_141,x:211.8,y:62.4}).wait(1).to({graphics:mask_6_graphics_142,x:201.6,y:72.6}).wait(1).to({graphics:mask_6_graphics_143,x:191.4,y:82.8}).wait(1).to({graphics:mask_6_graphics_144,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_145,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_146,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_147,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_148,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_149,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_150,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_151,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_152,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_153,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_154,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_155,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_156,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_157,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_158,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_159,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_160,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_161,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_162,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_163,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_164,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_165,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_166,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_167,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_168,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_169,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_170,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_171,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_172,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_173,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_174,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_175,x:181.2,y:93}).wait(1).to({graphics:mask_6_graphics_176,x:215.2,y:59}).wait(1).to({graphics:mask_6_graphics_177,x:249.2,y:25}).wait(1).to({graphics:mask_6_graphics_178,x:283,y:-9}).wait(1).to({graphics:mask_6_graphics_179,x:300,y:-43}).wait(1).to({graphics:mask_6_graphics_180,x:317,y:-77}).wait(1).to({graphics:mask_6_graphics_181,x:334,y:-111}).wait(5).to({graphics:null,x:0,y:0}).wait(161));

	// 3- Creative 2
	this.instance_28 = new lib.Copy_Creative_mc();
	this.instance_28.setTransform(152.7,98.7);
	this.instance_28.alpha = 0.5;
	this.instance_28._off = true;

	this.instance_28.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(124).to({_off:false},0).wait(2).to({x:149.5},16).wait(2).to({_off:true},42).wait(161));

	// Car - Mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_116 = new cjs.Graphics().p("A/PnuMA+fAAAIAAWnMg+fAAAg");
	var mask_7_graphics_117 = new cjs.Graphics().p("A/PnuMA+fAAAIAAWnMg+fAAAg");
	var mask_7_graphics_118 = new cjs.Graphics().p("A/PnuMA+fAAAIAAWnMg+fAAAg");
	var mask_7_graphics_119 = new cjs.Graphics().p("A/PnuMA+fAAAIAAWmMg+fAAAg");
	var mask_7_graphics_120 = new cjs.Graphics().p("A/PnvMA+fAAAIAAWmMg+fAAAg");
	var mask_7_graphics_121 = new cjs.Graphics().p("A/PnvMA+fAAAIAAWmMg+fAAAg");
	var mask_7_graphics_122 = new cjs.Graphics().p("A/KpDMA+eAAYIgJX9Mg+egAYg");
	var mask_7_graphics_123 = new cjs.Graphics().p("A/FqWMA+eAAwIgTZTMg+egAwg");
	var mask_7_graphics_124 = new cjs.Graphics().p("A+/rpMA+dABHIgeapMg+dgBHg");
	var mask_7_graphics_125 = new cjs.Graphics().p("A+5s8MA+dABfIgqb/Mg+dgBfg");
	var mask_7_graphics_126 = new cjs.Graphics().p("A+yuPMA+dAB3Ig4dVMg+dgB3g");
	var mask_7_graphics_127 = new cjs.Graphics().p("A+txbMA+cAB4MgBBAiAMg+cgB4g");
	var mask_7_graphics_128 = new cjs.Graphics().p("A+o0RMA+cAB5MgBLAmqMg+cgB5g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(116).to({graphics:mask_7_graphics_116,x:80.2,y:95.3}).wait(1).to({graphics:mask_7_graphics_117,x:77.2,y:95.3}).wait(1).to({graphics:mask_7_graphics_118,x:74.2,y:95.3}).wait(1).to({graphics:mask_7_graphics_119,x:74.4,y:95.2}).wait(1).to({graphics:mask_7_graphics_120,x:74.5,y:95.2}).wait(1).to({graphics:mask_7_graphics_121,x:74.7,y:95.1}).wait(1).to({graphics:mask_7_graphics_122,x:74.6,y:97.8}).wait(1).to({graphics:mask_7_graphics_123,x:74.5,y:100.5}).wait(1).to({graphics:mask_7_graphics_124,x:74.3,y:103.2}).wait(1).to({graphics:mask_7_graphics_125,x:74.2,y:105.9}).wait(1).to({graphics:mask_7_graphics_126,x:74.1,y:108.6}).wait(1).to({graphics:mask_7_graphics_127,x:74.3,y:118.2}).wait(1).to({graphics:mask_7_graphics_128,x:74.4,y:125.7}).wait(58).to({graphics:null,x:0,y:0}).wait(161));

	// Car
	this.instance_29 = new lib.Graphic_Car_mc();
	this.instance_29.setTransform(310.6,125.5,0.838,0.838,-20.5);
	this.instance_29._off = true;

	this.instance_29.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(116).to({_off:false},0).wait(8).to({scaleX:0.86,scaleY:0.86,x:260.2,y:131},6).to({scaleX:0.84,scaleY:0.95,rotation:-21.7,x:225.3},4).to({scaleX:0.88,scaleY:0.88,rotation:-20.5,x:228.3},1).to({scaleX:1.23,scaleY:1.23,rotation:2.7,x:203.1,y:187},43).to({scaleX:1.14,scaleY:1.14,rotation:-0.3,x:219.7,y:172.5},2).to({_off:true},1).wait(166));

	// Shadow
	this.instance_30 = new lib.Graphic_Stunning_Shadow_mc();
	this.instance_30.setTransform(149.1,83.2,0.894,0.666);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(116).to({_off:false},0).wait(14).to({alpha:0.602},9).wait(39).to({alpha:0},7).to({_off:true},8).wait(154));

	// Phone - Right
	this.instance_31 = new lib.Graphic_Phone_Right_mc();
	this.instance_31.setTransform(256.9,118.5,1.037,1.037);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(76).to({_off:false},0).to({x:252.1},5).to({rotation:-1,x:251.4,y:107.5},31).to({rotation:-1.5,x:253.1,y:106.6},2).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:0.5,x:249.8,y:118.5},4).to({scaleX:1.04,scaleY:1.03,rotation:1.3,x:248.5,y:120.3},3).to({scaleX:0.97,scaleY:0.97,rotation:5.2,x:242.5,y:127.1,alpha:0.969},56).to({scaleX:1.21,scaleY:1.19,rotation:4.8,x:235.4,y:133.3,alpha:1},4).to({scaleX:1.25,scaleY:1.22,rotation:3.3,x:235.1,y:131.6},3).to({scaleX:1.32,scaleY:1.25,rotation:0,x:229.9,y:128.5},56).to({_off:true},1).wait(105));

	// Chip - Right
	this.instance_32 = new lib.Graphic_Chip_Right_mc();
	this.instance_32.setTransform(242.5,121,0.32,0.32,-20);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(122).to({_off:false},0).to({scaleX:0.42,scaleY:0.42,rotation:-5.2,x:139.3,y:126.7},3).to({scaleX:0.84,scaleY:0.84,rotation:0,x:109.3,y:132.3},3).to({scaleX:1.36,scaleY:1.36,rotation:7.6,x:134.1,y:126.5},19).to({scaleX:1.76,scaleY:1.76,rotation:13.8,x:153.2,y:122.1},26).to({scaleX:1.83,scaleY:1.83,rotation:15.1,x:156.6,y:121.4},5).to({scaleX:1.89,scaleY:1.89,rotation:16.2,x:157.9,y:83.7},3).to({_off:true},25).wait(141));

	// Chip - Left
	this.instance_33 = new lib.Graphic_Chip_Left_mc();
	this.instance_33.setTransform(244,111,0.274,0.309,-19.7);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(122).to({_off:false},0).to({scaleX:0.32,scaleY:0.32,rotation:-5.2,x:118.2,y:134.3},5).to({scaleX:0.6,scaleY:0.6,rotation:4,x:74.5,y:143.7},3).to({scaleX:0.75,scaleY:0.75,rotation:-1,x:79.7,y:151.7},11).to({scaleX:1.09,scaleY:1.09,rotation:-13,x:91.8,y:170.6},35).to({scaleX:1.15,scaleY:1.15,rotation:-14.8,x:100.3,y:154.5},5).to({scaleX:1.25,scaleY:1.25,rotation:-18.4,x:97.1,y:178.8},9).to({_off:true},16).wait(141));

	// Phone - Left
	this.instance_34 = new lib.Graphic_Phone_Left_mc();
	this.instance_34.setTransform(231.8,104.1,0.461,0.461,-19.2,0,0,0.1,-0.1);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(122).to({_off:false},0).to({regX:0,regY:0,scaleX:0.94,scaleY:0.94,rotation:-5.7,x:113,y:111.5},4).to({scaleX:1.01,scaleY:1.05,rotation:-1,x:61.5,y:117.7},3).to({scaleX:1.02,scaleY:1.05,rotation:0,x:51.6,y:118.5},2).to({scaleX:1.06,scaleY:1.06,x:52.9,y:118.6},1).to({scaleX:0.98,scaleY:0.98,rotation:5.2,x:57.1,y:110.1,alpha:0.969},46).to({scaleX:1.07,scaleY:1.07,rotation:0,x:48.2,y:118.5,alpha:1},3).to({_off:true},25).wait(141));

	// wipe - undertone
	this.instance_35 = new lib.Block_White_Triple();
	this.instance_35.setTransform(156.4,53.2,1,1,-45);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(242).to({_off:false},0).to({x:371.2,y:-161.5},16).wait(89));

	// Undertone
	this.instance_36 = new lib.Logo_Mixed_mc();
	this.instance_36.setTransform(149.1,53.9,0.407,0.407,0,0,0,243.2,39);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(242).to({_off:false},0).wait(105));

	// wipe - digital brand
	this.instance_37 = new lib.Block_White_Double();
	this.instance_37.setTransform(92,117.6,1,1,-45);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(242).to({_off:false},0).wait(8).to({x:371.2,y:-161.6},19).wait(78));

	// Digital Brand
	this.instance_38 = new lib.Copy_DigitalBrand_mc();
	this.instance_38.setTransform(150.5,101.9);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(242).to({_off:false},0).wait(105));

	// wipe - advertising
	this.instance_39 = new lib.Block_White_Double();
	this.instance_39.setTransform(92,117.6,1,1,-45);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(242).to({_off:false},0).wait(10).to({x:371.2,y:-161.6},19).wait(76));

	// Advertising
	this.instance_40 = new lib.Copy_Advertising_mc();
	this.instance_40.setTransform(151.7,128.4);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(242).to({_off:false},0).wait(105));

	// exit - that gets attention
	this.instance_41 = new lib.Block_White_Triple();
	this.instance_41.setTransform(-156.8,366.4,1,1,135);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(317).to({_off:false},0).to({x:107.3,y:102.4},23).wait(7));

	// intro - that gets
	this.instance_42 = new lib.Block_White_Double();
	this.instance_42.setTransform(92,117.6,1,1,-45);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(242).to({_off:false},0).wait(15).to({x:371.2,y:-161.6},19).wait(71));

	// That Gets
	this.instance_43 = new lib.Copy_ThatGets_mc();
	this.instance_43.setTransform(150.5,171.3);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(242).to({_off:false},0).wait(105));

	// intro - attention
	this.instance_44 = new lib.Block_White_Triple();
	this.instance_44.setTransform(92,117.6,1,1,-45);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(242).to({_off:false},0).wait(23).to({x:371.2,y:-161.6},19).wait(63));

	// highlight - attention
	this.instance_45 = new lib.Block_White_Highlight();
	this.instance_45.setTransform(-72.1,445.6,0.998,0.998,-44.9,0,0,-1.3,-0.1);
	this.instance_45.alpha = 0.328;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(242).to({_off:false},0).wait(14).to({x:275.9,y:97.6},36).wait(55));

	// Attention
	this.instance_46 = new lib.Copy_Attention_mc();
	this.instance_46.setTransform(152.3,201);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(242).to({_off:false},0).wait(105));

	// 3 - Back
	this.instance_47 = new lib.Block_Blue();
	this.instance_47.setTransform(150,125,0.75,0.625);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(79).to({_off:false},0).to({_off:true},163).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-302.3,910.8,940.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
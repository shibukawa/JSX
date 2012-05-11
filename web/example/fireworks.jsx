import "js/dom.jsx";
import "js/dom/canvas2d.jsx";

class Config {
	static var quantity = 360;
	static var size     = 2.0;
	static var decay    = 0.98;
	static var gravity  = 2.0;
	static var speed    = 6.0;
}


class Spark {
	static const rad = Math.PI * 2;

	var posX : number;
	var posY : number;
	var velX : number;
	var velY : number;
	var size : number;
	var color : string;
	var state = 0;

	function constructor(posX : number, posY : number, size : number, color : string) {
		this.posX = posX;
		this.posY = posY;
		this.size = size;
		this.color = color;

		var angle    = Math.random() * Spark.rad;
		var velocity = Math.random() * Config.speed;

		this.velX = Math.cos(angle) * velocity;
		this.velY = Math.sin(angle) * velocity;

	}

	function _decay() : void {
		this.velX *= Config.decay;
		this.velY *= Config.decay;
		this.size *= Config.decay;

		if(this.size < 0.5 && this.state == 0) {
			this.color = Firework.randomColor();
			this.size = Config.size;
			this.state++;
		}
	}

	function _move() : void {
		this.posX += this.velX + (Math.random() - 0.5);
		this.posY += this.velY + (Math.random() - 0.5) + Config.gravity;
	}

	function _render(view : FireworkView) : void {
		view.cx.beginPath();
		view.cx.arc(this.posX, this.posY, this.size, 0, Spark.rad, true);
		view.cx.fillStyle = Math.random() > 0.2 ? this.color : "white";
		view.cx.fill();
	}

	function _isLiving(view : FireworkView) : boolean {
		if(this.size <= 0.01) return false;
		if(this.posX <= 0) return false;
		if(this.posX >= view.width || this.posY >= view.height) return false;
		return true;
	}

	function draw(view : FireworkView) : boolean {
		this._decay();
		this._move();
		this._render(view);

		return this._isLiving(view);
	}
}

class Firework {
	var sparks = [] : Spark[];
	var view : FireworkView;

	static function randomColor() : string {
		var blightness = 60;

		var rgb = [] : int[];
		for (var i = 0; i < 3; ++i) {
			rgb[i] = Math.min( (Math.random() * 0xFF + blightness) as int, 255 );
		}
		return "rgb(" +
			rgb[0] as string + "," +
			rgb[1] as string + "," +
			rgb[2] as string + ")";
	}

	function constructor(view : FireworkView, x : int, y : int) {
		this.view = view;

		var color = "lime";
		for (var i = 0; i < Config.quantity; ++i) {
			this.sparks.push(new Spark(x, y, Config.size, color));
		}
	}

	function update() : boolean {
		for(var i = 0; i < this.sparks.length; ++i) {
			var s = this.sparks[i];
			if (! s.draw(this.view)) {
				this.sparks.splice(i, 1);
			}
		}
		return this.sparks.length > 0;
	}
}

class FireworkView {
	var cx : CanvasRenderingContext2D;
	var width : int;
	var height : int;
	var left : int;
	var top : int;

	var fireworks = [] : Firework[];

	var numSparks = 0;

	function constructor(canvas : HTMLCanvasElement) {
		this.cx = canvas.getContext("2d") as CanvasRenderingContext2D;

		this.width  = canvas.width;
		this.height = canvas.height;

		var rect = canvas.getBoundingClientRect();
		this.left = rect.left;
		this.top  = rect.top;
		canvas.addEventListener("mousedown", function (e : MouseEvent) : void {
			this.explode(e.clientX, e.clientY);
		});
		canvas.addEventListener("touchstart", function (e : TouchEvent) : void {
			this.explode(e.touches[0].pageX, e.touches[0].pageY);
		});

		// initial one
		this.explode(this.width / 2 + this.left, this.height / 3);
	}

	function explode(x : int, y : int) : void {
		this.fireworks.push(new Firework(this, x - this.left, y - this.top));
	}

	function update() : void {
		if (this.fireworks.length == 0) return;

		this.numSparks = 0;

		for (var i = 0; i < this.fireworks.length; ++i) {
			var fw = this.fireworks[i];

			if(fw.update()) {
				this.numSparks += fw.sparks.length;
			}
			else {
				this.fireworks.splice(i, 1);
			}
		}

		this.cx.fillStyle = "rgba(0, 0, 0, 0.3)";
		this.cx.fillRect(0, 0, this.width, this.height);
	}

}

class FPSWatcher {
	var elementId : string;
	var start = Date.now();
	var fps = 0;

	function constructor(elementId : string) {
		this.elementId = elementId;
	}

	function update(numSparks : int) : void {
		++this.fps;

		if((Date.now() - this.start) >= 1000) {
			var message = "FPS: " + this.fps as string +
				" (sparks: " + numSparks as string + ")";
			dom.id(this.elementId).innerHTML = message;
			if(numSparks > 0) log message;

			this.start = Date.now();
			this.fps = 0;
		}
	}
}

class Application {
	static function main(canvasId : string, fpsId : string, quantity : int) : void {
		Config.quantity = quantity;

		var canvas = dom.id(canvasId) as HTMLCanvasElement;

		var view = new FireworkView(canvas);
		var watcher = new FPSWatcher(fpsId);

		dom.getWindow().setInterval( function() : void {
			view.update();
			watcher.update(view.numSparks);
		}, 0);
	}
}

class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
        display(color, border)  
   
    
            var pos = this.body.position;
            var angle = this.angle;
            push();
            if (this.body.speed < 3) {
                rectMode(CENTER);
                translate(pos.x, pos.y);
                rotate(angle);
                fill("pink");
                stroke(5);
                strokeWeight(4);
                rect(0, 0, this.width, this.height);
                pop();
            } else {
                push();
                World.remove(world, this.body);
                this.visibility = this.visibility - 1;
                tint(255, this.visibility);
                pop();
            }
        }
    }
    
    
      

    
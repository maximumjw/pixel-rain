const myImage=new Image();
myImage.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBAQEBAPEBAPFRUPFRUPDw8PDw8QFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8QFy0dHR0rLS0tLS0vKy0rLS0tLSstLSstLSsuKy0tLSstLSstLSstKy0tKysrLSstLSstLS0tLf/AABEIALYBFAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA4EAACAQIFAgMGBAYBBQAAAAAAAQIDEQQFEiExQVEGYXETIjKBkaEHUrHRI0JicoLhFDNDosHC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIBEBAQEBAAICAgMAAAAAAAAAAAECERIhAzFBURNhkf/aAAwDAQACEQMRAD8A8PAAAAALAAAMBAOwABKKFYsigIT5I6iyaK7ANTJ6ioEwLbjTK9Q0ynFlxqRWA6LlIkmY9xqQ6i5xINAqhYrNAUuPYgWtCauFVANoCAAAABAAAIYAIYgABgAEQAAGAhgAAADABpAOKJpCiiRUEkVNFzI0oapWJViNOi2ZlLL2+jNrgsGttje4LLr9DO6bZ+PrlY5Q+wnlb7M7+llfkWvJ0+hx5tP4nnayx9hSy59j0OWT+RhYnKvIeZ/E88r4VoxmmjsMdlr32NBi8LboaZ0y1jjWl1GViucLDidsmS0VkoSHJdSohKN/UpL0RqR6gVAOwiKAGIAAAAQAAAAAAgAAAYhgAAADJxRGKLSgBCCUrIIjVl0M/KqXU1iN/lEODjTvH23mX0eDrMtw6aRz2Chax1eVLgxr1YbXD4FWWxlxy9F+EjsjMSOeNGqq5en0MPEZZ5HSKmRqURIOAzHK+djjc2wNr7HrmY4bZ7HC57hedjqenGp15vi6FjDN7mNG1zR1VZm2a8uocWXRkY5ZGR2zWSQIaYNFFM4/cgy9q+xS0RSEMRAAAAAAACAAAQAAAMQwAEgJQ5AmkFxuJEqGVzdyUmQZFOmtzpMojujncOveRu8HiXF2itT+yOdO8O6wGGvY6LAULWPOsPm2Ljuotr5W/Q2FDxfWg7Tjb+6NvvsZXLebkep4Z8GfFnBZH4uhUemXut8b7M63C41S4ZxfTae23ptFiijFjLY1Wb+IIUE/5pW+FcllSxs8bS2OMz3Crc1eY+PasrxjCUW+LRbZpq+NxtW7/ipPvFF8XF1GpzmjZs5XFLc6PMqtVXVSN13XJz+LNMsNsaLJplRJM0ZL4ssTMdMtjIqJsrrR6lgmBjgEl0ERQAAACYxAAAACAAAYAAASgRGgL2QZOLFJFRW0QZY0QkRV+Ap3lc2uGqaG3bkxMpjubx5e2rrqZ6rXEKnnso7Rjx9TY0cZ7aMr06i0uMZOMKc3HXNxi3DWnZuy2NXgsG4yeunri+100jqskowjNVHByaalaUY+/KLvFya5ae687HN8Wk8/w0VSnp3tFpO2qKatL8soveD8mdL4VzWUpKLfGxXm+G1ylVd02mmlGCUk+ku6NfkFPTXj04OL7aTsr15w/havI5HN4JXlJXb4Vrs7OCvSgjSZtg9UWldd2lFtr8u/CZxxr15hmOazg24xSSdvdhq7tq90r2TFPxBOFozjUg2tXvwWhxu1dTjJ9Vbjm50GOy16FT0uyd1eMdtmvo02jWSyrTHTGDfuezSa92EW7yUVd8s0nix1N99NXjcxVWLvucnj4WOoeUSpq747dvQ0eJw0pyaiuOX0R1ms/klrS2EbiOTSW87teWxiZjQjG2lW8uprLKyuLJ1iJk0ypEkyuGRGRIoiyyMioVZdSoyHuY7QqmJgBAgGACAAAQAADAAABgAFtNlhVAsKiE0VSMlq5j1FYK2eBklpO0ynTJK5xGFacE0t0dNkmI4MdN8Oxw+WwfRGzpYOMVsjCy3E7I2k6mxlXpaPOppKxp8os68fUy/EFWxR4Zo66il2Z1Ppx+XrFFfwqYpUrhRbdOKXQnSmjmtOMDEYFPoazFYKKu7I6WSTOe8XVnDDycfidor1bsv1JwcdnKVR+yp7vq1wv9iweQwpwvJfXubbwxg092vr2MD8Rc6WHgoR+Oaahttfht+if3Rc/pzuSe3FeJ80jTlKELOf2j6/schUqOTu3dsdWbbbbbb3be7bIHoznjx715UDEM6cGmTjIrGmBkRZCquooyJ8qxUUgNoRFIBiAAGAERoQwAAABgIYEoFyKIl0SxEkRxEbxv2Jinw/RhVNDEON7cM3uU4i1jnTaZfPZHGo7xfb0DK8XxudFSrXRwWW1+DqcFibowr1ytZ4jq+8lyuTM8B4uDqezk7S8+pXm+FU0anK8ore3j7J2d+WXvpPz17f7WCp8pdPUxY9LPdmmyfBSnCUKsvejs7cWfqbnAZfTorTBJHFraLYTZyfjPFXnRop8tzfolt92jqa8krs87r1vbY+b/lppR+fL/8Akix2GQ4dRpt8bHk/4r4vVi6VKO+iGrbduU5Wtb/BfU9RxOZwp0tKd5PZJbs5vLvDCqYiWKrJupK2nV/JG3EV9d/M0z6Y7l1OOByTwbVqWnVVlyo9fmdNX8JU1TtKCe3a1vS3B6J/xqNCGqVkkupyWb4+tiHahG0PzPh+i6luq5mJPUeWZtkk6Unb3o/dI1R6Xiclr2blv3uv24OEzigoyulZ3afqjTOusN457a8AA7ZJJk4spJxYFk11KyyLITRQhABAAAAIYhgAAAAMQASRZEqRZEsRahS4fowQ319AMRGbl8+V8zCRKlOzTI6jqsJI22Bxm9jnsHW48zZUX7yZjY3zW/q41Wt1MvJ83pUp629Uo9NkrnI11ap/1Hpl3V2v9G+wHhudSOunNT/uinFu/bYnHo+PNvt3+Dz7DK87VL1LXvJWRsaOdUJXtUW3fk8zhkWIacbQitVrpS1q6vZXexk1/DNShZ1MRU3tZJwT9b2OeNvD+uf47HPM1jGEmn0fU4DAYtxTqX3qNzfz/wBWMXO8R7OnKEZynq6yd3uY9ObajH5fcnGPl7eh5FhYygqst5crV0XkjMnmcYycYJzl2jvuczLMZUaUqS67J+RsfCFSKlJT+/LKtrZzy2pXkp4iW3SEX7q9e7MnFujh4XaWp7KKV5SfkRxeYvU40leXlwjGy/L3Kp7Sq9dR9+I+SXRHUc2MSdCvVWp+6nxFLp5s82/EPKXQqRk941N9la01s19D2zM8VSw1GVSbUUldt8JHknjDPKeKoVHb3Y7x2ad77M6z9uNyeNeegAGrxgQxATjInyiknBsAENiAAAAEMQAADBAAAADJwKycQLgfAosZ0jFAAOVZODxOl2fH6HQ4Wtexypk4PGSg+6ObOus646mrhdfkza5TjMRQWhKUk+sL6jU5bmcJ9Vc6PK8XFO7sZXr1fHvnuVZSxOJf/bn53sl2XPkVZlWrTeqpdeV2dFDNadun2Ocz7MI7tEbb+S2e65TNKzlNLzsbPK1qqQXnf5JnO1sVqqxS6yX2OkyjZuX5Y/dnVjz5v23T/iVvJGdXk4fBtJ7GFkkrapvqZGpznscu5W68ONupob2fL6vudlChCmnI5zIsDaz7GwzvGqjRq1ZN6aUJTaSvtFXEd15X+JHiX/kYt4eE37KhtJXtGdZPdf42+t+xx2bV3pjC+z3av24NfiKznOU5fFOTm3/U3d/qQbNpl49fJb0gGB0zACJJACROIkhyAgAxAIBgAgAAAYgAYAIBjTIjAuiyTexTFlk+CooAnpQaCKgA2hAOMmt07PyNhhc6qw66l58muAnFlsbqXiOp+VfUwcVmVWp8UtvIwwHIvlaycvjeovn+3/s7PBr3Zpcykor0XJymSQvP5r93+h2GWx+GT4V39TjbX4/ptraYKK7GyybD3aNdRvJM6jw9R6nFbZdJhIKMUupxH4u5n7PBOmn72IlGnt+X4pfaNvmdtGZ4t+LeZ+1xcKKe1CN3/fOzf/io/U6zGe9clcKAAavMAAAGiSQkiaKBIjPkmiMgIiGIgAAAEAAAATVT+mP0BVP6Y/QCAEpSv0S9FYiAxAhgCLYSKSSAs0D0kIyJqRUS09yqdLsWphcDGHYvlG5HQOKpsBOQUaTlJRXLdiDc+H6PD/Ndr5K36s65Q0wiuv7GsyfCpNPpBaUbzC09ctzG329WM+mzyvCv2afWX6HU5dQcIopybB3jubidO0bHLTnGBjseoU5Slsoxcm+yW7Z875pjZV61WtLmrJz9E3svkrL5HrP4nZxGlhXRW1TEfw13UP536W2/yPHTXH7ef5r74QAB2xA0CJIBoYIaKGRGRCItCJtECKAAAEAAAAAAAAAAMAAQIYASQwAB3DUAFBqE5ABBW2bvw7hk26j9EMCa+nWPt0WDlvY63LMEnp4GBjXrw7fD0lGCMPMsb7OLlZ7dgAjR4B4qz2eMxEqruoL3YRb+GN+vm+v+jTgB6Hz7e3oAACGiSGADGAFCYgAICMkMAIgAEV//2Q==';

myImage.addEventListener('load',function(){
    const canvas=document.getElementById('canvas1');
    const ctx=canvas.getContext('2d');
    canvas.width=276;
    canvas.height=182;
     
    
    ctx.drawImage(myImage,0,0,canvas.width,canvas.height);
    const pixels=ctx.getImageData(0,0,canvas.width,canvas.height); 
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    let particlesArray=[];
    const numberofParticles=5000;
    let mappedImage=[];
    for (let y=0;y<canvas.height;y++){
        let row=[];
        for(let x=0;x<canvas.width;x++){
            const red=pixels.data[(y*4*pixels.width)+(x*4)];
            const green=pixels.data[(y*4*pixels.width)+(x*4+1)];
            const blue=pixels.data[(y*4*pixels.width)+(x*4+2)];
            const brightness=calclulateRelativeBrightness(red,green,blue);
            const cell=[
                cellBrightness=brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
    console.log(mappedImage);
    function calclulateRelativeBrightness(red,green,blue){
        return Math.sqrt(
            (red*red)*0.299+
            (green*green)*0.587+
            (blue*blue)*0.114
        )/100;
    }
    class Particle{
        constructor(){
            this.x=Math.random()*canvas.width;
            this.y=0;
            this.speed=0;
            this.velocity=Math.random()*0.5;
            this.size=Math.random()*1.5+1;
            this.position1=Math.floor(this.y);
            this.position2=Math.floor(this.x);
        }
        update(){
            this.position1=Math.floor(this.y);
            this.position2=Math.floor(this.x);
            this.speed=mappedImage[this.position1][this.position2][0];
            let movement=(2.5-this.speed)+this.velocity;

            this.y+=movement;
            if(this.y>=canvas.height){
                this.y=0;
                this.x=Math.random()*canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle='white';
            ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
            ctx.fill();
        }
    }
    function init(){
        for(let i=0;i<numberofParticles;i++){
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
       // ctx.drawImage(myImage,0,0,canvas.width,canvas.height);
        ctx.globalAlpha=0.2;
        ctx.fillStyle='rgb(0,0,0)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        for(let i=0;i<particlesArray.length;i++){
            particlesArray[i].update();
            ctx.globalAlpha=particlesArray[i].speed*0.3;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

});

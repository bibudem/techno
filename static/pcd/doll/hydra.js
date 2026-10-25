// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

s0.initCam()

shape(()=>Math.sin(time)+3, .5,.01)
.repeat(3,3)
.scrollY(0.5,0.1)
.blend(src(s0))
.out(o0)

osc(1, 1, 1)
.out(o1)

src(o0)
  .modulate(src(o1)) 
  .out(o0)
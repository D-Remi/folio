$(document).ready(function(){
    $('input.round').wrap('<div class="round"/>').each(function(){
        var $input = $(this);
        var $div = $input.parent();
        var min = $input.data('min');
        var max = $input.data('max');
        var ratio = ($input.val() -min) / (max-min);

        var $circle = $('<canvas width="200px" height="200px"/>');
        var $color = $('<canvas width="200px" height="200px"/>');
        $div.append($circle);
        $div.append($color);
        
        var ctx = $circle[0].getContext('2d');
        ctx.beginPath();
        ctx.arc(100,100,90,0,2*Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = "rgba(255,255,255,0.4)";
        ctx.shadowOffsetX = 2;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0,0,0,1)";
        ctx.stroke();

        var ctx = $color[0].getContext('2d');
        ctx.arc(100,100,90,-1/2 *Math.PI,ratio*2*Math.PI - 1/2 *Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = "#91c2ff";
        ctx.stroke();

    });

    $(document).ready(function() {
        $('.git').css('width', '85%');
        $('.shell').css('width', '78%');
        $('.boot').css('width', '75%');
        $('.sass').css('width', '60%');
        $('.agile').css('width', '57%');
        $('.wordpress').css('width', '30%');
        $('.ui').css('width', '20%');
        $('.tech').css('width', '80%');
      });
      
});  

 
 
    

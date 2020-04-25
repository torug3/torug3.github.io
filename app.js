var data           =   [
    [ 400, 200 ],
    [ 210,140 ],
    [ 722,300 ],
    [ 70,160 ],
    [ 250,50 ],
    [ 110,280 ],
    [ 699,225 ],
    [ 90, 230 ]
];
var chart_width     =   800;
var chart_height    =   400;
var padding = 50;

//Create SVG Element
var svg = d3.select("#chart")
    .append("svg")
    .attr("width",chart_width)
    .attr("height",chart_height)

// Create Scales
var x_scale = d3.scaleLinear()
    .domain([
        d3.min(data, function(d){
            return d.date;
        }),
        d3.max(data, function(d){
            return d.date;
        })
    ])
    .range([padding, chart_width - padding * 2]);

var y_scale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d){
        return d.num;
    })])
    .range([chart_height - padding, padding ]);

var r_scale =  d3.scaleLinear()
    .domain([0, d3.max(data, function(d){
        return d[1];
    })])
    .range([5, 30]);

var a_scale =  d3.scaleSqrt()
    .domain([0, d3.max(data, function(d){
        return d.num;
    })])
    .range([0, 25]);

//Create Axis



//Create Circles
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",function(d){
        return x_scale(d.date) ;
    })
    .attr("cy",function(d){
        return y_scale(d.num) ;
    })
    .attr("r",function(d){
    return a_scale(d.num) ;
    })
    .attr("fill","#D1AB0E")

// Create Labels
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
        return time_format(d.date);
    })
    .attr("x",function(d){
    return x_scale(d.date) ;
    })
    .attr("y",function(d){
    return y_scale(d.num) ;
    })
    

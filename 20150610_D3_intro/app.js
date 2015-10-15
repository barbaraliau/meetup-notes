var svg = d3.select('body')
	.append('svg')
	.attr({
		height: 700,
		width: 500
	});

var group = svg.append('g')
	.attr('transform', 'translate(100,100');

var data = [1,1,2,3,5,8];

var xScale = d3.scale.linear()
	//both of these are arrays of two values
	.domain([0, d3.max(data)])
	.range([0, 400])

var yScale = d3.scale.ordinal()
	//d3.range will map to the indexes of the array
	//ordinal scale has a bunch of values in domain and range. used when you're matching strings to numbers and strings to strings
	.domain(d3.range(data.length))
	//rangebands calcluates steps inbetween domain range
	.rangeBands([0,200], 0.2);

	//tells d3 how to draw the axis. pass it in scale with domain and range. axis will adjust based on data
var axis = d3.svg.axis()
	//can add ticks to specify how many tick marks on scale
	//can also customize with text
	.ticks(5)
	.scale(xScale);

	//by default path has a fill. set to none. stroke black.
var axisGroup = svg.append('g')
	.attr('transform', 'translate(100, 600)')
	.call(axis);

//if these already exist it would find them and update them with the data
group.selectAll('rect.bar')
	.data(data)
	.enter()
	.append('rect')
	.classed('bar', true)
	.attr({
		//rangeBand() returns a number
		height: yScale.rangeBand(),
		width: function(d){
			return xScale(d);
			//or return xScale
		},
		y: function(d, i){
			//this keyword refers to DOM element
			return yScale(i);
		}
	})
	//everything following the .transition() will animate over time. good thing to have a starting value
	.transition()
		.attr({

		})
		.duration(1000)
		//can also pass in a function to return time
		.delay(function(d, i){
			return i * 500;
		})
		.ease('linear');
	//event listeners for interaction
	rects.on('mouseover', function(d){
		//can do anything in this function. returning won't do anything. this refers to DOM element. select it to wrap it back into d3
		d3.select(this)
			.style('fill', 'grey');
	})
	.on('mouseout', function(d){
		d3.select(this)
			.style('fill', null);
	})

rects.exit()
	.remove()


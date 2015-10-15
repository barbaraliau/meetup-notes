## Presenter: James Stewart

### Links:
	- bl.ocks.org
	- bl.ocks.org/jmstewart
	- bl.ocksplorer.org (searches through d3 gists)

At the most basic level, D3 let's you select elements and append other elements to them:
	d3.select('body')
		.append('p')
		.text('Hello World!');

#### Basic SVG shapes
	- rect
	- circle
	- polygons

#### Origin
	(0,0) is at the top left. positive right and positive down.
	subsequently SVG elements' origin is based off it's predecessors origin, which may not be the top of the DOM

Renders using a painted algorithm. First come, first made. Rendered on top of each other


	var svg = d3.select('body')
		.append('svg')
		.attr({
			height: 500,
			width: 500
		});

	//move the entire group
	var group = svg.append('g')
		.attr('transform', 'translate(100,100)');

	group.append('rect')
		.attr({
			height: 200,
			width: 200
		})
	//this is equivalent to in-line styling. can also css classes ===> .classed('blue', true);
	.style({
		fill: 'blue',
		stroke: 'black'
	})

	group.append('rect')
		.attr({
			height: 200,
			width: 200,
			transform: 'translate(200,200)'
		})
		.style({
			fill: 'green',
			stroke: 'black'
		})


	//similar to jquery selection. css selection.
	d3.select('body')
		.append('p')
		.text('Hello World!');


	d3.select('body')
		.append('svg')
		.attr('height', 500)
		.attr('width', 500)

	//can append attributes separately or you can append an attribute object

	d3.select('body')
		.append('svg')
		.attr({
			height: 500,
			width: 500
		})

	//everything in D3 is chainable

	//also a style element
	d3.select('body')
		.append('svg')
		.attr({
			height: 500,
			width: 500
		})
		.style({
			fill: 'blue',
			stroke: 'black'
		})

	//can also set an x and y position to translate it. can also set a transform property on the attribute
	//(0,0) is the origin point and on the top left. positive right and positive down
	...
		.attr({
			height: 200,
			width: 200,
			transform: 'translate(100,100)'
		})


### Data-binding

1. selectAll('thing you want to select')
	- group.selectAll('rect.bar')
2. d3 method .data(data) to bind the selection to the bars //doesn't exist yet
3. enter()
4. and then "create" the things you want to make from the data

If there is an exit strategy and there are less data points than to begin with, d3 will find them and you can call a .remove()

```
	var rects = group.selectAll('rect.bar')
		.data(data);

	rects.enter()
		.append('rect')
		.classed('bar', true);

	rects.attr({
		height: 50,
		width: 50
	})

	rects.exit()
		.remove();
```

## D3 Power
	- Always returns the data and the index
	- any attribute can take in a function as long as it returns something (typically a number)

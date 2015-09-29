
# Caleydo Tooltip [![Caleydo Web](https://img.shields.io/badge/Caleydo-plugin-blue.svg)](https://github.com/Caleydo/caleydo_web_container)

_A simple tooltip for D3 visualizations._

> This repository contains a [Caleydo Web plugin](https://github.com/Caleydo/caleydo_web_container) and requires other Caleydo Web components. See the Caleydo Web "Getting Started" tutorial on how to work with Caleydo Web plugins.

## How to Install

### Using the Caleydo Web Development Environment

```
./manage.sh install caleydo_tooltip
```

### Using Bower

```
bower install requirejs --save
bower install d3#~3.5.5 --save
bower install https://github.com/Caleydo/caleydo_tooltip.git --save
```

## How to Use

(this won't work yet because the build script for the JavaScript and styles is missing)

```html
<!DOCTYPE html>
<html>
	<head>
		<script data-main="main.js" src="bower_components/requirejs/require.js"></script>	
	</head>
	<body>
		<div id="test">Hover Here!</div>
	</body>
</html>
```

```js
define(['bower_components/caleydo_tooltip/main', 'bower_components/d3/d3'],function(tooltip,d3) {
  d3.select('#test').call(
      tooltip.bind("Here is a tooltip!")
    );
});

```

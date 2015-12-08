/**
 * Created by Samuel Gratzl on 05.08.2014.
 */

/// <reference path="../../tsd.d.ts" />
/// <amd-dependency path='css!./style' />
import d3 = require('d3');

const tooltip = d3.select('body').append('div')
  .attr('class', 'tooltip')
  .style('display', 'block')
  .style('opacity', 0);


/**
 * returns a D3 compatible call method, which registers itself to show a tooltip upon mouse enter
 * @param toLabel the text to show or a function to determine the text to show
 * @returns {Function}
 */
export function bind<T>(toLabel:((d:T, i:number)=>string) | string) {
  //wrap as function
  const labelfor:((d:T, i:number)=>string) = <any>d3.functor(toLabel);

  return function (selection:d3.Selection<T>) {
    selection.on('mouseenter.tooltip', function (d:T, i) {
        tooltip
          .html(labelfor.call(this, d, i))
          .style('left', (d3.event.pageX + 5) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
        tooltip.style('display', 'block').transition()
          .delay(200)
          .duration(200)
          .style('opacity', 0.9);
      })
      .on('mouseleave.tooltip', function () {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0)
          .each('end', function () {
            d3.select(this).style('display', 'none');
          });
      });
  };
}

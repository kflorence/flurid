/**
 * @fileOverview jQuery.flurid
 *
 * Helper functions for the Flurid CSS Grid Framework
 *
 * @author Kyle Florence <kyle[dot]florence[at]gmail[dot]com>
 * @version 1.0.20110119
 */
;(function($) {
  /**
   * $.fn.flurid: Allows this function to be chained to a jQuery Object
   * selection.
   *
   * @example $(".grid").flurid({...});
   *
   * @param {Object} [options]
   *    An Object containing key/value pairs that will overwrite the default
   *    options of the plugin.
   *
   * @return {jQuery}
   *    The jQuery Object(s) that were passed to this function.
   */
  $.fn.flurid = function(options) {
    var self = this;

    options = $.extend({}, $.fn.flurid.options, options);
/*
    // fix subpixel rounding problems
    if (options.fix_subpixel_rounding && $.resize) {

      var fix_subpixel_rounding = function() {
        var grid_width = self.width();

        self.each(function() {
          var $row = $(".row", self);

          $row.each(function(r, row) {
            var $columns = $(".column", $row),
              column_count = $columns.length;

            $columns.each(function(c, col) {
              var c = (c + 1),
                $col = $(col),
                even = (c % 2 === 0),
                width = (grid_width / column_count);

              // we are going to mimick gecko here
              $col.width(even ? width + 1 : width);
              console.log(width, $col.width());
            });
          });
        });
      };

      // attach to window.onresize
      $(window).resize(fix_subpixel_rounding);
    }
*/
    return this.each(function() {
      var $grid = $(this),
        $rows = $(".row", $grid),
        row_count = $rows.length;

      // loops through rows
      $rows.each(function(r, row) {
        var r = (r + 1),
          $row = $(row),
          $columns = $(".column", $row),
          column_count = $columns.length,
          tallest_column = 0;

        // loops through columns
        $columns.each(function(c, col) {
          var c = (c + 1),
            $col = $(col),
            height = $col.height(),
            insidePushBlock = $col.parents("[class*=push]").length > 0;

          // alternating columns
          if (options.alternate == "columns") {
            $col.addClass(c % 2 === 0 ? "even" : "odd");
          }

          // first / last column
          if (c === 1) {
            $col.addClass("first");
          } else if (c === column_count && !insidePushBlock) {
            $col.addClass("last");
          }

          // store tallest column height
          if (height > tallest_column) {
            tallest_column = height;
          }
        });

        // alternating rows
        if (options.alternate == "rows") {
          $row.addClass((r % 2 == 0 ? "even" : "odd"));
        }

        // first / last row
        if (r === 1) {
          $row.addClass("first");
        } else if (r === row_count) {
          $row.addClass("last");
        }

        // make columns have equal heights
        if (options.equal_height_columns) {
          $columns.css("height", tallest_column);
        }
      });
    });
  };

  /**
   * @namespace Holds the default options for the jQuery.flurid plugin
   */
  $.fn.flurid.options = {
    /**
     * What to alternate (class-wise), if anything.  Basically
     * determines where to apply the "odd" and "even" classes. Can
     * be set to "rows", "columns" or "neither".
     *
     * @default "columns"
     * @type String
     */
    alternate: "columns",

    /**
     * Whether or not to make all of the columns in a row the same
     * height.  Can be true or false.
     *
     * @default false
     * @type Boolean
     */
    equal_height_columns: false,

    fix_subpixel_rounding: true
  };

})(jQuery);

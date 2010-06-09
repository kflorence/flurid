/**
 * jQuery.flurid
 * 
 * @author    Kyle Florence <kyle.florence@gmail.com>
 * @version    1.0.20100609
 * 
 */
(function($) {
    /**
     * We are extending jQuery
     */
    $.fn.extend({
        /**
         * $.fn.flurid: Allows this function to be chained to a jQuery Object
         * selection.
         * 
         * @example $(".grid").flurid({...});
         * 
         * @param    options    An Object containing key/value pairs that will
         *                     overwrite the default options of the plugin.
         * 
         * @return    The jQuery Object(s) that were passed to this function.
         * @type    jQuery Object
         */
        flurid: function(options) {
            var options = $.extend({
                /**
                 * What to alternate (class-wise), if anything.  Basically
                 * determines where to apply the "odd" and "even" classes. Can
                 * be set to "rows", "columns" or "neither".
                 * 
                 * @default    "columns"
                 * @type    String
                 */
                alternate: "columns",
                
                /**
                 * Whether or not to make all of the columns in a row the same
                 * height.  Can be true or false.
                 * 
                 * @default    false
                 * @type    Boolean
                 */
                equal_height_columns: false
            }, options || {});
            
            // keep it chainable (tm)
            return this.each(function() {
                var $this = $(this),
                    $rows = $(".row", $this);
                
                // loops through rows
                $rows.each(function(r, row) {
                    var $row = $(row),
                        $columns = $(".column", $row),
                        column_count = $columns.length,
                        tallest_column = 0;
                    
                    // loops through columns
                    $columns.each(function(c, col) {
                        var c = (c + 1),
                            $col = $(col),
                            height = $col.height();
                        
                        // alternating columns
                        if (options.alternate == "columns") {
                            $col.addClass((c % 2 == 0 ? "even" : "odd"));
                        }

                        // add "last" to last column, if needed
                        // (except to columns inside a push block)
                        if (c == column_count && c != 1) {
                            if (!$col.parents("[class*=push]").length) {
                                $col.addClass("last");
                            }
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
                    
                    // make columns have equal heights
                    if (options.equal_height_columns) {
                        if ($.browser.msie && $.browser.version == 6.0) {
                            $columns.css({'height': tallest_column});
                        } else {
                            $columns.css({'min-height': tallest_column});
                        }
                    }
                });
            });
        }
    });
})(jQuery);
var app = angular.module('CoverLeter', []).
		  filter('capitalize', function() {
			return function(input, all) {
			  return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
			}
		  });
		  
jQuery.fn.clearText = function ()
{
    return this.each(function ()
    {
        var v = this.value;

        $(this).blur(function ()
        {
            if (this.value.length == 0) this.value = v;
        }).focus(function ()
        {
            this.value = "";
        }); 
    });
};

$("input:text").clearText();
$('.phone').mask('000-000-0000');
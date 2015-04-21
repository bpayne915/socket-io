'use strict';

var icon1 = 
// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Posts', 'articles', '/articles(/create)?');
	}
]);
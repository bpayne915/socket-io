'use strict';

// Configuring the Articles module
angular.module('photos').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Photos', 'photos', '/photos(/create)?');
	}
]);

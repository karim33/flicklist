

var api = {
	root: "https://api.themoviedb.org/3",
	token: "6b3776b906aa09a17095fd72d62ac00a" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		dataType: 'json',
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			// console.log(JSON.stringify(response));
			// let titles = JSON.stringify(response);
			// console.log(response.results[0].title);
			const $ul = $('<ul>');
			for (const movies of response.results){
				const $li = $('<li>')
				console.log(movies.title);
				const movie = movies.title
				$li.append(movie)
				// console.log($li);
				$ul.append($li)
			}

			$('body').append($ul)

		}
	});
}


console.log("The script loaded!");
testTheAPI();

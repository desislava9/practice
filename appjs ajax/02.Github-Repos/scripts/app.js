const list = document.getElementById('repos');
function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/${username}/repos/`;

	
	fetch(url) 
	.then(onHeaders)
	.then(onSuccess)
	.catch(onError);
}
function onHeaders(response)  {
	
		if (!response.ok) {
			throw 'Error';
		}
		return res.json();
	
}
function onSuccess(data) {
	data.map(createListItem)
}
function onError(error) {
	list.textContent = error;
}
function createListItem(entry) {
	console.log(entry);
	return entry;
}
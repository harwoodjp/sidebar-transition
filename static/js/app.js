const commentsBtns = document.querySelectorAll(".comments-btn"),
	comments = document.querySelector(".comments");
let clickedArticle, articleComments, articleTitle, commentsHtml;

commentsBtns.forEach(function(btn) {
	btn.addEventListener("click", function() {
		clickedArticleComments = getArticleComment(btn.dataset.articleId);
		renderCommentToHtml(clickedArticleComments);
		comments.classList.toggle("hide");
		document.querySelector(".comments-content").classList.toggle("hide-force");		
	})
});



function getArticleComment(id) {
	const commentsData = `
		[
			{
				"id": 0,
				"title": "Variations of Lorem Ipsum",
				"comments": ["This is a well-written article.", "Lorem ipsum is helpful in various situations", "Lorem ipsum is my favorite placeholder text."]
			},
			{
				"id": 1,
				"title": "Readable Content: Distracting?",
				"comments": ["Everyone should use lorem ipsum when building webpage scaffolds.", "I prefer using real text."]
			}
		]
	`;
	const commentsDataJson = JSON.parse(commentsData);
	return commentsDataJson[id];
}


function renderCommentToHtml(commentJsonObj) {
	articleComments = commentJsonObj["comments"];
	articleTitle = commentJsonObj["title"];

	commentsHtml = "";

	articleComments.forEach(function(comment) {
		commentsHtml += `<p class="article-comment">${comment}</p>`;
	})
	console.log(commentsHtml);

	console.log(document.querySelector(".comments .article-title"));
	document.querySelector(".comments .article-title").innerHTML = `Comments for "<em>${articleTitle}</em>"`;
	document.querySelector(".comments .article-comments").innerHTML = commentsHtml;


}
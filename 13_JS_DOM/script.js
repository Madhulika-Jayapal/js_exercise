//Level1
var firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent);

var paragraphById1 = document.querySelector('#paragraph1');
var paragraphById2 = document.querySelector('#paragraph2');
var paragraphById3 = document.querySelector('#paragraph3');
var paragraphById4 = document.querySelector('#paragraph4');

var allParagraphs = document.querySelectorAll('p');

allParagraphs.forEach(function(paragraph) {
    console.log(paragraph.textContent);
});

var fourthParagraph = document.querySelector('p:nth-child(4)');
fourthParagraph.textContent = "Fourth Paragraph";

allParagraphs.forEach(function(paragraph, index) {
    paragraph.id = 'paragraph' + (index + 1); // Set id like paragraph1, paragraph2, etc.
    paragraph.classList.add('paragraph-class'); // Add a common class
});
//Level2
allParagraphs.forEach(function(paragraph) {
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = 'lightgray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '18px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
});

allParagraphs.forEach(function(paragraph, index) {
    if (index % 2 === 0) {
        paragraph.style.color = 'green';
    } else {
        paragraph.style.color = 'red';
    }
});


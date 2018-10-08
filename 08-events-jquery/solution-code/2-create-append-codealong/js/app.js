/* 
Use DOM manipulation to create the sidebar elements (heading and paragraphs) and text content shown in the preview.png image,
and then append them to the DOM.

For styling purposes, use the following HTML elements and structure:

aside      // parent element: already in the HTML file
    h3
    p
    p
    img    // BONUS
    h3     // BONUS
    ul     // BONUS
        li // BONUS
        ...
*/

// * STEP 1
// Write a statement to create the h3 element, then write statements to create the two p elements.
// (HINT: Create variables to store each of the newly created elements.)

let $heading = $('<h3>');
let $p1 = $('<p>');
let $p2 = $('<p>');

// * STEP 2
// Write a statement to add "About Us" as the text of the h3 element, then write statements add text to the two p elements, using the following text values:

//     Text for the first paragraph:
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.

//     Text for the second paragraph:
//     Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.

$heading.text('About Us');
$p1.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.');
$p2.text('Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.');


// * STEP 3
// Write a statement to create a variable called sidebar and set its value to reference the aside element.
// (NOTE: 'aside' is an HTML element similar to a div; it's used for related content, such as this sidebar.)

let $sidebar = $('aside');


// * STEP 4
// Write a statement to attach the heading element as a child of the aside element, then write statements to attach the paragraph elements as children of the aside element.
// (HINT: Be sure to attach the elements in the order in which they should appear in the browser window, from top to bottom.)

$sidebar.append($heading);
$sidebar.append($p1);
$sidebar.append($p2);


// * STEP 5
// Save your changes, open index.html in your browser, then compare the web page to the preview.png image.


// ** BONUS 1: Add the image shown in the preview-bonus.png image. Specify "images/about.jpg" as the source file.
// (HINT: The image should be a sibling to the h3 and p elements you already added.)

let $image = $('<img>');
let imageSource = "images/about.jpg";
$image.attr('src', imageSource);
$sidebar.append($image);


// ** BONUS 2: Add "Recent issues" heading and the list of issues, as shown in the preview-bonus.png image.
// (HINT: The list should be a sibling to the h3 and p elements you already added.)

let $issuesHead = $('<h3>').text("Recent Issues");
let $list = $('<ul>');
let $item1 = $('<li>').text("Issue Nineteen: Camping");
let $item2 = $('<li>').text("Issue Eighteen: Food"); // could also use a loop here to DRY out the code
let $item3 = $('<li>').text("Issue Seventeen: Signs");
let $item4 = $('<li>').text("Issue Sixteen: Friends");
let $item5 = $('<li>').text("Issue Fifteen: Carnivals");
let $item6 = $('<li>').text("Issue Fourteen: Gatherings");

$list.append($item1); // could also use a loop here to DRY out the code
$list.append($item2);
$list.append($item3);
$list.append($item4);
$list.append($item5);
$list.append($item6);

$sidebar.append($issuesHead);
$sidebar.append($list);
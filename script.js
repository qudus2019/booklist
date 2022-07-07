var lis = document.querySelectorAll("ul li");
var ul = document.querySelector("ul");

//to remove child
/*
  lis.forEach(function(li){
  li.addEventListener('click',function(e){
    if (e.target.className == "btn"){
      var parent = e.target.parentElement;
      parent.parentElement.removeChild(parent);
    }
  })
}) */

//OR
ul.addEventListener('click', function(e){
  if(e.target.className == "btn"){
    var li = e.target.parentElement;
  
    if( confirm('Are you sure you want to delete book ?')){
      li.parentElement.removeChild(li);
    }
  }
});

/*
lis.forEach(function(li){
  li.addEventListener('mouseover',function(e) {

        // First  remove the border class from all lis

     lis.forEach(function(li){
      li.className = '';
     })

//then each li

    if(li.className == "border"){
      li.classList.remove("border")
    }else{
      li.classList.add("border")
    }
  })
  
}); */

// OR

ul.addEventListener('mouseover', function(e){
  if(e.target.tagName == "LI"){
    
    //new nodelist containing the newly created lis
    var liss = document.querySelectorAll("li");

    //remove border class from all lis
    liss.forEach(function(li){
      li.classList.remove("border");
    })

    //add border to the target
  e.target.classList.add("border");
    
    
  } ;
});

var div = document.querySelectorAll("ul li").forEach(function(each){
  each.querySelector('div');
  var mark = document.createElement('input');
  var markLabel = document.createElement('label');
  markLabel.setAttribute('for','markasread');
  mark.setAttribute('type', 'checkbox');
markLabel.textContent = 'Completed';
  mark.setAttribute('name','mark');
mark.setAttribute('id','markasread');
each.appendChild(markLabel);
markLabel.appendChild(mark);
markLabel.classList.add('read');
mark.className = 'markChk';

});





// to add a book, first grab the form from the document

var add = document.forms.add;

//add an event listener to the form

add.addEventListener('submit', function(e){
   
  e.preventDefault();
  
  var bookname = add.bookname.value;
  var author = add.authorname.value;

  //then create new elements to be added

  var li =document.createElement("li");
  var div = document.createElement('div');
  var h = document.createElement("h1");
  h.setAttribute('style','text-transform:Capitalize');
  var p = document.createElement('p');
  p.setAttribute('style','text-transform:Capitalize');
  var button = document.createElement("button");

  ///append all child into their parents
  ul.appendChild(li);
  li.appendChild(div);
  div.appendChild(h);
  div.appendChild(p);
  p.textContent = 'By ';
  li.appendChild(button);

  var mark = document.createElement('input');
  var markLabel = document.createElement('label');
  markLabel.setAttribute('for','markasread');
  mark.setAttribute('type', 'checkbox');
markLabel.textContent = 'Completed';
  mark.setAttribute('name','mark');
mark.setAttribute('id','markasread');
li.appendChild(markLabel);
markLabel.appendChild(mark);
markLabel.classList.add('read');
mark.className = 'markChk';

var markChk = document.querySelectorAll(".markChk");
markChk.forEach(function(eachChk){

  eachChk.addEventListener('change',function(e){

    var parent = e.target.parentElement.parentElement;
    
    if(eachChk.checked == true){
      parent.style.backgroundColor = 'silver';
      
    }else{
      parent.style.backgroundColor = '';
    }
  });

});

  //add text content

  h.textContent = bookname;
  p.textContent += author; 
  button.textContent = "delete";

  //style to button
  button.classList.add('btn');

});

var markChk = document.querySelectorAll(".markChk");
markChk.forEach(function(eachChk){

  eachChk.addEventListener('change',function(e){

    var parent = e.target.parentElement.parentElement;
    
    if(eachChk.checked == true){
      parent.style.backgroundColor = 'silver';
        }else{
      parent.style.backgroundColor = '';
    }
  })
})

var searchform  = document.forms.searchform;
var searchfield = searchform.search;

//add keyup event listener
searchfield.addEventListener('keyup',function(e){
  e.preventDefault();

 var searchterm = searchfield.value;

var books = ul.querySelectorAll('ul li');

  books.forEach(function(book){

  var term = book.querySelector('div h1').textContent.toLowerCase();
  var author = book.querySelector('div p').textContent.toLowerCase();

  if(term.indexOf(searchterm.toLowerCase()) != -1 || author.indexOf(searchterm.toLowerCase()) != -1 ){

    book.style.display = "";
   
    } else{

      book.style.display = "none";
    }

});

});

var hideAll = document.forms.hide.hideAll;

hideAll.addEventListener('change', function(e){
  if(hideAll.checked == true){
    ul.style.display = 'none';
  }else{
    ul.style.display = 'initial'
  }
})







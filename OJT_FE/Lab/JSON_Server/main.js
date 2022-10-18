var courseApi = 'http://localhost:3000/courses';
var saveBtn = document.querySelector('#save');

function start(){
    getCourses(renderCourse);
    headleCreateCourse();

    saveBtn.style.display = 'none';
}

start();


function getCourses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
    .then(function (response) {
        return response.json();})
    .then(callback);

}

function renderCourse(courses){
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course){
        return `
        <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        <button onclick="handleUpdateCourse(${course.id})">Update</button>
        </li>
        `;
    });   
    listCoursesBlock.innerHTML = htmls.join('');
}

function headleCreateCourse(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function(){
            getCourses(renderCourse);
        });
    }
}

function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi+'/'+id, options)
    .then(function (response) {
        return response.json();
    })
    .then(function(){
        var courseItem = document.querySelector('.course-item-'+id)
        if(courseItem){
            courseItem.remove();
        }
    });
}

function updateCourse(data, callback) {
    fetch(courseApi + '/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .then(callback)
  }
  
  function handleUpdateCourse(id) {
    var saveBtn = document.querySelector('#save');
    var courseItem = document.querySelector('.course-item-'+id);
    var dataByID = {
        name: courseItem.querySelector('h4').innerText,
        description: courseItem.querySelector('p').innerText
    } 
    document.querySelector('input[name="name"]').value = dataByID.name ;
    document.querySelector('input[name="description"]').value = dataByID.description;
    saveBtn.style.display = 'inline-block';
    
    saveBtn.onclick = function() {
      var formData = {
        id: id,
        name: document.querySelector('input[name="name"]').value,
        description: document.querySelector('input[name="description"]').value
      }
      updateCourse(formData, function() {
        getCourses(renderCourse);
        saveBtn.style.display = 'none';
      });
    }
  }

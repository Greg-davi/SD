const btnCourses = document.getElementById('courses');
const btnAttendance = document.getElementById('attendance');
const btnAssignment = document.getElementById('assignment');
const btnResults = document.getElementById('results')
const attendance = document.getElementById('attendance-clicked');



// Courses
btnCourses.addEventListener('click', ()=>{
    document.getElementById('clicked-courses').style.display = 'block';
})
document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('clicked-courses').style.display = 'none';
})

// Attendance
btnAttendance.addEventListener('click', ()=>{
    attendance.style.display = 'block'
})
document.getElementById('attended').addEventListener('click', ()=>{
    attendance.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('attend').innerHTML = 1; 
})

// Assignment
btnAssignment.addEventListener('click', ()=>{
    document.getElementById('assignment-clicked').style.display = 'block';
});

document.getElementById('assignment-close').addEventListener('click', ()=>{
    document.getElementById('assignment-clicked').style.display = 'none';
    console.log('closed')

})
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('attend').innerHTML = 1; 
});

// Results
btnResults.addEventListener('click', ()=>{
    document.getElementById('results-clicked').style.display = 'block';
});

document.getElementById('results-close').addEventListener('click', ()=>{
    document.getElementById('results-clicked').style.display = 'none';
})


document.getElementById('bell').addEventListener('click', ()=>{
    if (document.getElementById('notification').style.top === '3rem'){
        document.getElementById('notification').style.top = '-13rem'
    } else {
         document.getElementById('notification').style.top = '3rem';
    }
   

})

document.getElementById('menu').addEventListener('click', ()=>{

//    if (document.getElementById('profile-links').style.display = 'flex'){
//         document.getElementById('profile-links').style.style = 'none'
//     } else {
//          document.getElementById('profile-links').style.display = 'flex';
//     }

console.log('clicked')

    if (document.getElementById('profile-links').style.top === '3rem'){
        document.getElementById('profile-links').style.top = '-13rem';
    } else {
        document.getElementById('profile-links').style.top = '3rem';
    }
   

})


document.addEventListener('DOMContentLoaded', ()=>{

    const email = document.querySelector('.emails');

    console.log(email)
});


